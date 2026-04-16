'use client'
import DefaultDrawer from "@/app/shared/components/DefaultDrawer";
import Link from "next/link";
import Image from "next/image";
import React, {useEffect, useState} from "react";
import {db} from './config/firebase_a';
import {collection, addDoc} from "firebase/firestore";
import {signInWithEmailAndPassword} from "firebase/auth";
import {auth} from './config/firebase_a';
import {getData} from './getData';
import {apartments, votingRound} from "./apartments";

interface ResultType {
    scores: {
        [key: string]: {
            [rank: number]: number;
        }
    }
}

const ordinalLabels: { [key: number]: string } = {
    1: 'førsteplasser',
    2: 'andreplasser',
    3: 'tredjeplasser',
    4: 'fjerdeplasser',
    5: 'femteplasser',
    6: 'sjetteplasser',
};

function getOrdinalLabel(rank: number): string {
    return ordinalLabels[rank] || `${rank}. plasser`;
}

export default function Arne() {
    const [votes, setVotes] = useState<number[]>(new Array(apartments.length).fill(0));
    const [usr, setUsr] = useState("");
    const [pass, setPass] = useState("");
    const [infoText, setInfoText] = useState("")
    const [infoType, setInfoType] = useState<'info' | 'success' | 'error'>('info');
    const [results, setResults] = useState<ResultType | null>(null);
    const [username, setUsername] = useState("");
    const [logInMessage, setLogInMessage] = useState("Log in - kun admin")
    const [dbInfo, setdbInfo] = useState("")
    const [loading, setLoading] = useState(true);
    const [hasVoted, setHasVoted] = useState(false);

    const availableApts = apartments.filter(a => a.available !== false);
    const unavailableApts = apartments.filter(a => a.available === false);
    const N = availableApts.length;

    useEffect(() => {
        const fetchData = async () => {
            const data = await getData();
            // @ts-ignore
            setResults(data);
            setLoading(false);
        };
        fetchData();
    }, []);

    const loginUser = async (usr: string, password: string) => {
        try {
            const userCredential = await signInWithEmailAndPassword(auth, usr, password);
            setLogInMessage('Logged in as' + userCredential.user.email)
            setdbInfo("")
        } catch (error) {
            console.error("Feil ved innlogging:");
        }
    };

    const showInfo = (text: string, type: 'info' | 'success' | 'error') => {
        setInfoText(text);
        setInfoType(type);
    };

    const handleVote = async () => {
        const hasUnranked = apartments.some((apt, i) => apt.available !== false && votes[i] === 0);
        if (hasUnranked) {
            showInfo('Vennligst ranger alle kandidatene.', 'error');
            return;
        }
        if (username === "") {
            showInfo("Vennligst fyll inn navn", 'error');
            return;
        }
        const availableVotes = votes.filter((_, i) => apartments[i]?.available !== false && votes[i] !== 0);
        if (new Set(availableVotes).size !== availableVotes.length) {
            showInfo('Duplikate rangeringer er ikke tillatt.', 'error');
            return;
        }
        try {
            await addDoc(collection(db, `Badeklubben/badeklubben/votes-${votingRound}`), {
                userId: username,
                votes,
                timestamp: new Date()
            });
            showInfo(`Takk for din stemme, ${username}!`, 'success');
            setHasVoted(true);
            const data = await getData();
            // @ts-ignore
            setResults(data);
        } catch (error) {
            showInfo('Det oppstod en feil under lagring av stemmen.', 'error');
        }
    };

    const handleChange = (event: React.ChangeEvent<HTMLSelectElement>, index: number) => {
        const newVotes: number[] = [...votes];
        newVotes[index] = Number(event.target.value);
        setVotes(newVotes);
    };

    const infoColor = infoType === 'success' ? 'text-green-600' : infoType === 'error' ? 'text-red-600' : 'text-gray-700';

    return (
        <div>
            <DefaultDrawer/>
            <div className="max-w-4xl mx-auto p-6">
                <h1 className="text-3xl font-bold mb-6">Vote på din favoritt!</h1>

                <div className={`grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6 ${hasVoted ? 'opacity-50 pointer-events-none' : ''}`}>
                    {apartments.map((apartment, index) => {
                        const isUnavailable = apartment.available === false;
                        return (
                        <div key={index} className={`border border-gray-200 rounded-lg shadow-sm flex flex-col gap-2 overflow-hidden ${isUnavailable ? 'opacity-40 grayscale' : ''}`}>
                            <div className="relative w-full h-48">
                                <Image
                                    src={apartment.img}
                                    alt={apartment.name}
                                    fill
                                    className="object-cover"
                                />
                            </div>
                            <div className="p-4 flex flex-col gap-2">
                            <div className="flex flex-wrap items-center gap-2">
                                <Link
                                    href={apartment.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="font-semibold text-lg underline"
                                >
                                    {apartment.name}
                                </Link>
                                {isUnavailable && (
                                    <span className="text-xs bg-red-100 text-red-700 px-2 py-0.5 rounded-full font-medium shrink-0">
                                        Ikke tilgjengelig
                                    </span>
                                )}
                            </div>
                            <p className="text-sm text-gray-500">
                                Pris: {apartment.price.toLocaleString('nb-NO')} kr · Plass til {apartment.guests} gjester
                            </p>

                            {apartment.info && (
                                <div className="text-sm space-y-2 mt-1">
                                    {apartment.info.facts && (
                                        <div className="space-y-0.5 text-gray-600">
                                            {apartment.info.facts.timeToCenter && <p>Sentrum: {apartment.info.facts.timeToCenter}</p>}
                                            {apartment.info.facts.timeToAirport && <p>Flyplass: {apartment.info.facts.timeToAirport}</p>}
                                            {apartment.info.facts.timeToBeach && <p>Strand: {apartment.info.facts.timeToBeach}</p>}
                                            {apartment.info.facts.features && apartment.info.facts.features.length > 0 && (
                                                <div className="flex flex-wrap gap-1 mt-1">
                                                    {apartment.info.facts.features.map((f, i) => (
                                                        <span key={i} className="bg-gray-100 text-gray-700 px-2 py-0.5 rounded text-xs">{f}</span>
                                                    ))}
                                                </div>
                                            )}
                                        </div>
                                    )}
                                    {apartment.info.pros.length > 0 && (
                                        <ul className="space-y-0.5">
                                            {apartment.info.pros.map((pro, i) => (
                                                <li key={i} className="text-green-700">+ {pro}</li>
                                            ))}
                                        </ul>
                                    )}
                                    {apartment.info.cons.length > 0 && (
                                        <ul className="space-y-0.5">
                                            {apartment.info.cons.map((con, i) => (
                                                <li key={i} className="text-red-600">- {con}</li>
                                            ))}
                                        </ul>
                                    )}
                                </div>
                            )}

                            {isUnavailable ? (
                                <div className="border border-gray-200 rounded px-2 py-1 text-sm w-full mt-auto text-gray-400 bg-gray-50">
                                    Ikke tilgjengelig
                                </div>
                            ) : (
                                <select
                                    value={votes[index]}
                                    onChange={(e) => handleChange(e, index)}
                                    className="border border-gray-300 rounded px-2 py-1 text-sm w-full mt-auto"
                                    disabled={hasVoted}
                                >
                                    <option value={0}>Velg rang...</option>
                                    {Array.from({length: N}, (_, i) => (
                                        <option key={i + 1} value={i + 1}>{i + 1}</option>
                                    ))}
                                </select>
                            )}
                            </div>
                        </div>
                        );
                    })}
                </div>

                <div className="flex flex-wrap items-center gap-3 mb-4">
                    <input
                        onChange={(e) => setUsername(e.target.value)}
                        placeholder="Skriv ditt navn her"
                        disabled={hasVoted}
                        className="border border-gray-300 rounded px-3 py-1.5 text-sm disabled:opacity-50"
                    />
                    <button
                        onClick={handleVote}
                        disabled={hasVoted}
                        className="bg-blue-600 hover:bg-blue-700 disabled:opacity-50 text-white font-medium px-4 py-1.5 rounded text-sm transition-colors"
                    >
                        {hasVoted ? 'Stemme sendt!' : 'Send inn stemme'}
                    </button>
                </div>

                {infoText && (
                    <p className={`mb-6 font-medium ${infoColor}`}>
                        {infoText}
                    </p>
                )}

                <h2 className="text-2xl font-semibold mb-4 mt-8">Resultater</h2>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {availableApts.map((apt) => (
                        <div key={apt.name} className="border border-gray-200 rounded-lg p-4 shadow-sm">
                            <h3 className="text-xl font-semibold mb-1">{apt.name}</h3>
                            <p className="text-sm text-gray-500 mb-2">Har fått:</p>
                            {loading ? (
                                <div className="space-y-2">
                                    {Array.from({length: N}, (_, i) => (
                                        <div key={i} className="h-4 bg-gray-200 rounded animate-pulse w-4/5"/>
                                    ))}
                                </div>
                            ) : results ? (
                                <div className="space-y-1">
                                    {Array.from({length: N}, (_, i) => i + 1).map(rank => (
                                        <p key={rank} className="text-sm">
                                            {results.scores[apt.name]?.[rank] ?? 0} {getOrdinalLabel(rank)}
                                        </p>
                                    ))}
                                </div>
                            ) : (
                                <p className="text-sm text-gray-500">Ingen data tilgjengelig.</p>
                            )}
                        </div>
                    ))}
                </div>

                {unavailableApts.length > 0 && (
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">
                        {unavailableApts.map((apt) => (
                            <div key={apt.name} className="border border-gray-200 rounded-lg p-4 shadow-sm opacity-40">
                                <h3 className="text-xl font-semibold mb-1">{apt.name}</h3>
                                <p className="text-sm text-red-600 font-medium">Ikke tilgjengelig</p>
                            </div>
                        ))}
                    </div>
                )}

                <div className="mt-24">
                    <p>{dbInfo}</p>
                </div>

                <div hidden={true}>
                    <br/><br/>
                    <p>{logInMessage}</p>
                    <input onChange={(e) => setUsr(e.target.value)} placeholder="Brukernavn" className="border px-2 py-1 rounded mr-2"/>
                    <br/>
                    <input onChange={(e) => setPass(e.target.value)} placeholder="Passord" className="border px-2 py-1 rounded"/>
                    <br/><br/>
                    <button onClick={() => loginUser(usr, pass)} className="bg-blue-600 text-white px-4 py-2 rounded">Log in!</button>
                </div>
            </div>
        </div>
    );
}

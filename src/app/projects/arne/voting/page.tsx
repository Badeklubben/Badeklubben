'use client'
import DefaultDrawer from "@/app/shared/components/DefaultDrawer";
import Link from "next/link";
import React, {useEffect, useState} from "react";
import {
    Box,
    MenuItem,
    FormControl,
    Select,
    SelectChangeEvent,
    Grid,
    Typography,
    Input,
    Card,
    CardContent,
    Skeleton
} from "@mui/material"
import Button from '@mui/material/Button';
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

    const objectNames = apartments.map(a => a.name);

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
        if (votes.includes(0)) {
            showInfo('Vennligst ranger alle kandidatene.', 'error');
            return;
        }
        if (username === "") {
            showInfo("Vennligst fyll inn navn", 'error');
            return;
        }
        const uniqueVotes = new Set(votes);
        if (uniqueVotes.size !== votes.length) {
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
            // Refresh results
            const data = await getData();
            // @ts-ignore
            setResults(data);
        } catch (error) {
            showInfo('Det oppstod en feil under lagring av stemmen.', 'error');
        }
    };

    const handleChange = (event: SelectChangeEvent<number>, index: number) => {
        const newVotes: number[] = [...votes];
        newVotes[index] = Number(event.target.value);
        setVotes(newVotes);
    };

    const infoColor = infoType === 'success' ? 'green' : infoType === 'error' ? '#d32f2f' : 'inherit';

    return (
        <Box>
            <DefaultDrawer/>
            <Box sx={{maxWidth: 900, mx: 'auto', p: 3}}>
                <Typography variant="h4" sx={{fontWeight: 700, mb: 3}}>
                    Vote på din favoritt!
                </Typography>

                <Grid container spacing={2} sx={{mb: 3, opacity: hasVoted ? 0.5 : 1, pointerEvents: hasVoted ? 'none' : 'auto'}}>
                    {apartments.map((apartment, index) => (
                        <Grid item xs={12} sm={6} md={Math.min(Math.floor(12 / apartments.length), 6)} key={index}>
                            <FormControl fullWidth>
                                <Typography variant="subtitle1" sx={{mb: 1}}>
                                    <Link href={apartment.link} target="_blank" rel="noopener noreferrer">
                                        Leilighet {apartment.name.toUpperCase()}
                                    </Link>
                                </Typography>
                                <Typography variant="body2" color="text.secondary" sx={{mb: 1}}>
                                    Pris: {apartment.price.toLocaleString('nb-NO')} kr · {apartment.beds} sengeplasser
                                </Typography>
                                <Select
                                    value={votes[index]}
                                    onChange={(e) => handleChange(e, index)}
                                    displayEmpty
                                    size="small"
                                >
                                    <MenuItem value={0}>Velg rang...</MenuItem>
                                    {apartments.map((_, i) => (
                                        <MenuItem key={i + 1} value={i + 1}>{i + 1}</MenuItem>
                                    ))}
                                </Select>
                            </FormControl>
                        </Grid>
                    ))}
                </Grid>

                <Box sx={{mb: 3}}>
                    <Input
                        onChange={(e) => setUsername(e.target.value)}
                        placeholder="Skriv ditt navn her"
                        disabled={hasVoted}
                        sx={{mr: 2}}
                    />
                    <Button onClick={handleVote} variant="contained" disabled={hasVoted} sx={{mt: 1}}>
                        {hasVoted ? 'Stemme sendt!' : 'Send inn stemme'}
                    </Button>
                </Box>

                {infoText && (
                    <Typography sx={{color: infoColor, mb: 3, fontWeight: 500}}>
                        {infoText}
                    </Typography>
                )}

                <Typography variant="h5" sx={{fontWeight: 600, mb: 2, mt: 4}}>
                    Resultater
                </Typography>

                <Grid container spacing={2}>
                    {objectNames.map((key) => (
                        <Grid item xs={12} sm={6} md={Math.min(Math.floor(12 / apartments.length), 6)} key={key}>
                            <Card>
                                <CardContent>
                                    <Typography variant="h5" component="div">
                                        Leilighet {key.toUpperCase()}
                                    </Typography>
                                    <Typography sx={{mb: 1.5}} color="text.secondary">
                                        Har fått:
                                    </Typography>
                                    {loading ? (
                                        Array.from({length: apartments.length}, (_, i) => (
                                            <Skeleton key={i} variant="text" width="80%"/>
                                        ))
                                    ) : (
                                        results ? (
                                            Array.from({length: apartments.length}, (_, i) => i + 1).map(rank => (
                                                <Typography variant="body2" key={rank}>
                                                    {results.scores[key]?.[rank] ?? 0} {getOrdinalLabel(rank)}
                                                </Typography>
                                            ))
                                        ) : (
                                            <Typography variant="body2">
                                                Ingen data tilgjengelig.
                                            </Typography>
                                        )
                                    )}
                                </CardContent>
                            </Card>
                        </Grid>
                    ))}
                </Grid>

                <Box sx={{display: 'column', marginTop: "100px"}}>
                    <Typography>
                        {dbInfo}
                    </Typography>
                </Box>

                <Box hidden={true}>
                    <br/><br/>
                    <Typography>
                        {logInMessage}
                    </Typography>
                    <Input onChange={(e) => setUsr(e.target.value)} placeholder={"Brukernavn"}></Input>
                    <br/>
                    <Input onChange={(e) => setPass(e.target.value)} placeholder={"Passord"}/>
                    <br/><br/>
                    <Button onClick={() => loginUser(usr, pass)} variant={'contained'}>Log in!</Button>
                </Box>
            </Box>
        </Box>
    );
}

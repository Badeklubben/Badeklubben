'use client'
import Button from '@mui/material/Button';
import DefaultDrawer from "@/app/shared/components/DefaultDrawer";
import React, { useEffect, useState } from 'react';
import { getData } from './getData';
import updateVoteCount from './updateVote'
import { doc, getDoc, updateDoc, collection, addDoc, setDoc, deleteDoc} from 'firebase/firestore';
import { db } from './config/firebase_a'; // Sørg for at du importerer din Firebase-konfigurasjon

interface Person {
    name: string;
    count: number;
}

export default function Botsystem() {
    const [personer, setPersoner] = useState<Person[]>([]);
    const [newPersonName, setNewPersonName] = useState<string>('');

    useEffect(() => {
        const fetchPersoner = async () => {
            const fetchedPersoner = await getData();
            setPersoner(fetchedPersoner);
        };

        fetchPersoner();
    }, []);

    const handleUpdate = async (name: string, change: number) => {
        const newCount = await updateVoteCount(name, change);
        if (newCount !== null) {
            setPersoner((prevPersoner) =>
                prevPersoner.map((person) =>
                    person.name === name ? { ...person, count: newCount } : person
                )
            );
        }
    };

    const handleAddPerson = async () => {
        if (newPersonName.trim() !== '') {
            try {
                const newPerson = { name: newPersonName, count: 0 };
                const personRef = doc(db, `Botsystem/botsystem/personer/${newPersonName}`);
                await setDoc(personRef, newPerson);
                setPersoner([...personer, newPerson]);
                setNewPersonName('');
            } catch (error) {
                console.error("Error adding new person: ", error);
            }
        }
    };

    const handleRemovePerson = async (name: string) => {
        const confirmDelete = window.confirm(`Er du sikker på at du vil slette ${name}?`);
        if (confirmDelete) {
            try {
                const personRef = doc(db, `Botsystem/botsystem/personer/${name}`);
                await deleteDoc(personRef);
                setPersoner(personer.filter((person) => person.name !== name));
            } catch (error) {
                console.error("Error removing person: ", error);
            }
        }
    };

    return (
        <div>
            <DefaultDrawer />
            <h1 style={{ marginLeft: "10px" }}>Botsystem for algoritmer lesesalen</h1>
            <div style={{ marginLeft: "10px", marginTop: "20px" }}>
                <h2>Legg til ny person:</h2>
                <input
                    type="text"
                    value={newPersonName}
                    onChange={(e) => setNewPersonName(e.target.value)}
                    placeholder="Skriv inn navn"
                    style={{ marginRight: '10px' }}
                />
                <button onClick={handleAddPerson} style={{ cursor: 'pointer' }}>
                    Legg til
                </button>
            </div>
            <div style={{ marginLeft: "10px", marginTop: "20px" }}>
                <h2>Antall bøter:</h2>
                <ul>
                    {personer.map((person, index) => (
                        <li key={index} style={{ display: 'flex', alignItems: 'center' }}>
                            {person.name}: {person.count} bøter
                            <button
                                onClick={() => handleUpdate(person.name, 1)}
                                style={{
                                    fontSize: '24px',
                                    marginLeft: '10px',
                                    marginRight: '5px',
                                    cursor: 'pointer',
                                    background: 'none',
                                    border: 'none',
                                    color: 'green'
                                }}
                            >
                                +
                            </button>
                            <button
                                onClick={() => handleUpdate(person.name, -1)}
                                style={{
                                    fontSize: '24px',
                                    marginLeft: '5px',
                                    cursor: 'pointer',
                                    background: 'none',
                                    border: 'none',
                                    color: 'red'
                                }}
                            >
                                -
                            </button>

                            <button
                                onClick={() => handleRemovePerson(person.name)}
                                style={{
                                    fontSize: '12px',
                                    marginLeft: '10px',
                                    cursor: 'pointer',
                                    background: 'none',
                                    border: 'none',
                                    color: 'black'
                                }}>
                                🗑️
                            </button>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}
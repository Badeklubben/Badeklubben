'use client'
import Button from '@mui/material/Button';
import DefaultDrawer from "@/app/shared/components/DefaultDrawer";
import React, { useEffect, useState } from 'react';
import { getData } from './getData';
import updateVoteCount from './updateVote'
import { doc, getDoc, updateDoc, collection, addDoc, setDoc, deleteDoc} from 'firebase/firestore';
import { db } from './config/firebase_a'; // Sørg for at du importerer din Firebase-konfigurasjon
import AddPersonForm from "@/app/projects/arne/botsystem/AddPersonForm";
import PersonList from "@/app/projects/arne/botsystem/PersonList";

interface Person {
    name: string;
    count: number;
}

export default function Botsystem() {
    const [personer, setPersoner] = useState<Person[]>([]);

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

    const handleAddPerson = async (name: string) => {
        if (name.trim() !== '') {
            try {
                const newPerson = { name, count: 0 };
                const personRef = doc(db, `Botsystem/botsystem/personer/${name}`);
                await setDoc(personRef, newPerson);
                setPersoner([...personer, newPerson]);
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
            <AddPersonForm onAddPerson={handleAddPerson} />
            <PersonList personer={personer} onUpdate={handleUpdate} onRemove={handleRemovePerson} />
        </div>
    );
}
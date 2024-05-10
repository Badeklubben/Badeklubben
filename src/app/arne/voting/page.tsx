'use client'
import DefaultNavbar from "@/app/shared/components/DefaultNavbar";
import Link from "next/link";
import React, {useState} from "react";
import { Box, Stack, MenuItem, FormControl, Select, SelectChangeEvent, Typography, Input} from "@mui/material"
import Button from '@mui/material/Button';
import {db} from "../../arne/config/firebase_a";
import {getDocs, collection, query, addDoc, deleteDoc, doc, where} from "firebase/firestore";
import DefaultTypography from "@/app/shared/components/DefaultTypography";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../config/firebase_a"

const registerUser = async (email : string, password :string) => {
    try {
        const userCredential = await createUserWithEmailAndPassword(auth, email, password);
        console.log("Registrert bruker:", userCredential.user);
    } catch (error) {
        console.error("Feil ved registrering:");
    }
};

const loginUser = async (usr : string, password :string) => {
    try {
        const userCredential = await signInWithEmailAndPassword(auth, usr, password);
        console.log("Logget inn bruker:", userCredential.user);
    } catch (error) {
        console.error("Feil ved innlogging:");
    }
};

export default function Arne() {
    const [votes, setVotes] = useState([0, 0, 0, 0]);  // Initialtilstand for rangeringer
    const [usr, setUsr] = useState("");
    const [pass, setPass] = useState("");
    const apartments = [
        {
            id: 0,
            name: "a",
            link: "https://www.finn.no/reise/feriehus-hytteutleie/ad.html?finnkode=300229923",
            price: 41519,
            beds: 11,
            img: "/img/ap1"
        },
        {
            id: 1,
            name: "b",
            link: "https://www.finn.no/reise/feriehus-hytteutleie/ad.html?finnkode=300375762&ci=2",
            price: 46140,
            beds: 12,
            img: "/img/ap2"
        },
        {
            id: 2,
            name: "c",
            link: "https://www.finn.no/reise/feriehus-hytteutleie/ad.html?finnkode=300346121&ci=37",
            price: 45845,
            beds: 12,
            img: "/img/ap3"

        },
        {
            id: 3,
            name: "d",
            link: "https://www.finn.no/reise/feriehus-hytteutleie/ad.html?finnkode=303523567&ci=21",
            price: 28769,
            beds: 12,
            img: "/img/ap4"
        }
    ]
    const [username, setUsername] = useState("");


    const handleVote = async () => {

        if (votes.includes(0)) {
            alert('Vennligst ranger alle kandidatene.');
            return;
        }
        if (username == ""){
            alert("Vennligst fyll inn navn")
            return
        }
        const uniqueVotes = new Set(votes);
        if (uniqueVotes.size !== votes.length) {
            alert('Duplikate rangeringer er ikke tillatt.');
            return;
        }
        try {
            await addDoc(collection(db, 'Badeklubben/badeklubben/votes'), {
                userId: username,  // Erstatt med faktisk bruker-ID
                votes,
                timestamp: new Date()
            });
            alert('Din stemme er registrert!');
        } catch (error) {
            console.error('Feil ved lagring av stemme:', error);
            alert('Det oppstod en feil under lagring av stemmen.');
        }
    };

    const handleChange = (event : SelectChangeEvent<number>, index : number) => {
        const newVotes: number[] = [...votes];
        newVotes[index] = Number(event.target.value);
        setVotes(newVotes);
    };

    return (
        <Box >
            <DefaultNavbar/>
            <DefaultTypography colorText={"000"} fontWeight={700}>Vote på din favoritt!</DefaultTypography>
            <Box sx={{display: 'flex'}}>
                {apartments.map((apartment, index) => (
                    <FormControl key={index} fullWidth margin="normal">
                        <Typography variant="subtitle1">
                            <Link href={apartment.link} target="_blank" rel="noopener noreferrer">
                                Leilighet {apartment.name}
                            </Link>, pris: {apartment.price} kr, sengeplasser: {apartment.beds} stk.
                        </Typography>
                        <Select
                            value={votes[index]}
                            onChange={(e) => handleChange(e, index)}
                            displayEmpty
                        >
                            <MenuItem value={0}>Velg rang...</MenuItem>
                            <MenuItem value={1}>1</MenuItem>
                            <MenuItem value={2}>2</MenuItem>
                            <MenuItem value={3}>3</MenuItem>
                            <MenuItem value={4}>4</MenuItem>
                        </Select>
                    </FormControl>
                ))}
            </Box>
            <br/>
            <Input onChange={(e) => setUsername(e.target.value)} placeholder={"Skriv ditt navn her"}/>
            <Typography>Skriv navnet ditt slik: Arne</Typography>
            <br/>
            <Button onClick={handleVote} variant={"contained"}>Send inn stemme</Button>


            <Box sx={{display: 'column', marginTop:"100px", boxSize:"10px"}}>
                <Typography>
                    Log in for å sjekke resultatene (kun admin)
                </Typography>
                <Input onChange={(e) => setUsr(e.target.value)} placeholder={"Brukernavn"} ></Input>
                <br/>
                <Input onChange={(e) => setPass(e.target.value)} placeholder={"Passord"}/>
                <br/>
                <br/>
                <Button onClick={() => loginUser(usr,pass)} variant={'contained'}>Log in!</Button>
            </Box>
        </Box>
    );
}
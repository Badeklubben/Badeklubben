import React, { useState } from 'react';
import { TextField, Button, Typography, Container } from '@mui/material';
import { db } from "./fb_config";
import { collection, addDoc, getDocs } from "firebase/firestore";
import Link from "next/link";
import DefaultTypography from "@/app/shared/components/DefaultTypography";
import DefaultNavbar from "@/app/shared/components/DefaultNavbar";


const VolunteerForm = () => {

    const [formData, setFormData] = useState({
        name: '',
        birthDate: '',
        address: '',
        group: '',
        role: ''
    });

    const handleChange = (event : any) => {
        const { name, value } = event.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleSubmit = async (event : any) => {
        event.preventDefault();
        try {
            const docRef = await addDoc(collection(db, 'volunteers'), {
                ...formData,
                timestamp: new Date() // Lagrer også timestamp når du oppretter dokumentet
            });
            console.log('Data saved with ID:', docRef.id);
            alert('Data lagret!');


        } catch (error) {
            console.error('Error adding document: ', error);
            alert('Feil ved lagring av data.');
        }
    };

    return (
        <Container component="main">
            <Typography component="h1" variant="h5">
                Frivillig Attest
            </Typography>
            <form onSubmit={handleSubmit}>
                <TextField
                    margin="normal"
                    required
                    fullWidth
                    label="Navn"
                    name="name"
                    onChange={handleChange}
                />
                <TextField
                    margin="normal"
                    required
                    fullWidth
                    label="Fødselsdato"
                    name="birthDate"
                    type="date"
                    InputLabelProps={{
                        shrink: true,
                    }}
                    onChange={handleChange}
                />
                <TextField
                    margin="normal"
                    required
                    fullWidth
                    label="Adresse"
                    name="address"
                    onChange={handleChange}
                />
                <TextField
                    margin="normal"
                    fullWidth
                    label="Gruppe"
                    name="group"
                    onChange={handleChange}
                />
                <TextField
                    margin="normal"
                    fullWidth
                    label="Rolle"
                    name="role"
                    onChange={handleChange}
                />
                <Button
                    type="submit"
                    fullWidth
                    variant="contained"
                    sx={{ mt: 3, mb: 2 }}
                >
                    Lagre informasjon
                </Button>
            </form>
            <Link href={"/arne/certificate/login"}>
                <DefaultTypography fontWeight={700} colorText={"#000"}>Login for å se PDF-er</DefaultTypography>
            </Link>
        </Container>
    );
};

export default VolunteerForm;
import React, {useEffect, useState} from 'react';
import {db} from '../fb_config';
import {collection, getDocs} from 'firebase/firestore';
import {Button, Container, Typography, Paper, Grid} from '@mui/material';
import {jsPDF} from 'jspdf';
import Volunteer from '../Volunteer'
import {deleteDoc, doc} from "firebase/firestore";


// Definer interfacen for en frivillig


const AdminPage: React.FC = () => {
    const [volunteers, setVolunteers] = useState<Volunteer[]>([]);

    useEffect(() => {
        const fetchVolunteers = async () => {
            const querySnapshot = await getDocs(collection(db, 'volunteers'));
            const volunteersData: Volunteer[] = [];
            querySnapshot.forEach((doc) => {
                const data = doc.data() as Omit<Volunteer, 'id'>; // Antar at 'id' ikke er en del av dokumentdataene
                volunteersData.push({
                    id: doc.id, // Legger til dokumentets ID
                    ...data,
                });
            });
            setVolunteers(volunteersData);
        };

        fetchVolunteers();
    }, []);

    const generatePDF = (volunteer: Volunteer) => {
        const doc = new jsPDF();

        doc.setFontSize(20);
        doc.text('Frivillig Attest', 20, 30);
        doc.setFontSize(16);
        doc.text(`Navn: ${volunteer.name}`, 20, 50);
        doc.text(`Fødselsdato: ${volunteer.birthDate}`, 20, 65);
        doc.text(`Adresse: ${volunteer.address}`, 20, 80);
        doc.text(`Gruppe: ${volunteer.group}`, 20, 95);
        doc.text(`Rolle: ${volunteer.role}`, 20, 110);

        doc.save(`${volunteer.name}-attest.pdf`);
    };

    const deleteVolunteer = async (id: string) => {
        console.log('Attempting to delete document with ID:', id);
        try {
            await deleteDoc(doc(db, 'volunteers', id));
            console.log('Document successfully deleted!');
            alert('Dokumentet ble slettet!');
            // Oppdaterer listen ved å fjerne den slettede frivillige
            setVolunteers(volunteers.filter(volunteer => volunteer.id !== id));
        } catch (error) {
            console.error('Error removing document: ', error);
            alert('Feil ved sletting av dokument. Sjekk konsollen for detaljer.');
        }
    };

    return (
        <Container maxWidth="md">
            <Typography variant="h4" gutterBottom>
                Admin Oversikt
            </Typography>
            <Grid container spacing={2}>
                {volunteers.map((volunteer: Volunteer) => (
                    <Grid item xs={12} sm={6} key={volunteer.id}>
                        <Paper elevation={3} style={{padding: '20px'}}>
                            <Typography variant="h6">{volunteer.name}</Typography>
                            <Typography variant="body1">Fødselsdato: {volunteer.birthDate}</Typography>
                            <Typography variant="body1">Adresse: {volunteer.address}</Typography>
                            <Typography variant="body1">Gruppe: {volunteer.group}</Typography>
                            <Typography variant="body1">Rolle: {volunteer.role}</Typography>
                            <Button
                                variant="contained"
                                color="primary"
                                onClick={() => generatePDF(volunteer)}
                                style={{marginTop: '10px'}}
                            >
                                Generer PDF
                            </Button>
                            <Button
                                onClick={() => deleteVolunteer(volunteer.id)}
                                color="primary"

                            >
                                Slett data
                            </Button>
                        </Paper>
                    </Grid>
                ))}
            </Grid>
        </Container>
    );
};

export default AdminPage;
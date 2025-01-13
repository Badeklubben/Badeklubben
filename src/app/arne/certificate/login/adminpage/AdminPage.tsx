import React, {useEffect, useState} from 'react';
import {db} from '@/app/arne/certificate/firebase/fb_config';
import {collection, getDocs} from 'firebase/firestore';
import {Button, Container, Grid, Paper, Typography} from '@mui/material';
import {Volunteer} from '@/app/arne/certificate/util/Volunteer'
import {generatePDF} from "@/app/arne/certificate/login/adminpage/generatePDF"
import {submitHash} from "@/app/arne/certificate/login/adminpage/submitHash";
import {deleteVolunteer} from "@/app/arne/certificate/util/deleteVolunteer";

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

    const handleDelete = async (id: string) => {
        await deleteVolunteer(id);
        setVolunteers(volunteers.filter(volunteer => volunteer.id !== id));
    }

    const handleClick = async (volunteer: Volunteer) => {
        try {
            await generatePDF(volunteer)
            await submitHash(volunteer)
        } catch (error) {
            console.log(error)
            alert('Feil ved generering av PDF')
        }
    }

    return (
        <Container maxWidth="md">
            <Typography variant="h4" gutterBottom>
                Admin Oversikt
            </Typography>
            <Grid container spacing={2}>
                {volunteers.map((volunteer: Volunteer) => (
                    <Grid item xs={12} sm={6} key={volunteer.id}>
                        <Paper elevation={3} style={{padding: '20px'}}>
                            <Typography variant="h6">{volunteer.personName}</Typography>
                            <Typography variant="body1">Gruppe: {volunteer.groupName}</Typography>
                            <Typography variant="body1">Rolle: {volunteer.role}</Typography>
                            <Button
                                variant="contained"
                                color="primary"
                                onClick={() => handleClick(volunteer)}
                                style={{marginTop: '10px'}}
                            >
                                Generer PDF
                            </Button>
                            <Button
                                onClick={() => handleDelete(volunteer.id)}
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
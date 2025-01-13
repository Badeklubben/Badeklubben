import React, {useEffect, useState} from 'react';
import {db} from '@/app/arne/certificate/firebase/fb_config';
import {collection, getDocs} from 'firebase/firestore';
import {Button, Container, Grid, Paper, Typography} from '@mui/material';
import {Volunteer} from '@/app/arne/certificate/util/Volunteer'
import {generatePDF} from "@/app/arne/certificate/login/adminpage/generatePDF"
import {submitHash} from "@/app/arne/certificate/login/adminpage/submitHash";
import {deleteVolunteer} from "@/app/arne/certificate/util/deleteVolunteer";
import ConfirmDialog from "@/app/arne/certificate/login/adminpage/confirmDialog";


const AdminPage: React.FC = () => {
    const [volunteers, setVolunteers] = useState<Volunteer[]>([]);
    const [openDialog, setOpenDialog] = useState(false);
    const [selectedVolunteer, setSelectedVolunteer] = useState<Volunteer | null>(null);
    const [openDeleteDialog, setOpenDeleteDialog] = useState(false);
    const [selectedVolunteerId, setSelectedVolunteerId] = useState<string | null>(null);

    const volunteerDetails = (
        <>
            <Typography variant="body1">Navn: {selectedVolunteer?.personName}</Typography>
            <Typography variant="body1">Rolle: {selectedVolunteer?.role || 'Ingen rolle'}</Typography>
            <Typography variant="body1">Gruppe: {selectedVolunteer?.groupName || 'Ingen gruppe'}</Typography>
            <Typography variant="body1">Startdato: {selectedVolunteer?.startDate || 'Ingen startdato'}</Typography>
            <Typography variant="body1">Sluttdato: {selectedVolunteer?.endDate || 'Ingen sluttdato'}</Typography>
        </>
    );

    useEffect(() => {
        const fetchVolunteers = async () => {
            const querySnapshot = await getDocs(collection(db, 'volunteers'));
            const volunteersData: Volunteer[] = [];
            querySnapshot.forEach((doc) => {
                const data = doc.data() as Omit<Volunteer, 'id'>;
                volunteersData.push({
                    id: doc.id,
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

    const handleDeleteClick = (id: string) => {
        setSelectedVolunteerId(id);
        setOpenDeleteDialog(true);
    };

    const handleDeleteConfirm = async () => {
        if (selectedVolunteerId) {
            try {
                await handleDelete(selectedVolunteerId);
                setOpenDeleteDialog(false);
                setSelectedVolunteerId(null);
            } catch (error) {
                console.log(error);
                alert('Feil ved sletting av data');
            }
        }
    };

    const handleClick = (volunteer: Volunteer) => {
        setSelectedVolunteer(volunteer);
        setOpenDialog(true);
    };
    const handleConfirm = async () => {
        if (selectedVolunteer) {
            try {
                await generatePDF(selectedVolunteer);
                await submitHash(selectedVolunteer);
                setOpenDialog(false);
            } catch (error) {
                console.log(error);
                alert('Feil ved generering av PDF');
            }
        }
    };

    const handleClose = () => {
        setOpenDialog(false);
        setSelectedVolunteer(null);
    };

    return (
        <Container maxWidth="md">
            <Typography variant="h4" gutterBottom>
                Admin Oversikt
            </Typography>
            <Grid container spacing={2}>
                {volunteers.map((volunteer: Volunteer) => (
                    <Grid item xs={12} sm={6} key={volunteer.id}>
                        <Paper elevation={3} style={{ padding: '20px' }}>
                            <Typography variant="h6">{volunteer.personName}</Typography>
                            <Typography variant="body1">Rolle: {volunteer.role || 'Ingen rolle'}</Typography>
                            <Typography variant="body1">Gruppe: {volunteer.groupName || 'Ingen gruppe'}</Typography>
                            <Typography variant="body1">Startdato: {volunteer.startDate || 'Ingen startdato'}</Typography>
                            <Typography variant="body1">Sluttdato: {volunteer.endDate || 'Ingen sluttdato'}</Typography>

                            {volunteer.extraRole && volunteer.extraRole.length > 0 && volunteer.extraRole.map((role, index) => {
                                if (role.role && role.groupName && role.startDate && role.endDate) {
                                    return (
                                        <Typography key={index} variant="body2">
                                            {role.role}, {role.groupName}, {role.startDate}, {role.endDate}
                                        </Typography>
                                    );
                                }
                                return null;
                            })}

                            {(!volunteer.extraRole || volunteer.extraRole.length === 0) && (
                                <Typography variant="body2" style={{ marginTop: '10px' }}>Ingen ekstra roller</Typography>
                            )}

                            <Button
                                variant="contained"
                                color="primary"
                                onClick={() => handleClick(volunteer)}
                                style={{ marginTop: '10px' }}
                            >
                                Generer PDF
                            </Button>
                            <Button
                                onClick={() => handleDeleteClick(volunteer.id)}
                                color="primary"
                                style={{ marginLeft: '10px' }}
                                size="small" // Gjør knappen mindre
                            >
                                Slett data
                            </Button>
                        </Paper>
                    </Grid>
                ))}
            </Grid>

            {/* Bekreftelsesdialog */}
            <ConfirmDialog
                open={openDialog}
                title="Bekreft generering av PDF"
                message={`Er du sikker på at du vil generere PDF for ${selectedVolunteer?.personName}?`}
                details={volunteerDetails}
                onConfirm={handleConfirm}
                onClose={handleClose}
                confirmButtonText="Generer PDF"
            />

            <ConfirmDialog
                open={openDeleteDialog}
                title="Bekreft sletting"
                message={`Er du sikker på at du vil slette PDF-en til ${selectedVolunteer?.personName}`}
                onConfirm={handleDeleteConfirm}
                onClose={() => setOpenDeleteDialog(false)}
                confirmButtonText="Slett"
            />
        </Container>
    );
};

export default AdminPage;
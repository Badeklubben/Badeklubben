import React, { useState } from 'react';
import { TextField, Button, Typography, Container, Select, MenuItem, Grid } from '@mui/material';
import { db } from "./fb_config";
import { echo_db } from "./echo_fb_config";
import { collection, addDoc, getDocs } from "firebase/firestore";
import Link from "next/link";
import DefaultTypography from "@/app/shared/components/DefaultTypography";
import DefaultDrawer from "@/app/shared/components/DefaultDrawer";
import { v4 as uuidv4 } from 'uuid';


const VolunteerForm = () => {
    const [showExtraRoles, setShowExtraRoles] = useState(false);
    const [formData, setFormData] = useState({
        id: '',
        name: '',
        group: '',
        startDate: '',
        endDate: '',
        role: '',
        extraRoles: [
            { groupName: '', startDate: '', endDate: '', role: '' },
            { groupName: '', startDate: '', endDate: '', role: '' },
            { groupName: '', startDate: '', endDate: '', role: '' },
        ],
    });

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>, index?: number) => {
        const { name, value } = event.target;
        if ((index !== undefined) && (false)) { //ToDo
            setFormData(prevState => {
                const updatedRoles = [...prevState.extraRoles];
                updatedRoles[index] = { ...updatedRoles[index], [name]: value };
                return { ...prevState, extraRoles: updatedRoles };
            });
        } else {
            setFormData(prevState => ({
                ...prevState,
                [name]: value
            }));
        }
    };



    const handleSubmit = async (event : any) => {
        event.preventDefault();
        const uuid = uuidv4();
        try {
            const docRef = await addDoc(collection(db, 'volunteers'), {
                ...formData,
                id: uuid,
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

                <Select
                    required
                    fullWidth
                    label="Gruppe"
                    name="group"
                    value={formData.group}
                    onChange={handleChange} //ToDo
                >
                    <MenuItem value="Bedkom">Bedkom</MenuItem>
                    <MenuItem value="Gnist">Gnist</MenuItem>
                    <MenuItem value="Hyggkom">Hyggkom</MenuItem>
                    <MenuItem value="ESC">ESC</MenuItem>
                    <MenuItem value="Tilde">Tilde</MenuItem>
                    <MenuItem value="Webkom">Webkom</MenuItem>
                </Select>

                <TextField
                    margin="normal"
                    required
                    fullWidth
                    label="Når startet du?"
                    name="start"
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
                    label="Når sluttet du?"
                    name="end"
                    type="date"
                    InputLabelProps={{
                        shrink: true,
                    }}
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
                    type="button"
                    onClick={() => setShowExtraRoles(prev => !prev)}
                    style={{ marginTop: '16px' }}
                >
                    {showExtraRoles ? 'Skjul ekstra roller' : 'Legg til ekstra roller'}
                </Button>


                {showExtraRoles && formData.extraRoles.map((role, index) => (
                    <Grid container spacing={2} key={index}>
                        <Grid item xs={4}>
                            <TextField
                                margin="normal"
                                fullWidth
                                label="Navn på gruppe"
                                name="groupName"
                                onChange={(e) => handleChange}
                            />
                        </Grid>
                        <Grid item xs={4}>
                            <TextField
                                margin="normal"
                                fullWidth
                                label="Startdato"
                                name="startDate"
                                type="date"
                                InputLabelProps={{ shrink: true }}
                                onChange={(e) => handleChange}
                            />
                        </Grid>
                        <Grid item xs={4}>
                            <TextField
                                margin="normal"
                                fullWidth
                                label="Sluttdato"
                                name="endDate"
                                type="date"
                                InputLabelProps={{ shrink: true }}
                                onChange={(e) => handleChange}
                            />
                        </Grid>
                        <Grid item xs={4}>
                            <TextField
                                margin="normal"
                                fullWidth
                                label="Rolle"
                                name="role"
                                onChange={(e) => handleChange}
                            />
                        </Grid>
                    </Grid>
                ))}
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
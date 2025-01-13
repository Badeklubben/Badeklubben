import React, {useState} from 'react';
import {Button, Container, Grid, MenuItem, Select, SelectChangeEvent, TextField, Typography} from '@mui/material';
import {db} from "../firebase/fb_config";
import {addDoc, collection} from "firebase/firestore";
import Link from "next/link";
import DefaultTypography from "@/app/shared/components/DefaultTypography";
import {v4 as uuidv4} from 'uuid';
import {Volunteer} from "@/app/arne/certificate/util/Volunteer";


const VolunteerForm = () => {
    const [showExtraRoles, setShowExtraRoles] = useState(false);
    const [formData, setFormData] = useState<Volunteer>({
        id: '',
        personName: '',
        groupName: '',
        startDate: '',
        endDate: '',
        role: '',
        extraRole: [
            {groupName: '', startDate: '', endDate: '', role: ''},
            {groupName: '', startDate: '', endDate: '', role: ''},
            {groupName: '', startDate: '', endDate: '', role: ''},
        ],
    });

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const {name, value} = event.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleSelectChange = (event: SelectChangeEvent<string>) => {
        const {name, value} = event.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };
    const handleIndexChange = (event: React.ChangeEvent<HTMLInputElement>, index: number) => {
        const {name, value} = event.target;
        setFormData(prevState => {
            const updatedRoles = [...(prevState.extraRole || [])];
            console.log(updatedRoles,index)
            updatedRoles[index] = {...updatedRoles[index], [name]: value};
            return {...prevState, extraRole: updatedRoles};
        });
    };

    const handleSubmit = async (event: any) => {
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
                    name="personName"
                    onChange={handleChange}
                />

                <Select
                    required
                    fullWidth
                    label="Gruppe"
                    name="groupName"
                    value={formData.groupName}
                    onChange={handleSelectChange}
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
                    label="startDate"
                    name="startDate"
                    type="date"
                    defaultValue={"2024-01-01"}
                    onLoad={handleChange} //todo remove
                    InputLabelProps={{
                        shrink: true,
                    }}
                    onChange={handleChange}
                />
                <TextField
                    margin="normal"
                    required
                    fullWidth
                    label="endDate"
                    name="endDate"
                    type="date"
                    defaultValue={"2025-01-01"}
                    onLoad={handleChange} //todo remove
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
                    style={{marginTop: '16px'}}
                >
                    {showExtraRoles ? 'Skjul ekstra roller' : 'Legg til ekstra roller'}
                </Button>
                {showExtraRoles && (formData.extraRole || []).map((role, index) => (
                    <Grid container spacing={2} key={index}>
                        <Grid item xs={4}>
                            <TextField
                                margin="normal"
                                fullWidth
                                label={"groupName"}
                                name={"groupName"}
                                onChange={(e: React.ChangeEvent<HTMLInputElement>) => handleIndexChange(e, index)}
                            />
                        </Grid>
                        <Grid item xs={4}>
                            <TextField
                                margin="normal"
                                fullWidth
                                label={"startDate"}
                                name={"startDate"}
                                type="date"
                                defaultValue={"2020-01-01"}
                                onLoad={handleChange} //todo remove
                                InputLabelProps={{shrink: true}}
                                onChange={(e: React.ChangeEvent<HTMLInputElement>) => handleIndexChange(e, index)}
                            />
                        </Grid>
                        <Grid item xs={4}>
                            <TextField
                                margin="normal"
                                fullWidth
                                label={"endDate"}
                                name={"endDate"}
                                type="date"
                                defaultValue={"2022-01-01"} //todo remove
                                InputLabelProps={{shrink: true}}
                                onChange={(e: React.ChangeEvent<HTMLInputElement>) => handleIndexChange(e, index)}
                            />
                        </Grid>
                        <Grid item xs={4}>
                            <TextField
                                margin="normal"
                                fullWidth
                                label={"role"}
                                name={"role"}
                                onChange={(e: React.ChangeEvent<HTMLInputElement>) => handleIndexChange(e, index)}
                            />
                        </Grid>
                    </Grid>
                ))}
                <Button
                    type="submit"
                    fullWidth
                    variant="contained"
                    sx={{mt: 3, mb: 2}}
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
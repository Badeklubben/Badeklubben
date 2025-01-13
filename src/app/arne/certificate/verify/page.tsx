'use client'
import React, {useEffect, useState} from 'react';
import {useSearchParams} from 'next/navigation';
import {ExtraRole, Volunteer} from '@/app/arne/certificate/util/Volunteer';
import {Box, Button, Grid, TextField, Typography} from '@mui/material';
import {collection, getDocs, query, where} from 'firebase/firestore';
import {db} from '@/app/arne/certificate/firebase/fb_config';
import {hashFunction} from "@/app/arne/certificate/util/hashFunction";

const Verify: React.FC = () => {
    const paramsString = useSearchParams().toString();
    const paramsArray: string[] = paramsString.split('_').map(param => decodeURIComponent(param.replace(/\+/g, ' ')));
    paramsArray[paramsArray.length - 1] = paramsArray[paramsArray.length - 1].slice(0, -1); //removed because = char in URL
    const [verificationResult, setVerificationResult] = useState<'verified' | 'invalid' | null>(null);

    const verifyHash = async () => {
        const toCheck = [
            formData.id,
            formData.personName,
            formData.groupName,
            formData.startDate,
            formData.endDate,
            formData.role,
            ...((formData.extraRole || []).flatMap(role => [
                role.groupName,
                role.startDate,
                role.endDate,
                role.role,
            ])),
        ].join("_");

        try {
            const generatedHash = await hashFunction(toCheck);
            const q = query(collection(db, "hashcollection"), where("id", "==", formData.id));
            const querySnapshot = await getDocs(q);

            if (!querySnapshot.empty) {
                querySnapshot.forEach((doc) => {
                    const data = doc.data();
                    if (generatedHash === data.hash) {
                        setVerificationResult('verified');
                        console.log("Hash er gyldig!");
                    } else {
                        setVerificationResult('invalid');
                        console.log("Dette hashes", toCheck)
                        console.log("Ingen gyldig hash funnet, det ble:", generatedHash);
                        console.log("I DB-en er det:", data.hash);
                    }
                });
            } else {
                console.log("Ingen attester funnet med den spesifikke ID-en.");
            }
        } catch (error) {
            console.error("Feil ved verifisering av hash: ", error);
        }
    };

    const [formData, setFormData] = useState<Volunteer>({
        id: paramsArray[0] || '',
        personName: paramsArray[1] || '',
        groupName: paramsArray[2] || '',
        startDate: paramsArray[3] || '',
        endDate: paramsArray[4] || '',
        role: paramsArray[5] || '',
        extraRole: [
            {
                groupName: paramsArray[6] || '',
                startDate: paramsArray[7] || '',
                endDate: paramsArray[8] || '',
                role: paramsArray[9] || '',
            },
            {
                groupName: paramsArray[10] || '',
                startDate: paramsArray[11] || '',
                endDate: paramsArray[12] || '',
                role: paramsArray[13] || '',
            },
            {
                groupName: paramsArray[14] || '',
                startDate: paramsArray[15] || '',
                endDate: paramsArray[16] || '',
                role: paramsArray[17] || '',
            }
        ],
    });

    // Funksjon for å oppdatere verdien i input-feltet
    const handleChange = (field: keyof Volunteer, value: string) => {
        setFormData((prev: Volunteer) => ({...prev, [field]: value}));
        verifyHash()
    };

    const handleExtraRoleChange = (index: number, field: keyof ExtraRole, value: string) => {
        const updatedExtraRoles = [...formData.extraRole!];
        updatedExtraRoles[index] = {...updatedExtraRoles[index], [field]: value};
        setFormData((prev: Volunteer) => ({...prev, extraRole: updatedExtraRoles}));
    };


    useEffect(() => {
        verifyHash();
    }, [verifyHash]);

    return (
        <Box sx={{
            border: `5px solid ${verificationResult === 'verified' ? '#006647' : verificationResult === 'invalid' ? '#761a19' : '#FFA500'}`, // Orange for loading
            padding: 2,
            borderRadius: 2,
        }}>
            <Typography variant="h3">Verifikasjon</Typography>
            <Grid item xs={12} md={6}>
                <Button variant="contained" onClick={verifyHash}>
                    Verifiser
                </Button>
            </Grid>
            <Grid item xs={12} md={6}>
                {verificationResult === null ? (
                    <Typography variant="h6" sx={{ color: '#FFA500' }}>Laster...</Typography> // Loading message
                ) : (
                    <Typography variant="h6" sx={{ color: verificationResult === 'verified' ? '#006647' : '#761a19' }}>
                        {verificationResult === 'verified' ? "Attesten er gyldig!" : "Attesten er ugyldig."}
                    </Typography>
                )}
            </Grid>
            <Box>
                <Grid container spacing={2} paddingTop={2}>
                    <Grid item xs={10} md={8}>
                        <TextField
                            label="Navn"
                            variant="outlined"
                            fullWidth
                            value={formData.personName}
                            onChange={(e) => handleChange('personName', e.target.value)}
                        />
                    </Grid>
                </Grid>
                <Grid container spacing={2} paddingTop={2}>
                    <Grid item xs={5} md={2}>
                        <TextField
                            label="Rolle"
                            variant="outlined"
                            fullWidth
                            value={formData.role}
                            onChange={(e) => handleChange('role', e.target.value)}
                        />
                    </Grid>
                    <Grid item xs={5} md={2}>
                        <TextField
                            label="Gruppe"
                            variant="outlined"
                            fullWidth
                            value={formData.groupName}
                            onChange={(e) => handleChange('groupName', e.target.value)}
                        />
                    </Grid>

                    <Grid item xs={5} md={2}>
                        <TextField
                            label="Startdato"
                            variant="outlined"
                            fullWidth
                            value={formData.startDate}
                            onChange={(e) => handleChange('startDate', e.target.value)}
                        />
                    </Grid>
                    <Grid item xs={5} md={2}>
                        <TextField
                            label="Sluttdato"
                            variant="outlined"
                            fullWidth
                            value={formData.endDate}
                            onChange={(e) => handleChange('endDate', e.target.value)}
                        />
                    </Grid>

                </Grid>

                {/* Ekstra roller */}
                {formData.extraRole?.filter(extraRole =>
                    extraRole.role || extraRole.groupName || extraRole.startDate || extraRole.endDate
                ).map((extraRole, index) => (
                    <Box key={index} sx={{ marginTop: 2 }}>
                        <Grid container spacing={2}>
                            <Grid item xs={5} md={2}>
                                <TextField
                                    label={`Rolle ${index + 1}`}
                                    variant="outlined"
                                    fullWidth
                                    value={extraRole.role}
                                    onChange={(e) => handleExtraRoleChange(index, 'role', e.target.value)}
                                />
                            </Grid>
                            <Grid item xs={5} md={2}>
                                <TextField
                                    label={`Ekstra Rolle Gruppe ${index + 1}`}
                                    variant="outlined"
                                    fullWidth
                                    value={extraRole.groupName}
                                    onChange={(e) => handleExtraRoleChange(index, 'groupName', e.target.value)}
                                />
                            </Grid>
                            <Grid item xs={5} md={2}>
                                <TextField
                                    label={`Startdato ${index + 1}`}
                                    variant="outlined"
                                    fullWidth
                                    value={extraRole.startDate}
                                    onChange={(e) => handleExtraRoleChange(index, 'startDate', e.target.value)}
                                />
                            </Grid>
                            <Grid item xs={5} md={2}>
                                <TextField
                                    label={`Sluttdato ${index + 1}`}
                                    variant="outlined"
                                    fullWidth
                                    value={extraRole.endDate}
                                    onChange={(e) => handleExtraRoleChange(index, 'endDate', e.target.value)}
                                />
                            </Grid>
                        </Grid>
                    </Box>
                ))}
            </Box>
        </Box>
    );
}

export default Verify;
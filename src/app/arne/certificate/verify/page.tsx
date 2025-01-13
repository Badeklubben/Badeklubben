'use client'
import React, { useState } from 'react';
import { useSearchParams } from 'next/navigation';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Volunteer  from '../Volunteer';
import { ExtraRole } from '../Volunteer';
import { Button } from '@mui/material';
import {sha256} from "crypto-hash";
import {query, where, collection, getDocs} from 'firebase/firestore';
import {db} from '../fb_config';

const Verify: React.FC = () => {
    const searchParams = useSearchParams();
    const paramsString = searchParams.toString();
    const initialParamsArray = paramsString.split('_').map(param => decodeURIComponent(param.replace(/\+/g, ' ')));

    const verifyHash = async () => {
        const toCheck = initialParamsArray?.join("_")
        const trimmedCheck = toCheck.substring(0, toCheck.length - 1);
        console.log(trimmedCheck);
            try {
                // Generer hashen for inputValue
                const generatedHash = await sha256(trimmedCheck);

                // Hent alle dokumentene fra hashcollection
                const querySnapshot = await getDocs(collection(db, "hashcollection"));

                let isValid = false;

                querySnapshot.forEach((doc) => {
                    const data = doc.data();
                    if (data.hash === generatedHash) {
                        isValid = true;
                    }
                });

                if (isValid) {
                    console.log("Hash er gyldig!");
                    // Gjør noe hvis hashen er gyldig
                } else {
                    console.log("Ingen gyldig hash funnet.");
                    // Håndter ugyldig hash
                }
            } catch (error) {
                console.error("Feil ved verifisering av hash: ", error);
            }
        };


    // Forhåndsdefinert formData med det ønskede formatet
    const [formData, setFormData] = useState({
        name: initialParamsArray[0] || '',
        group: initialParamsArray[1] || '',
        startDate: initialParamsArray[2] || '',
        endDate: initialParamsArray[3] || '',
        role: initialParamsArray[4] || '',
        extraRoles: [
            {
                groupName0: initialParamsArray[5] || '',
                startDate0: initialParamsArray[6] || '',
                endDate0: initialParamsArray[7] || '',
                role0: initialParamsArray[8] || '',
            },
            {
                groupName1: initialParamsArray[9] || '',
                startDate1: initialParamsArray[10] || '',
                endDate1: initialParamsArray[11] || '',
                role1: initialParamsArray[12] || '',
            },
            {
                groupName2: initialParamsArray[13] || '',
                startDate2: initialParamsArray[14] || '',
                endDate2: initialParamsArray[15] || '',
                role2: initialParamsArray[16] || '',
            }

        ],
    });

    // Funksjon for å oppdatere verdien i input-feltet
    const handleChange = (field: keyof typeof formData, value: string) => {
        setFormData(prev => ({ ...prev, [field]: value }));
    };

    // Funksjon for å oppdatere ekstra roller
    const handleExtraRoleChange = (index: number, field: string, value: string) => {
        const updatedExtraRoles = [...formData.extraRoles];
        updatedExtraRoles[index] = { ...updatedExtraRoles[index], [field]: value };
        setFormData(prev => ({ ...prev, extraRoles: updatedExtraRoles }));
    };


    return (
        <div>
            <h1>Verifikasjon</h1>
            <Box sx={{display: 'flex', flexDirection: 'column', gap: 2}}>
                <TextField
                    label="Navn"
                    variant="outlined"
                    value={formData.name}
                    onChange={(e) => handleChange('name', e.target.value)}
                />
                <TextField
                    label="Gruppe"
                    variant="outlined"
                    value={formData.group}
                    onChange={(e) => handleChange('group', e.target.value)}
                />
                <TextField
                    label="Startdato"
                    variant="outlined"
                    value={formData.startDate}
                    onChange={(e) => handleChange('startDate', e.target.value)}
                />
                <TextField
                    label="Sluttdato"
                    variant="outlined"
                    value={formData.endDate}
                    onChange={(e) => handleChange('endDate', e.target.value)}
                />
                <TextField
                    label="Rolle"
                    variant="outlined"
                    value={formData.role}
                    onChange={(e) => handleChange('role', e.target.value)}
                />
                {formData.extraRoles.map((extraRole, index) => (
                    <Box key={index} sx={{display: 'flex', flexDirection: 'column', gap: 1}}>
                        <TextField
                            label={`Ekstra Rolle Gruppe ${index + 1}`}
                            variant="outlined"
                            value={extraRole[`groupName${index}`]} //todo typefixing
                            onChange={(e) => handleExtraRoleChange(index, `groupName${index}`, e.target.value)}
                        />
                        <TextField
                            label={`Startdato ${index + 1}`}
                            variant="outlined"
                            value={extraRole[`startDate${index}`]}
                            onChange={(e) => handleExtraRoleChange(index, `startDate${index}`, e.target.value)}
                        />
                        <TextField
                            label={`Sluttdato ${index + 1}`}
                            variant="outlined"
                            value={extraRole[`endDate${index}`]}
                            onChange={(e) => handleExtraRoleChange(index, `endDate${index}`, e.target.value)}
                        />
                        <TextField
                            label={`Rolle ${index + 1}`}
                            variant="outlined"
                            value={extraRole[`role${index}`]}
                            onChange={(e) => handleExtraRoleChange(index, `role${index}`, e.target.value)}
                        />
                    </Box>
                ))}
                <Button onClick={verifyHash}>
                  Verifiser
                </Button>
            </Box>
        </div>
    );
}

export default Verify;
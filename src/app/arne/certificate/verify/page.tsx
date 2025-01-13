'use client'
import React, {useState} from 'react';
import {useSearchParams} from 'next/navigation';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import {ExtraRole, Volunteer} from '@/app/arne/certificate/util/Volunteer';
import {Button} from '@mui/material';
import {collection, getDocs, query, where} from 'firebase/firestore';
import {db} from '@/app/arne/certificate/firebase/fb_config';
import {hashFunction} from "@/app/arne/certificate/util/hashFunction";

const Verify: React.FC = () => {
    const paramsString = useSearchParams().toString();
    const initialParamsArray: string[] = paramsString.split('_').map(param => decodeURIComponent(param.replace(/\+/g, ' ')));
    const verifyHash = async () => {
        const toCheck = initialParamsArray?.join("_");
        const trimmedCheck = toCheck.substring(0, toCheck.length - 1);
        const idToCheck = initialParamsArray[0]; // Hent ID-en fra initialParamsArray
        try {
            const generatedHash = await hashFunction(trimmedCheck);
            const q = query(collection(db, "hashcollection"), where("id", "==", idToCheck));
            const querySnapshot = await getDocs(q);
            if (!querySnapshot.empty) {
                querySnapshot.forEach((doc) => {
                    const data = doc.data();
                    if(generatedHash == data.hash) {
                        console.log("Hash er gyldig!");
                    } else {
                        console.log("Ingen gyldig hash funnet, det ble:", generatedHash);
                        console.log("I DB-en er det:", data.hash)

                        // Håndter ugyldig hash
                    }
                });
            } else {
                console.log("Ingen dokumenter funnet med den spesifikke ID-en.");
                // Håndter tilfelle der ingen dokumenter finnes
            }
        } catch (error) {
            console.error("Feil ved verifisering av hash: ", error);
        }
    };

    const [formData, setFormData] = useState<Volunteer>({
        id: initialParamsArray[0] || '',
        personName: initialParamsArray[1] || '',
        groupName: initialParamsArray[2] || '',
        startDate: initialParamsArray[3] || '',
        endDate: initialParamsArray[4] || '',
        role: initialParamsArray[5] || '',
        extraRole: [
            {
                groupName: initialParamsArray[6] || '',
                startDate: initialParamsArray[7] || '',
                endDate: initialParamsArray[8] || '',
                role: initialParamsArray[9] || '',
            },
            {
                groupName: initialParamsArray[10] || '',
                startDate: initialParamsArray[11] || '',
                endDate: initialParamsArray[12] || '',
                role: initialParamsArray[13] || '',
            },
            {
                groupName: initialParamsArray[14] || '',
                startDate: initialParamsArray[15] || '',
                endDate: initialParamsArray[16] || '',
                role: initialParamsArray[17] || '',
            }
        ],
    });

    // Funksjon for å oppdatere verdien i input-feltet
    const handleChange = (field: keyof Volunteer, value: string) => {
        setFormData((prev: Volunteer)  => ({ ...prev, [field]: value }));
    };

    const handleExtraRoleChange = (index: number, field: keyof ExtraRole, value: string) => {
        const updatedExtraRoles = [...formData.extraRole!];
        updatedExtraRoles[index] = { ...updatedExtraRoles[index], [field]: value };
        setFormData((prev: Volunteer) => ({ ...prev, extraRole: updatedExtraRoles }));
    };

    return (
        <div>
            <h1>Verifikasjon</h1>
            <Button onClick={verifyHash}>
                Verifiser
            </Button>

            <Box sx={{display: 'flex', flexDirection: 'column', gap: 2}}>
                <TextField
                    label="Navn"
                    variant="outlined"
                    value={formData.personName}
                    onChange={(e) => handleChange('personName', e.target.value)}
                />
                <TextField
                    label="Gruppe"
                    variant="outlined"
                    value={formData.groupName}
                    onChange={(e) => handleChange('groupName', e.target.value)}
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
                {formData.extraRole.map((extraRole, index) => (
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

            </Box>
        </div>
    );
}

export default Verify;
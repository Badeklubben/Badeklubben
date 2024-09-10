'use client'
import DefaultDrawer from "@/app/shared/components/DefaultDrawer";
import Link from "next/link";
import React, {useEffect, useState} from "react";
import {
    Box,
    MenuItem,
    FormControl,
    Select,
    SelectChangeEvent,
    Grid,
    Typography,
    Input,
    Card,
    CardContent,
    Skeleton
} from "@mui/material"
import Button from '@mui/material/Button';
import {db} from './config/firebase_a';
import {collection, addDoc} from "firebase/firestore";
import DefaultTypography from "@/app/shared/components/DefaultTypography";
import {signInWithEmailAndPassword} from "firebase/auth";
import {auth} from './config/firebase_a';
import {getData} from './getData';
import {apartments} from "./apartments";

interface ResultType {
    scores: {
        [key: string]: {
            1: number;
            2: number;
            3: number;
            4: number;
        }
    }
}
export default function Arne() {
    const [votes, setVotes] = useState([0, 0, 0, 0]);  // Initialtilstand for rangeringer
    const [usr, setUsr] = useState("");
    const [pass, setPass] = useState("");
    const [infoText, setInfoText] = useState("Skriv navnet ditt slik: Arne")
    const [results, setResults] = useState<ResultType | null>(null);
    const [username, setUsername] = useState("");
    const [logInMessage, setLogInMessage] = useState("Log in - kun admin")
    const [dbInfo, setdbInfo] = useState("")
    const [loading, setLoading] = useState(true);

    const objectNames = ['a', 'b', 'c', 'd'];

    useEffect(() => {
        const fetchData = async () => {
            const data = await getData();
            // @ts-ignore
            setResults(data);
            console.log(data)
            setLoading(false);

        };
        fetchData();
    }, []);

    const loginUser = async (usr: string, password: string) => {
        try {
            const userCredential = await signInWithEmailAndPassword(auth, usr, password);
            setLogInMessage('Logged in as' + userCredential.user.email)
            setdbInfo("")
            console.log("Logget inn bruker:", userCredential.user);
        } catch (error) {
            console.error("Feil ved innlogging:");
        }
    };

    const handleVote = async () => {

        if (votes.includes(0)) {
            setInfoText('Vennligst ranger alle kandidatene.');
            return;
        }
        if (username == "") {
            setInfoText("Vennligst fyll inn navn")
            return
        }
        const uniqueVotes = new Set(votes);
        if (uniqueVotes.size !== votes.length) {
            setInfoText('Duplikate rangeringer er ikke tillatt.');
            return;
        }
        try {
            await addDoc(collection(db, 'Badeklubben/badeklubben/votes'), {
                userId: username,  // Erstatt med faktisk bruker-ID
                votes,
                timestamp: new Date()
            });
            setInfoText(`Takk for din stemme ${username}`)
        } catch (error) {
            setInfoText('Det oppstod en feil under lagring av stemmen.');
        }
    };

    const handleChange = (event: SelectChangeEvent<number>, index: number) => {
        const newVotes: number[] = [...votes];
        newVotes[index] = Number(event.target.value);
        setVotes(newVotes);
    };

    // @ts-ignore

    return (
        <Box>
            <DefaultDrawer/>
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
            <Typography>{infoText}</Typography>
            <br/>
            <Button onClick={handleVote} variant={"contained"}>Send inn stemme</Button>
            <Box sx={{display: 'column', marginTop: "100px"}}>
                <Typography>
                    {dbInfo}
                </Typography>
            </Box>
            <Box>
                <Grid container direction="row">
                    {objectNames.map((key) => (
                        <Grid item key={key} md={3}>
                            <Card>
                                <CardContent>
                                    <Typography variant="h5" component="div">
                                        Leilighet {key.toUpperCase()}
                                    </Typography>
                                    <Typography sx={{mb: 1.5}} color="text.secondary">
                                        Har fått:
                                    </Typography>
                                    {loading  ? (
                                        <>
                                            <Skeleton variant="text" width="80%"/>
                                            <Skeleton variant="text" width="80%"/>
                                            <Skeleton variant="text" width="80%"/>
                                            <Skeleton variant="text" width="80%"/>
                                        </>
                                    ) : (
                                        results ? (
                                            <>
                                                <Typography variant="body2">
                                                    {results.scores[key][1]} førsteplasser
                                                </Typography>
                                                <Typography variant="body2">
                                                    {results.scores[key][2]} andreplasser
                                                </Typography>
                                                <Typography variant="body2">
                                                    {results.scores[key][3]} tredjeplasser
                                                </Typography>
                                                <Typography variant="body2">
                                                    {results.scores[key][4]} fjerdeplasser
                                                </Typography>
                                            </>
                                        ) : (
                                            <Typography variant="body2">
                                                Ingen data tilgjengelig.
                                            </Typography>
                                        )
                                    )}
                                </CardContent>
                            </Card>
                        </Grid>
                    ))}
                </Grid>
            </Box>

            <Box hidden={true}>
                <br/><br/>

                <Typography>
                    {logInMessage}
                </Typography>
                <Input onChange={(e) => setUsr(e.target.value)} placeholder={"Brukernavn"}></Input>
                <br/>
                <Input onChange={(e) => setPass(e.target.value)} placeholder={"Passord"}/>
                <br/><br/>
                <Button onClick={() => loginUser(usr, pass)} variant={'contained'}>Log in!</Button>
            </Box>


        </Box>
    );
}
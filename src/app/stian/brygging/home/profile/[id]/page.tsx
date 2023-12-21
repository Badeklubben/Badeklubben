"use client";
import "../../lib/db-functions";
import { useState } from "react";
import { updateForm } from "../../lib/db-functions";
import { BryggeskjemaDocument } from "../../lib/form-interface";
import { Timestamp } from "firebase/firestore";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { getForm } from "../../lib/db-functions";
import { auth } from "../../../config/firebase";

// Temp imports
import { db } from "../../../config/firebase";
import { doc, updateDoc } from "firebase/firestore";

export default function Form({ params }: any) {
    const user = auth.currentUser;
    // Router for redirecting
    const router = useRouter();
    const [isLoading, setIsLoading] = useState<boolean>(true);

    // Hooks for the form, Bryggeskjema
    const [navn, setNavn] = useState<String>("");
    const [batchNr, setBatchNr] = useState<Number>(0);
    const [bryggeDato, setBryggeDato] = useState<{
        seconds: number;
        nanoseconds: number;
    }>({ seconds: 0, nanoseconds: 0 });
    const [tappeDato, setTappeDato] = useState<{
        seconds: number;
        nanoseconds: number;
    }>({ seconds: 0, nanoseconds: 0 });
    const [forventetOG, setForventetOG] = useState<Number>(0);
    const [måltOG, setMåltOG] = useState<Number>(0);
    const [forventetFG, setForventetFG] = useState<Number>(0);
    const [måltFG, setMåltFG] = useState<Number>(0);
    const [effektivitet, setEffektivitet] = useState<Number>(0);
    const [ABV, setABV] = useState<Number>(0);

    // Function for converting from js date to firebase date
    const convertDateToTimestamp = (dateString: string) => {
        const date = new Date(dateString);
        return Timestamp.fromDate(date);
    };

    // Utility function to convert timestamp to date string
    const timestampToDateStr = (timestamp: any) => {
        const date = new Date(timestamp.seconds * 1000); // Convert to milliseconds
        return date.toISOString().split("T")[0]; // Format to YYYY-MM-DD
    };

    // Function for submitting the form
    const onSubmit = async () => {
        try {
            console.log(navn);
            const data = {
                abv: ABV,
                "batch-navn": navn,
                "batch-nr": batchNr,
                bryggedato: bryggeDato,
                effektivitet: effektivitet,
                "forventet-fg": forventetFG,
                "forventet-og": forventetOG,
                "målt-fg": måltFG,
                "målt-og": måltOG,
                tappedato: tappeDato,
            } as unknown as BryggeskjemaDocument;
            await updateForm(data, params.id);
            router.push("/stian/brygging/home/profile");
        } catch (error) {
            console.error(error);
        }
    };

    const setForm = async (form: BryggeskjemaDocument) => {
        setNavn(form["batch-navn"]);
        setBatchNr(form["batch-nr"]);
        setBryggeDato(form.bryggedato);
        setTappeDato(form.tappedato);
        setForventetOG(form["forventet-og"]);
        setMåltOG(form["målt-og"]);
        setForventetFG(form["forventet-fg"]);
        setMåltFG(form["målt-fg"]);
        setEffektivitet(form.effektivitet);
        setABV(form.abv);
    };

    // Function for getting the form from the database and reloading the page
    const update = async () => {
        try {
            const data = (await getForm(params.id)) as BryggeskjemaDocument;
            await setForm(data);
            setIsLoading(false);
        } catch (error) {
            console.error(error);
            setIsLoading(false);
        }
    };

    useEffect(() => {
        update();
    }, []);

    return (
        <div>
            {isLoading ? (
                <div>Loading...</div>
            ) : (
                <div className="new-form-container">
                    <label>Navn på brygget</label>
                    <input
                        type="text"
                        placeholder="Hansa Pilsner"
                        value={navn.toString()}
                        onChange={(e) => setNavn(e.target.value)}
                    />
                    <label>Batch-Nr.</label>
                    <input
                        type="number"
                        placeholder="#123456"
                        value={batchNr.toString()}
                        onChange={(e) => setBatchNr(Number(e.target.value))}
                    />
                    <label>Brygge Dato</label>
                    <input
                        type="date"
                        placeholder="Dato"
                        value={timestampToDateStr(bryggeDato)}
                        onChange={(e) =>
                            setBryggeDato(
                                convertDateToTimestamp(e.target.value)
                            )
                        }
                    />
                    <label>Tappe Dato</label>
                    <input
                        type="date"
                        placeholder="10.10.2021"
                        value={timestampToDateStr(tappeDato)}
                        onChange={(e) =>
                            setTappeDato(convertDateToTimestamp(e.target.value))
                        }
                    />
                    <label>Forventet OG</label>
                    <input
                        type="number"
                        placeholder="1.050"
                        value={forventetOG.toString()}
                        onChange={(e) => setForventetOG(Number(e.target.value))}
                    />
                    <label>Målt OG</label>
                    <input
                        type="number"
                        placeholder="1.050"
                        value={måltOG.toString()}
                        onChange={(e) => setMåltOG(Number(e.target.value))}
                    />
                    <label>Forventet FG</label>
                    <input
                        type="number"
                        placeholder="1.050"
                        value={forventetFG.toString()}
                        onChange={(e) => setForventetFG(Number(e.target.value))}
                    />
                    <label>Målt FG</label>
                    <input
                        type="text"
                        placeholder="1.050"
                        value={måltFG.toString()}
                        onChange={(e) => setMåltFG(Number(e.target.value))}
                    />
                    <label>Effektivitet</label>
                    <input
                        type="number"
                        placeholder="95"
                        value={effektivitet.toString()}
                        onChange={(e) =>
                            setEffektivitet(Number(e.target.value))
                        }
                    />
                    <label>ABV</label>
                    <input
                        type="text"
                        placeholder="4.7"
                        value={ABV.toString()}
                        onChange={(e) => setABV(Number(e.target.value))}
                    />
                    <button onClick={onSubmit}>Lagre</button>
                </div>
            )}
        </div>
    );
}

export const runtime = "edge";

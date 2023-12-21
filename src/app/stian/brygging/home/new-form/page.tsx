"use client";
import { createForm } from "../lib/db-functions";
import { BryggeskjemaDocument } from "../lib/form-interface";
import { useState } from "react";
import { Timestamp } from "firebase/firestore";
import { auth } from "../../config/firebase";
import { useRouter } from "next/navigation";
export default function NewForm() {
    const router = useRouter();

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

    const convertDateToTimestamp = (dateString: string) => {
        const date = new Date(dateString);
        return Timestamp.fromDate(date);
    };

    const onSubmit = async () => {
        try {
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
                uid: auth.currentUser?.uid,
            } as unknown as BryggeskjemaDocument;
            await createForm(data);
            router.push("/stian/brygging/home");
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <div>
            <div className="new-form-container">
                <label>Navn på brygget</label>
                <input
                    type="text"
                    placeholder="Hansa Pilsner"
                    onChange={(e) => setNavn(e.target.value)}
                />
                <label>Batch-Nr.</label>
                <input
                    type="number"
                    placeholder="#123456"
                    onChange={(e) => setBatchNr(Number(e.target.value))}
                />
                <label>Brygge Dato</label>
                <input
                    type="date"
                    placeholder="Dato"
                    onChange={(e) =>
                        setBryggeDato(convertDateToTimestamp(e.target.value))
                    }
                />
                <label>Tappe Dato</label>
                <input
                    type="date"
                    placeholder="10.10.2021"
                    onChange={(e) =>
                        setTappeDato(convertDateToTimestamp(e.target.value))
                    }
                />
                <label>Forventet OG</label>
                <input
                    type="number"
                    placeholder="1.050"
                    onChange={(e) => setForventetOG(Number(e.target.value))}
                />
                <label>Målt OG</label>
                <input
                    type="number"
                    placeholder="1.050"
                    onChange={(e) => setMåltOG(Number(e.target.value))}
                />
                <label>Forventet FG</label>
                <input
                    type="number"
                    placeholder="1.050"
                    onChange={(e) => setForventetFG(Number(e.target.value))}
                />
                <label>Målt FG</label>
                <input
                    type="text"
                    placeholder="1.050"
                    onChange={(e) => setMåltFG(Number(e.target.value))}
                />
                <label>Effektivitet</label>
                <input
                    type="number"
                    placeholder="95"
                    onChange={(e) => setEffektivitet(Number(e.target.value))}
                />
                <label>ABV</label>
                <input
                    type="text"
                    placeholder="4.7"
                    onChange={(e) => setABV(Number(e.target.value))}
                />
                <button onClick={onSubmit}>Lagre</button>
            </div>
        </div>
    );
}

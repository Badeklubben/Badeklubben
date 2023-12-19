"use client";
import { useEffect, useState } from "react";
import { getDocs, collection } from "firebase/firestore";
import { BryggeskjemaDocument } from "./lib/form-interface";
import { db } from "../config/firebase";
import Form from "./lib/form";

export default function Home() {
    const [forms, setForms] = useState<BryggeskjemaDocument[]>([]);
    const bryggeskjemaCollection = collection(db, "bryggeskjema");

    const getSomething = async () => {
        try {
            const data = await getDocs(bryggeskjemaCollection);
            const filteredData = data.docs.map((doc) => ({
                ...doc.data(),
                id: doc.id,
            })) as BryggeskjemaDocument[];
            setForms(filteredData);
        } catch (err) {
            console.error(err);
        }
    };

    useEffect(() => {
        getSomething();
    }, []);

    return (
        <div>
            <h1>Welcome to the Brygging app!</h1>
            <div>
                {forms.map((form) => (
                    <Form key={form.id} form={form} />
                ))}
            </div>
        </div>
    );
}

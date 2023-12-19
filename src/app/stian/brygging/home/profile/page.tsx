"use client";
import { collection, query, where, getDocs } from "firebase/firestore";
import { db, auth } from "../../config/firebase";
import { BryggeskjemaDocument } from "../lib/form-interface";
import { useState, useEffect } from "react";
import Link from "next/link";
import Form from "../lib/form";

export default function Profile() {
    const [forms, setForms] = useState<BryggeskjemaDocument[]>([]);
    let q = query(
        collection(db, "bryggeskjema"),
        where("uid", "==", auth?.currentUser?.uid)
    );

    const querySnapshot = async () => {
        try {
            const data = await getDocs(q);
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
        querySnapshot();
    }, []);

    return (
        <div>
            <h1>Profile</h1>
            {forms.map((form) => (
                <div>
                    <Form key={form.id} form={form} />
                </div>
            ))}
        </div>
    );
}

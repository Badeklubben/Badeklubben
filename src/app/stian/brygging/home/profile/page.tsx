"use client";
import { collection, query, where, getDocs } from "firebase/firestore";
import { db, auth } from "../../config/firebase";
import { BryggeskjemaDocument } from "../lib/form-interface";
import { useState, useEffect } from "react";
import { deleteForm } from "../lib/db-functions";
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

    const handleUpdate = () => {};

    const handleDelete = async (id: string) => {
        await deleteForm(id);
        querySnapshot();
    };

    useEffect(() => {
        querySnapshot();
    }, []);

    return (
        <div>
            <h1>Profile</h1>
            <div className="grid">
                {forms.map((form) => (
                    <div key={form.id} className="form-container">
                        <Form key={form.id} form={form} />
                        <div className="">
                            <button onClick={handleUpdate}>Update</button>
                            <button onClick={() => handleDelete(form.id)}>
                                Delete
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

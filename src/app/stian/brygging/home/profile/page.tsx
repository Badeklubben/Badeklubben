"use client";
import { collection, query, where, getDocs } from "firebase/firestore";
import { db, auth } from "../../config/firebase";
import { BryggeskjemaDocument } from "../lib/form-interface";
import { useState, useEffect } from "react";
import { deleteForm } from "../lib/db-functions";
import Form from "../(documents)/form";
import { useRouter } from "next/navigation";
export default function Profile() {
    const router = useRouter();
    const [forms, setForms] = useState<BryggeskjemaDocument[]>([]);

    // This should be moved to the db-functions file
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

    const handleUpdate = (id: String) => {
        router.push(`/stian/brygging/home/profile/${id}`);
    };

    // Delte the form (Implemented correctly)
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
                            <button onClick={() => handleUpdate(form.id)}>
                                Update
                            </button>
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

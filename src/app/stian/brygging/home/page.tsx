"use client";
import { useEffect, useState } from "react";
import { BryggeskjemaDocument } from "./lib/form-interface";
import { getForms } from "./lib/db-functions";
import Form from "./lib/form";
import Link from "next/link";

export default function Home() {
    const [forms, setForms] = useState<BryggeskjemaDocument[]>([]);

    const something = async () => {
        const fetchData = async () => {
            const fetchedForms = await getForms();
            if (fetchedForms) {
                setForms(fetchedForms);
            }
        };

        fetchData();
    };

    useEffect(() => {
        something();
    }, []);

    return (
        <div>
            <h1>Welcome to the Brygging app!</h1>
            <div>
                {forms.map((form) => (
                    <Link href={`/stian/brygging/home/${form.id}`}>
                        <Form key={form.id} form={form} />
                    </Link>
                ))}
            </div>
        </div>
    );
}

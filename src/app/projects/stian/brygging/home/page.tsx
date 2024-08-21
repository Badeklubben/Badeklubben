"use client";
import { useEffect, useState } from "react";
import { BryggeskjemaDocument } from "./lib/form-interface";
import { getForms } from "./lib/db-functions";
import Form from "./(documents)/form";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function Home() {
    const [forms, setForms] = useState<BryggeskjemaDocument[]>([]);
    const router = useRouter();

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
        <div className="body">
            <h1>Welcome to the Brygging app!</h1>
            <button
                className="new-button"
                onClick={() => router.push("../stian/brygging/home/new-form")}
            >
                Nytt skjema
            </button>
            <div className="grid">
                {forms.map((form) => (
                    <Link
                        key={form.id}
                        className="form-container"
                        href={`../stian/brygging/home/${form.id}`}
                    >
                        <Form key={form.id} form={form} showcase={true} />
                    </Link>
                ))}
            </div>
        </div>
    );
}

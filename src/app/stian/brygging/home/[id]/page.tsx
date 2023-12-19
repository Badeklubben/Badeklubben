"use client";
import { BryggeskjemaDocument, defaultForm } from "../lib/form-interface";
import { getForm } from "../lib/db-functions";
import { useEffect, useState } from "react";
import Form from "../lib/form";

export default function Page({ params }: any) {
    const [form, setForm] = useState<BryggeskjemaDocument>(defaultForm);
    const update = async () => {
        try {
            const wasap = (await getForm({ params })) as BryggeskjemaDocument;
            setForm(wasap);
        } catch (error) {
            console.error(error);
        }
    };

    useEffect(() => {
        update();
    }, []);
    return (
        <div>
            {form.id == "" ? (
                "Loading..."
            ) : (
                <Form key={params.id} form={form} />
            )}
        </div>
    );
}

export const runtime = "edge"; // 'nodejs' (default) | 'edge'

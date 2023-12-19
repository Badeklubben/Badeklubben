"use client";
import { useEffect, useState } from "react";
import { getForm } from "../lib/db-functions";
import Form from "../lib/form";
import { BryggeskjemaDocument, defaultForm } from "../lib/form-interface";
import { set } from "firebase/database";

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
                "Loading............................................."
            ) : (
                <Form key={params.id} form={form} />
            )}
        </div>
    );
}

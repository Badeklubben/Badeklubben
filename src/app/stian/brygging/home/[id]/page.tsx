"use client";
import { BryggeskjemaDocument, defaultForm } from "../lib/form-interface";
import { getForm } from "../lib/db-functions";
import { useEffect, useState } from "react";
import Form from "../(documents)/form";
import Forbredelser from "../(documents)/forbredelser";

export default function Page({ params }: any) {
    const [form, setForm] = useState<BryggeskjemaDocument>(defaultForm);

    const update = async () => {
        try {
            const data = (await getForm(params.id)) as BryggeskjemaDocument;
            setForm(data);
        } catch (error) {
            console.error(error);
        }
    };

    useEffect(() => {
        update();
    }, []);
    return (
        <div>
            <div className="form-container">
                {form.id == "" ? (
                    "Loading..."
                ) : (
                    <Form key={params.id} form={form} showcase={false} />
                )}
            </div>
            <div className="form-container">
                <Forbredelser id={params.id} />
            </div>
        </div>
    );
}

export const runtime = "edge";

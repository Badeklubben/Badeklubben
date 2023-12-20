"use client";
import {
    getDocs,
    getDoc,
    collection,
    doc,
    addDoc,
    deleteDoc,
} from "firebase/firestore";
import { BryggeskjemaDocument } from "./form-interface";
import { db } from "../../config/firebase";

const bryggeskjemaCollection = collection(db, "bryggeskjema");

export async function getForms() {
    try {
        const data = await getDocs(bryggeskjemaCollection);
        const filteredData = data.docs.map((doc) => ({
            ...doc.data(),
            id: doc.id,
        })) as BryggeskjemaDocument[];
        return filteredData;
    } catch (err) {
        console.error(err);
    }
}

export async function getForm({ params }: any) {
    try {
        const data = await getDoc(doc(db, "bryggeskjema", params.id));
        return data.data() as BryggeskjemaDocument;
    } catch (err) {
        console.error(err);
    }
}

export async function createForm(form: BryggeskjemaDocument) {
    try {
        addDoc(bryggeskjemaCollection, form);
    } catch (err) {
        console.error(err);
    }
}

export async function updateForm(form: BryggeskjemaDocument) {}

export async function deleteForm(id: string) {
    try {
        const data = doc(db, "bryggeskjema", id);
        await deleteDoc(data);
    } catch (error) {
        console.log(error);
    }
}

"use client";
import {
    getDocs,
    getDoc,
    collection,
    doc,
    addDoc,
    deleteDoc,
    updateDoc,
    setDoc,
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

export async function getForm(id: string) {
    try {
        const data = await getDoc(doc(db, "bryggeskjema", id));
        return data.data() as BryggeskjemaDocument;
    } catch (err) {
        console.error(err);
    }
}

export async function createForm(form: BryggeskjemaDocument) {
    try {
        await addDoc(bryggeskjemaCollection, form);
    } catch (err) {
        console.error(err);
    }
}

export async function createNewDocument(ref: any, data: any) {
    try {
        await setDoc(ref, data);
    } catch (error) {
        console.log(error);
    }
}

export async function updateForm(form: BryggeskjemaDocument, id: string) {
    try {
        const bryggDoc = doc(db, "bryggeskjema", id);
        // Lmao this interface worked, idk how
        interface BryggeskjemaDocument {
            [key: string]: any;
        }
        await updateDoc(bryggDoc, form as BryggeskjemaDocument);
    } catch (error) {
        console.log(error);
    }
}

export async function deleteForm(id: string) {
    try {
        const data = doc(db, "bryggeskjema", id);
        await deleteDoc(data);
    } catch (error) {
        console.log(error);
    }
}

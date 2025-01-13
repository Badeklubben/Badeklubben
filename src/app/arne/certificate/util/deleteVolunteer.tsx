import {deleteDoc, doc} from "firebase/firestore";
import {db} from "@/app/arne/certificate/firebase/fb_config";

export const deleteVolunteer = async (id: string) => {
    console.log('Attempting to delete document with ID:', id);
    try {
        await deleteDoc(doc(db, 'volunteers', id));
        console.log('Document successfully deleted!');
        alert('Dokumentet ble slettet!');
    } catch (error) {
        console.error('Error removing document: ', error);
        alert('Feil ved sletting av dokument. Sjekk konsollen for detaljer.');
    }
};
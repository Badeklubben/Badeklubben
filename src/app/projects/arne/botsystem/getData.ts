import {db} from "./config/firebase_a";
import { collection, getDocs, doc, getDoc } from 'firebase/firestore';

interface Person {
    name: string;
    count: number;
}

export const getData = async (): Promise<Person[]> => {
    try {
        const personerRef = collection(db, 'Botsystem/botsystem/personer');
        const querySnapshot = await getDocs(personerRef);

        const personer: Person[] = [];
        querySnapshot.forEach((doc) => {
            const data = doc.data();
            if (data.name) {
                personer.push({
                    name: data.name,
                    count: data.count || 0,
                });
            }
        });

        return personer;
    } catch (error) {
        console.error("Error fetching data: ", error);
        return [];
    }
};
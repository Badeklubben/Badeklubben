import { doc, getDoc, updateDoc } from 'firebase/firestore';
import { db } from './config/firebase_a'; // Sørg for at du importerer din Firebase-konfigurasjon

const updateVoteCount = async (name: string, change: number) => {
    try {
        const personRef = doc(db, `Botsystem/botsystem/personer/${name}`);
        const personDoc = await getDoc(personRef);
        if (personDoc.exists()) {
            const currentCount = personDoc.data().count || 0;
            const newCount = currentCount + change;
            await updateDoc(personRef, {
                count: newCount
            });
            return newCount; // Returner den nye verdien
        }
    } catch (error) {
        console.error("Error updating vote count: ", error);
    }
    return null; // Returner null hvis det oppstår en feil
};

export default updateVoteCount;
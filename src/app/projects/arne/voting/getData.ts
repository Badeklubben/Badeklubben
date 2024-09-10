import {collection, getDocs, query} from "firebase/firestore";
import {db} from "./config/firebase_a";



type UserData = {
    id: string;
    userId: string;
    votes: number[]; // Anta at votes er et array av tall
};
type PlacementScores = {
    1: number;
    2: number;
    3: number;
    4: number;
};

type Placements = {
    a: PlacementScores;
    b: PlacementScores;
    c: PlacementScores;
    d: PlacementScores;
};
export const getData = async (): Promise<{ scores: Placements } | []> => {
    try {
        const votingCollection = collection(db, 'Badeklubben/badeklubben/votes');
        const q = query(votingCollection);
        const querySnapshot = await getDocs(q);

        const uniqueUsers = new Map<string, UserData>();
        querySnapshot.docs.forEach(doc => {
            const data = doc.data() as UserData; // Cast til UserData
            if (!uniqueUsers.has(data.userId)) {
                uniqueUsers.set(data.userId, {
                    ...data
                });
            }
        });

        const dataList = Array.from(uniqueUsers.values());

        const placements: Placements = {
            a: {1: 0, 2: 0, 3: 0, 4: 0},
            b: {1: 0, 2: 0, 3: 0, 4: 0},
            c: {1: 0, 2: 0, 3: 0, 4: 0},
            d: {1: 0, 2: 0, 3: 0, 4: 0}
        };

        dataList.forEach(user => {
            if (user.votes && Array.isArray(user.votes)) {
                user.votes.forEach((position: number, index: number) => {
                    const objectNames: (keyof Placements)[] = ['a', 'b', 'c', 'd']; // Spesifiserer at elementene er nøkler i Placements
                    const objectName = objectNames[index];
                    placements[objectName][position as keyof PlacementScores]++;
                });
            }
        });

        return {scores: placements};

    } catch (error) {
        console.error("Feil ved henting av data:", error);
        return [];
    }
};
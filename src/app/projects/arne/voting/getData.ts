import {collection, getDocs, query} from "firebase/firestore";
import {db} from "./config/firebase_a";
import {apartments, votingRound} from "./apartments";

type UserData = {
    id: string;
    userId: string;
    votes: number[];
};

type PlacementScores = { [rank: number]: number };
type Placements = { [name: string]: PlacementScores };

export const getData = async (): Promise<{ scores: Placements } | []> => {
    try {
        const votingCollection = collection(db, `Badeklubben/badeklubben/votes-${votingRound}`);
        const q = query(votingCollection);
        const querySnapshot = await getDocs(q);

        const uniqueUsers = new Map<string, UserData>();
        querySnapshot.docs.forEach(doc => {
            const data = doc.data() as UserData;
            if (!uniqueUsers.has(data.userId)) {
                uniqueUsers.set(data.userId, {
                    ...data
                });
            }
        });

        const dataList = Array.from(uniqueUsers.values());

        const placements: Placements = {};
        apartments.forEach(apt => {
            const scores: PlacementScores = {};
            for (let r = 1; r <= apartments.length; r++) {
                scores[r] = 0;
            }
            placements[apt.name] = scores;
        });

        const objectNames = apartments.map(a => a.name);

        dataList.forEach(user => {
            if (user.votes && Array.isArray(user.votes)) {
                user.votes.forEach((position: number, index: number) => {
                    const objectName = objectNames[index];
                    if (objectName && placements[objectName] && position >= 1 && position <= apartments.length) {
                        placements[objectName][position]++;
                    }
                });
            }
        });

        return {scores: placements};

    } catch (error) {
        console.error("Feil ved henting av data:", error);
        return [];
    }
};

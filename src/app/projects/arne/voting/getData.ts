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

export const getData = async (unavailableIds: number[] = []): Promise<{ scores: Placements } | []> => {
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

        const availableApts = apartments.filter(a => !unavailableIds.includes(a.id));

        const placements: Placements = {};
        availableApts.forEach(apt => {
            const scores: PlacementScores = {};
            for (let r = 1; r <= availableApts.length; r++) {
                scores[r] = 0;
            }
            placements[apt.name] = scores;
        });

        dataList.forEach(user => {
            if (!user.votes || !Array.isArray(user.votes)) return;

            const validEntries = apartments
                .map((apt, i) => ({ name: apt.name, rank: user.votes[i], isUnavailable: unavailableIds.includes(apt.id) }))
                .filter(e => !e.isUnavailable && e.rank > 0)
                .sort((a, b) => a.rank - b.rank);

            validEntries.forEach((entry, i) => {
                const bumped = i + 1;
                if (placements[entry.name] && bumped <= availableApts.length) {
                    placements[entry.name][bumped]++;
                }
            });
        });

        return {scores: placements};

    } catch (error) {
        console.error("Feil ved henting av data:", error);
        return [];
    }
};

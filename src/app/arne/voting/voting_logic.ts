// pages/api/submitVote.ts
import type { NextApiRequest, NextApiResponse } from 'next';

import { collection, addDoc } from 'firebase/firestore';
import {db} from "@/app/arne/config/firebase_a";
import {Vote} from "@/app/arne/voting/vote";


export default async (req: NextApiRequest, res: NextApiResponse) => {
    if (req.method === 'POST') {
        try {
            const vote = req.body as Vote;  // Anta at body inneholder et Vote objekt
            await addDoc(collection(db, 'Badeklubben/badeklubben/votes'), {
                userId: vote.userId,
                votes: vote.votes,
                timestamp: new Date()
            });
            res.status(200).json({ message: 'Stemme registrert!' });
        } catch (error) {
            console.error('Feil ved lagring av stemme:', error);
            res.status(500).json({ error: 'Noe gikk galt under lagring av stemmen' });
        }
    } else {
        res.setHeader('Allow', ['POST']);
        res.status(405).json({ error: 'Metode ikke tillatt' });
    }
};
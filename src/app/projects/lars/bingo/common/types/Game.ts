import { FieldValue } from "firebase/firestore";

export interface Game {
    id?: string;
    title: string;
    userId: string;
    timestamp: FieldValue;
    icon: number;
    values: string[];
    gameCode: string,
    open: boolean;
    locked: boolean;
}
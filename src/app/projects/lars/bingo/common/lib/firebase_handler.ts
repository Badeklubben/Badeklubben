import {auth, db } from "../config/firebase";
import { doc, setDoc, getDoc,getDocs, serverTimestamp, collection, query, where, updateDoc, addDoc, deleteDoc } from 'firebase/firestore';
import { Game } from "../types/Game";


const generateRandomString = (length:number) => {
    const characters = 'abcdefghijklmnopqrstuvwxyz0123456789';
    let result = '';
    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * characters.length);
        result += characters[randomIndex];
    }
    return result; 
};

export async function createGame() : Promise<string> {
    return new Promise(async (resolve, reject) => { 
        try {
            if (!auth.currentUser) throw Error("not signed in!");
  
            // Create the game document
            const gameData: Game = {
                title: "default_game_title",
                values: [],
                userId: auth.currentUser.uid,
                icon: 0,
                timestamp: serverTimestamp(),
                gameCode: "",
                open: false,
                locked: false
            };
            
            let ref = await addDoc(collection(db, 'games'), gameData);
            resolve(ref.id);
    
        } catch (error) {
            reject(`Error creating game: ${error}`) 
        }
    });
}



export async function fetchUserGames(): Promise<Game[]> {
    return new Promise(async (resolve, reject) => {
        try {
            if (!auth.currentUser) throw Error("not signed in!");

            const games: Game[] = [];
            const q = query(collection(db, "games"), where("userId", "==", auth.currentUser.uid));
            const querySnapshot = await getDocs(q);
            
            querySnapshot.forEach((doc) => {
                games.push({ id: doc.id, ...doc.data() } as Game);
            });
            
            resolve(games); 
        } catch (error) {
            reject(`Error fetching games: ${error}`);
        }
    });
}



export async function fetchGameById(gameId: string): Promise<Game | null> {
    return new Promise(async (resolve, reject) => {
        try {
            const gameDocRef = doc(db, "games", gameId);
            const gameDoc = await getDoc(gameDocRef);

            if (gameDoc.exists()) {
                resolve({ id: gameDoc.id, ...gameDoc.data() } as Game);
            } else {
                resolve(null);
            }
        } catch (error) {
            reject(`Error fetching game: ${error}`);
        }
    });
}


export async function deleteGame(gameId: string):  Promise<void>{
    return new Promise(async (resolve, reject) => {
        try {
            const gameDocRef = doc(db, "games", gameId);
            await deleteDoc(gameDocRef);
            resolve();
        
        } catch (error) {
            reject(`Error deleting game: ${error}`);
        }
    });
}

export async function updateGame(gameId: string, updatedGame: Partial<Game>): Promise<void> {
    return new Promise(async (resolve, reject) => {
        try {
            const gameDocRef = doc(db, "games", gameId);
            await updateDoc(gameDocRef, updatedGame);
            resolve();
        } catch (error) {
            reject(`Error updating game: ${error}`);
        }
    });
}

export async function toggleGameOpen(gameId: string, game: Partial<Game>, open: boolean): Promise<void> {
    return new Promise(async (resolve, reject) => {
        try {
            const gameDocRef = doc(db, "games", gameId);
            await updateDoc(gameDocRef, {...game, open: open, gameCode: generateRandomString(5)});
            resolve();
        } catch (error) {
            reject(`Error updating game: ${error}`);
        }
    });
}

export async function getGameByCode(gameCode: string): Promise<Game> {
    return new Promise(async (resolve, reject) => {
        try {
            const q = query(collection(db, "games"), where("gameCode", "==", gameCode));
            const querySnapshot = await getDocs(q);
            
            if (querySnapshot.empty) throw Error("No game with that code!");
            
            resolve(querySnapshot.docs[0].data() as Game); 
        } catch (error) {
            reject(`Error fetching game: ${error}`);
        }
    });
}

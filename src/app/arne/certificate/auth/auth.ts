import {useEffect, useState} from 'react';
import {auth} from '../firebase/fb_config';
import {onAuthStateChanged, signInWithEmailAndPassword, signOut, User} from 'firebase/auth';

export const login = async (email: string, password: string): Promise<void> => {
    try {
        await signInWithEmailAndPassword(auth, email, password);
    } catch (error) {
        console.error(error);
        alert("Login failed: " + (error as Error).message);
    }
};

export const logout = async (): Promise<void> => {
    await signOut(auth);
};

export const useAuth = (): User | null => {
    const [currentUser, setCurrentUser] = useState<User | null>(null);
    useEffect(() => {
        return onAuthStateChanged(auth, user => {
            setCurrentUser(user);
        });
    }, []);
    return currentUser;
};
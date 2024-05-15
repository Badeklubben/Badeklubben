import {useState, useEffect} from 'react';
import {auth} from './fb_config';
import {
    signInWithEmailAndPassword,
    onAuthStateChanged,
    signOut,
    User
} from 'firebase/auth';

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
        const unsubscribe = onAuthStateChanged(auth, user => {
            setCurrentUser(user);
        });
        return unsubscribe; // Unsubscribe on unmount
    }, []);
    return currentUser;
};
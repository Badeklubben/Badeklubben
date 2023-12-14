'use client'
import { useEffect, useState } from 'react';
import app from '../lib/firebase.js';
import { getAuth, onAuthStateChanged, signOut, User } from 'firebase/auth'; // Added User type import
import { useRouter } from 'next/navigation';

const Welcome = () => {
    const [user, setUser] = useState<null | User>(null); // Added null | User type for user state

    const router = useRouter();
 
    const handleLogout = () => {               
        signOut(getAuth(app)).then(() => {
        // Sign-out successful.
            router.push('/stian/brygging/');
        }).catch((error) => {
        // An error happened.
        });
    }

    useEffect(() => {
        const auth = getAuth(app);
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user);
            } else {
                router.push('/stian/brygging/');
            }
        });

        return () => unsubscribe();
    }, [router]);

    return (
        user ? 
    <>
        <button onClick={handleLogout}>Log out</button>
        <h1>Welcome</h1>
        <div>Test</div>
    </> 
    : 
    <>Please log in</>
    );
};

export default Welcome;

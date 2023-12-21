"use client";
import React, { createContext, useContext, useEffect, useState } from "react";
import {
    createUserWithEmailAndPassword,
    onAuthStateChanged,
    signInWithEmailAndPassword,
    signOut,
    GoogleAuthProvider,
    signInWithPopup,
} from "firebase/auth";
import { auth } from "../config/firebase";
import { useRouter } from "next/navigation";

// User data type interface
interface UserType {
    email: string | null;
    uid: string | null;
}

// Create auth context
const AuthContext = createContext({});

// Make auth context available across the app by exporting it
export const useAuth = () => useContext<any>(AuthContext);

// Create the auth context provider
export const AuthContextProvider = ({
    children,
}: {
    children: React.ReactNode;
}) => {
    // Define the constants for the user and loading state
    const [user, setUser] = useState<UserType>({ email: null, uid: null });
    const [loading, setLoading] = useState<Boolean>(true);

    const router = useRouter();

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser({
                    email: user.email,
                    uid: user.uid,
                });
            } else {
                router.push("/stian/brygging");
                setUser({ email: null, uid: null });
            }
        });

        setLoading(false);

        return () => unsubscribe();
    }, [auth, router]);

    // Sign up the user
    const signUp = (email: string, password: string) => {
        return createUserWithEmailAndPassword(auth, email, password);
    };

    // Login the user
    const logIn = (email: string, password: string) => {
        return signInWithEmailAndPassword(auth, email, password);
    };

    //Login using google
    const googleLogin = () => {
        const provider = new GoogleAuthProvider();
        return signInWithPopup(auth, provider);
    };

    // Logout the user
    const logOut = async () => {
        setUser({ email: null, uid: null });
        return await signOut(auth);
    };

    // Wrap the children with the context provider
    return (
        <AuthContext.Provider
            value={{ user, signUp, logIn, logOut, googleLogin }}
        >
            {loading ? null : children}
        </AuthContext.Provider>
    );
};

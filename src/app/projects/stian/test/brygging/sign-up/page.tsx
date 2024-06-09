"use client";
import React, { useState } from "react";
import { useAuth } from "../lib/authentication";
import { useRouter } from "next/navigation";
import Backbutton from "../../ui/back-button";

export default function SignUp() {
    const [email, setEmail] = useState<string>("");
    const [password, setPassword] = useState<string>("");

    const router = useRouter();
    const { signUp } = useAuth();

    const handleSignup = async () => {
        try {
            await signUp(email, password);
            router.push("/stian/brygging");
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <div>
            <Backbutton />
            <h1>This is the Sign up page</h1>
            <input
                type="text"
                placeholder="Email"
                onChange={(e) => setEmail(e.target.value)}
            />
            <input
                type="password"
                placeholder="Password"
                onChange={(e) => setPassword(e.target.value)}
            />
            <button onClick={handleSignup}>Sign up</button>
        </div>
    );
}

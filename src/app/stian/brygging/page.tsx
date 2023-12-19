"use client";
import Link from "next/link";
import "./ui/main.css";
import Backbutton from "../ui/back-button";
import { useState } from "react";
import { useAuth } from "./lib/authentication";
import { useRouter } from "next/navigation";

export default function Brygging() {
    const [email, setEmail] = useState<string>("");
    const [password, setPassword] = useState<string>("");

    const router = useRouter();
    const { logIn } = useAuth();

    const handleLogin = async (e: any) => {
        e.preventDefault();
        try {
            await logIn(email, password);
            router.push("/stian/brygging/home");
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <div>
            <div>
                <Backbutton />

                <Link href="brygging/sign-up">Sign up</Link>
            </div>

            <h1>This is the Brygging page</h1>

            <form onSubmit={handleLogin}>
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
                <button type="submit">Log in</button>
            </form>
        </div>
    );
}

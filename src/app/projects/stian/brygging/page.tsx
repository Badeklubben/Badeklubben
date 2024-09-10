"use client";
import Backbutton from "../lotteri/ui/back-button";
import { useState } from "react";
import { useAuth } from "./lib/authentication";
import { useRouter } from "next/navigation";

export default function Brygging() {
    const [email, setEmail] = useState<string>("");
    const [password, setPassword] = useState<string>("");

    const router = useRouter();
    const { logIn, googleLogin } = useAuth();

    const handleLogin = async (e: any) => {
        e.preventDefault();
        try {
            await logIn(email, password);
            router.push("../stian/brygging/home");
        } catch (error) {
            console.error(error);
        }
    };

    const handleGoogle = async (e: any) => {
        e.preventDefault();
        try {
            await googleLogin();
            router.push("../stian/brygging/home");
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <div className="body">
            <div className="navbar">
                <ul>
                    <li>
                        <Backbutton />
                    </li>
                </ul>
                <ul>
                    <li>
                        <button
                            className="new-button"
                            onClick={() =>
                                router.push("../stian/brygging/sign-up")
                            }
                        >
                            Sign up
                        </button>
                    </li>
                </ul>
            </div>

            <h1>Bryggeskjema</h1>

            <form onSubmit={handleLogin} className="login-container">
                <label>E-mail</label>
                <input
                    type="text"
                    placeholder="Email"
                    onChange={(e) => setEmail(e.target.value)}
                />
                <label>Password</label>
                <input
                    type="password"
                    placeholder="Password"
                    onChange={(e) => setPassword(e.target.value)}
                />
                <div>
                    <button type="submit" className="login-btn">
                        Log in
                    </button>
                    <button onClick={handleGoogle}>Login with Google</button>
                </div>
            </form>
        </div>
    );
}

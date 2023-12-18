'use client'
import Link from "next/link";
import "./ui/main.css"
import Backbutton from "../ui/back-button";
import { useState } from "react";
import { useAuth } from "./lib/authentication";


export default function Brygging() {

    const [email, setEmail] = useState<string>("")
    const [password, setPassword] = useState<string>("")

    const { logIn } = useAuth();

    const handleLogin = async () => {
        try {
            await logIn(email, password)
        } catch (error) {
            console.error(error);
        }
    }

    
    return (
        <div>
            <div>
                <Backbutton/>

                <Link href="/sig-up">
                    Sign up
                </Link>

            </div> 

            <div>
                <input type="text" placeholder="Email" />
                <input type="password" placeholder="Password" />
                <button onClick={handleLogin}>Log in</button>
            </div>

            <h1>This is the Brygging page</h1>


        </div>
    );
}
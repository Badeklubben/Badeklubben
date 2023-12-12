'use client'
import Link from "next/link";
import "./ui/main.css"


export default function Brygging() {

    
    return (
        <div>
        <h1>This is the Brygging page</h1>
        <Link href="/stian/brygging/sign-up">
            <p>Sign up</p>
        </Link>
        </div>
    );
}
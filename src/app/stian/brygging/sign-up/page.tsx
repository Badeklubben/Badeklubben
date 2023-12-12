'use client'
import { useState } from 'react';
import app from '../lib/firebase.js';
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';
import Link from 'next/link';

const SignUp = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSignUp = () => {
        const auth = getAuth(app);
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                // Signed up successfully
            })
            .catch((error) => {
                // Handle errors here
            });
    };

    return (
        <div>
            <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
            <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
            <button onClick={handleSignUp}>Sign Up</button>
            <Link href="/stian/brygging/sign-in">Already have an account? Sign In</Link>
        </div>
    );
};

export default SignUp;

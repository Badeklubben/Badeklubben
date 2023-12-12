'use client'
import { useState } from 'react';
import app from '../lib/firebase.js'
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

const SignIn = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const router = useRouter();

    const handleSignIn = () => {
        const auth = getAuth(app);
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                // Signed in successfully
                router.push('/stian/brygging/welcome');
            })
            .catch((error) => {
                // Handle errors here
            });
    };

    return (
        <div>
            <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
            <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
            <button onClick={handleSignIn}>Sign In</button>
            <Link href="/stian/brygging/sign-up">Dont have an account? Sign Up</Link>
        </div>
    );
};

export default SignIn;

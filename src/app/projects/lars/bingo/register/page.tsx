"use client";
import { useEffect, useState } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../common/config/firebase";
import { useRouter } from "next/navigation";

import '../style.css';
import { FirebaseError } from "firebase/app";

export default function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string>('');
  const router = useRouter();

  const handleRegister = async (e: React.FormEvent) => {
    e.preventDefault();
    createUserWithEmailAndPassword(auth, email, password).then(() => {
        router.push("/projects/lars/bingo/dashboard");
    }).catch((err: FirebaseError) => {
        setError(err.message);
    })
  };

  const onSigninSubmit = () => {
    router.push(`/projects/lars/bingo/signin`);
  }

  useEffect(() => {
    setError('');
  }, [password, email])

  return (

    <div className="bingo-container">
        <div className='bingo-floater'>
            <div className='bingo-title'>Register!</div>
            <div className='game-code'> 
                <div className='code-err'>{error}</div>
            </div>
            <form onSubmit={handleRegister} className="bingo-prompt v">
            <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Email"
                required
            />
            <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Password"
                required
            />
            <button type="submit">Register</button>
            </form>
    
            <button className='bingo-option' onClick={onSigninSubmit}>.. or sign in with an existing user!</button>
        </div>
    </div>
  );
};


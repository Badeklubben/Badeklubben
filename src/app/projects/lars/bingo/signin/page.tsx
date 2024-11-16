"use client";
import { useEffect, useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../common/config/firebase";
import { useRouter } from "next/navigation";

import '../style.css';
import { FirebaseError } from "firebase/app";

export default function SignIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string>('');
  const router = useRouter();

  const handleSignIn = (e: React.FormEvent) => {
    e.preventDefault();
    signInWithEmailAndPassword(auth, email, password).then(() => {
        router.push("/projects/lars/bingo/dashboard");
    }).catch((err: FirebaseError) => {
      if (err.code == 'auth/invalid-credential') {
        setError("Invalid username or password!")
      }
      else setError(err.message);
    })
  };

  const onRegisterSubmit = () => {
    router.push(`/projects/lars/bingo/register`);
  }

  useEffect(() => {
    setError('');
  }, [password, email])

  return (
    <div className="bingo-container">
        <div className='bingo-floater'>
            <div className='bingo-title'>Sign in!</div>
            <div className='game-code'> 
                <div className='code-err'>{error}</div>
            </div>
            <form onSubmit={handleSignIn} className="bingo-prompt v">
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
              <button type="submit">Sign In</button>
            </form>
     
            <button className='bingo-option' onClick={onRegisterSubmit}>.. or register a new user!</button>
        </div>
    </div>
  );
};


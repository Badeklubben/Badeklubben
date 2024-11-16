"use client"
import { useEffect, useState } from "react";
import Link from "next/link";
import "./style.css";
import { auth } from "../config/firebase";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { useRouter } from "next/navigation";

const BurgerMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isloggedIn, setIsLoggedIn] = useState(false);

  const router = useRouter();

  const toggleMenu = () => {
    setIsOpen((prev) => !prev);
  };


  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (!user) {
        setIsLoggedIn(false);
      } else {
        setIsLoggedIn(true);
      }
    });
    
    return () => unsubscribe();
  }, [router]);

  return (
    <div className="burgerMenu">
      <button onClick={toggleMenu} className="burgerButton">
        &#9776;
      </button>
      {isOpen && (
            <div className="menu">
                {isloggedIn ? auth.currentUser?.email : "You are not signed in "}
                <Link href="/projects/lars/bingo" onClick={() => setIsOpen(false)}>Play</Link>
                <Link href="/projects/lars/bingo/dashboard" onClick={() => setIsOpen(false)}>My dashboard</Link>
                {isloggedIn ? 
                        <Link href="/projects/lars/bingo" onClick={() => {setIsOpen(false); signOut(auth)}}>Sign out</Link> :
                        <Link href="/projects/lars/bingo/signin" onClick={() => setIsOpen(false)}>Sign In</Link>}
            </div>
      )}
    </div>
  );
};

export default BurgerMenu;
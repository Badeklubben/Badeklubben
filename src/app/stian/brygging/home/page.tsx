'use client'
import { use, useEffect } from 'react';
import { useAuth } from '../lib/authentication';

export default function Home() {

    const { logOut } = useAuth();

    const handleLogOut = async () => {
        try {
            await logOut();

        } catch (error) {
            console.error(error);
        }
    }

    useEffect(() => {
        console.log("Home page")
    }, [])


    return (
        <div>
            <button onClick={() => {handleLogOut}}>Logout</button>
            Welcome to the Brygging app!
        </div>
    )
}
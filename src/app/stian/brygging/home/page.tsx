'use client'
import { useEffect } from 'react';

export default function Home() {


    useEffect(() => {
        console.log("Home page")
    }, [])


    return (
        <div>
            Welcome to the Brygging app!
        </div>
    )
}
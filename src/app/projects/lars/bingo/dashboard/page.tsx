'use client';
import '../style.css'
import ProtectedRoute from '../common/components/ProtectedRoute';
import { createGame, fetchUserGames } from '../common/lib/firebase_handler';
import { useEffect, useId, useState } from 'react';
import { auth } from '../common/config/firebase';
import { onAuthStateChanged } from 'firebase/auth';
import { useRouter } from 'next/navigation';

export default function Game() {
    const [myGames, setMyGames] = useState<{title:string, id: string}[]>([]);
    const [error, setError] = useState<string>('');
    const router = useRouter();

    const createNew = () => {
        createGame().then((newGameId) => {
            router.push(`/projects/lars/bingo/dashboard/edit?gid=${newGameId}`);
            setError('');
        }).catch((err) => {
            setError(err);
        })
    }

    const goTo = (gameId: string) => {
        router.push(`/projects/lars/bingo/dashboard/edit?gid=${gameId}`);
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            fetchUserGames().then((games) => {
                setMyGames(() => games as {title:string, id: string}[])     
            }); 
          });     
         return () => unsubscribe();
        
    }, [router])

    return (
        <ProtectedRoute>

                    <div className='bingo-title'>Dashboard</div>
                    <div className='game-code'> 
                        <button className='bingo-option' onClick={createNew}>Create a new game</button>
                        <div className='code-err'>{error}</div>
                    </div>
                    <div className='bingo-prompt'>My games</div>
                    {myGames.map((game) => <button key={game.id} className='bingo-option' onClick={() => goTo(game.id)}>{game.title}</button>)}
     
        </ProtectedRoute>
    );
}


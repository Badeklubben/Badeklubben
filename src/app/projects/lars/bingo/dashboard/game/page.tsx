'use client';

import { useSearchParams } from 'next/navigation';
import '../../style.css';
import { useEffect, useState } from 'react';
import ProtectedRoute from '../../common/components/ProtectedRoute';
import { useRouter } from 'next/navigation';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from '../../common/config/firebase';
import { fetchGameById, toggleGameOpen, updateGame } from '../../common/lib/firebase_handler';
import { Game } from '../../common/types/Game';

export default function DashGame() {
    const [game,setGame] = useState<Game|null>();
    const [error, setError] = useState<string>('');
    const router = useRouter();
    const searchParams = useSearchParams();






    const handleEnd = () => {
        if (!game) return;
        toggleGameOpen(game.id!,game, false);
        router.push(`/projects/lars/bingo/dashboard/edit?gid=${game.id}`);
    }

    const handleLock = () => {
        if (!game) return;
        setGame((prev) => {
            if (!prev) return;
            return {
                ...prev,
                locked: !prev.locked
            };
        });
    }

    useEffect(() => {
        const gameId = searchParams.get('gid');
        if (!gameId){
            router.push("/projects/lars/bingo/dashboard");
            return;
        }

        const unsubscribe = onAuthStateChanged(auth, (user) => {
            fetchGameById(gameId).then((game) => {
                if (!game || game.userId != auth.currentUser?.uid){
                    router.push("/projects/lars/bingo/dashboard");
                }
                setGame(game);   
            }).catch((err) => {
                router.push("/projects/lars/bingo/dashboard");
            }); 
          });     
         return () => unsubscribe();
        
    }, [router])

    useEffect(() => {
        if (!game) return;
        updateGame(game.id!, game).catch((err) => {
            setError(err); 
        })
    }, [game])


    return (
        game && <ProtectedRoute>
      
       
                <div className='bingo-title-max'>{game.title}</div>
          
                <div className='code-err'>{error}</div>

                <div style={{fontWeight:'bolder', fontSize:'300%'}}>{game.gameCode}</div>

                {/**<button className='bingo-option' onClick={handleLock} >{game.locked ? "Unlock boards": "Lock boards"}</button> */}
                <button className='bingo-option' style={{paddingTop:'20px'}} onClick={handleEnd}>End game</button>
          

        </ProtectedRoute>
    );
}


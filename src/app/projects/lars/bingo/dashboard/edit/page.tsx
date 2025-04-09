'use client';

import { useSearchParams } from 'next/navigation';
import '../../style.css';
import { useEffect, useState } from 'react';
import ProtectedRoute from '../../common/components/ProtectedRoute';
import { useRouter } from 'next/navigation';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from '../../common/config/firebase';
import { deleteGame, fetchGameById, toggleGameOpen, updateGame } from '../../common/lib/firebase_handler';
import { Game } from '../../common/types/Game';
import IconSelector from '../../common/components/IconSelector';

export default function Edit() {
    const [game,setGame] = useState<Game|null>();
    const [prompt, setPrompt] = useState<string>('');
    const [error, setError] = useState<string>('');
    const router = useRouter();
    const searchParams = useSearchParams();

    const iconChange = (icon: number) => {
        setGame((prev) => {
            if (!prev) return;
            return {
                ...prev,
                icon: icon
            }
        })
        setError('');
    }

    const handleChange = (value: string) => {
        setPrompt(value); 
        setError('');
    };

    const newPrompt = (event: React.KeyboardEvent<HTMLInputElement>) => {
        if (event.key === 'Enter' && prompt.length > 0) {
            
            setGame((prev) => {
                if (!prev) return;
                return {
                    ...prev,
                    values: [...prev.values, prompt]
                }
            })
            setPrompt(prev => '');
        }
    }

    const handlePromptClick = (prompt: string) => {
        if (!game) return;
        const confirmed = window.confirm("Are you sure you want to permanently delete the following prompt: " + prompt);
        if (!confirmed) return;
        setGame((prev) => {
            if (!prev) return;
            return {
                ...prev,
                values: prev.values.filter(value => value !== prompt)
            };
        });
    }

    const handleTitleClick = () => {
        if (!game) return;
        const newTitle = window.prompt("Set new title", game.title);
        if (!newTitle || newTitle === game.title) return;
        setGame((prev) => {
            if (!prev) return;
            return {
                ...prev,
                title: newTitle
            };
        });
        setError('');
    }

    const handleDelete = () => {
        if (!game) return;
        const confirmed = window.confirm("Are you sure you want to permanently delete this game and all its prompts? This can not be undone.");
        if (!confirmed) return;
        deleteGame(game.id!).then(() => {
            router.push("/projects/lars/bingo/dashboard");
        }).catch((err) => {
            setError(err);  
        })
    }

    const handleStart = () => {
        if (!game) return;
        if (game.values.length < 24) {
            setError("You cannot start a game with less than 24 prompts!");
            return;
        }
        toggleGameOpen(game.id!,game, true);
        router.push(`/projects/lars/bingo/dashboard/game?gid=${game.id}`);
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
                setGame({...game, open: false} as Game);   
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
            <button className='bingo-title-max' onClick={handleTitleClick}>{game.title}</button>
            <div className='code-err'>{error}</div>
            <button className='bingo-option' onClick={handleDelete}>Delete game</button>
            <div className='bingo-row'>
                <input 
                    type="text"
                    maxLength={45}
                    className='bingo-input' 
                    placeholder='New Prompt'
                    value={prompt}
                    onChange={(e) => handleChange(e.target.value)}
                    onKeyDown={(e) => newPrompt(e)}
                />
                <IconSelector onIconChange={iconChange} icon={game.icon}></IconSelector>
            </div>
            <div className='bingo-prompt-container'>
                {game.values.map((val,idx) => 
                    <button key={idx + val} className='bingo-prompt-box' onClick={() => handlePromptClick(val)}>{val}</button>
                )}
            </div>
            <button className='bingo-option' onClick={handleStart}>Start game!</button>
       
        </ProtectedRoute>
    );
}


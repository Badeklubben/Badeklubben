'use client';
import {useEffect, useRef, useState } from 'react';
import { FaRegHandPointRight,FaRegHandPointLeft } from "react-icons/fa6";

import './style.css';
import CodeInput from './common/components/CodeInput';
import { getGameByCode } from './common/lib/firebase_handler';
import { useRouter } from 'next/navigation';

const codeLength = 5;

export default function Bingo() {
    const router = useRouter();

    const [gameCode, setGameCode] = useState<string>('');
    const [ready, setReady] = useState<boolean>(false);
    const [error, setError] = useState<string>('');
    const prompt = useRef<HTMLButtonElement|null>(null);

    const onCodeUpdate = (updatedCode:string) => {
        setGameCode(prev => updatedCode);
        setReady(prev => updatedCode.length == codeLength);
        setError(''); 
    }


    const onCodeSubmit = (updatedCode:string) => {
        console.log(updatedCode);
        getGameByCode(updatedCode).then((data) => {
            router.push(`/projects/lars/bingo/game?gid=${data.id}`);
        }).catch((err) => {
            setError(err);            
        });
    }

    const onHostSubmit = () => {
        router.push(`/projects/lars/bingo/dashboard`);
    }



    return (
            <>
                <div className='bingo-title'>Bingo!</div>
                <div className='game-code'> 
                    <CodeInput codeLength={codeLength} onCodeChange={onCodeUpdate} onCodeSubmit={onCodeSubmit}/>
                    <div className='code-err'>{error}</div>
                </div>
                <button className='bingo-prompt' onClick={(e) => onCodeSubmit(gameCode)} disabled={!ready} ref={prompt}>
                    {ready && <FaRegHandPointRight />}
                    {ready ? 'Join!' : 'Enter a game code..'}
                    {ready && <FaRegHandPointLeft />}
                </button>
                <button className='bingo-option' onClick={onHostSubmit}>.. or host a new game!</button>
            </>
    );
}
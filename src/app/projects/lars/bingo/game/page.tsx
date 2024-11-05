'use client';

import { useSearchParams } from 'next/navigation';
import '../style.css';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { onAuthStateChanged } from 'firebase/auth';
import { Game } from '../common/types/Game';
import { fetchGameById } from '../common/lib/firebase_handler';
import { auth } from '../common/config/firebase';
import { icons } from '../common/components/IconSelector';
import { loadData, saveData } from '../common/lib/local_storage';

const shuffle = (length: number) => { 
    const array = [...Array(length).keys()]
    for (let i = array.length - 1; i > 0; i--) { 
      const j = Math.floor(Math.random() * (i + 1)); 
      [array[i], array[j]] = [array[j], array[i]]; 
    } 
    return array; 
}; 

export default function MainGame() {
    const [game,setGame] = useState<Game|null>();
    const [prompts,setPrompts] = useState<number[]>([]);
    const [checked,setChecked] = useState<boolean[]>([]);
    const router = useRouter();
    const searchParams = useSearchParams();
    const gridArray = Array(5).fill(null).map(() => Array(5).fill(null));

    const check = (index:number) => {
        const updatedItems = [...checked];
        updatedItems[index] = !checked[index];
        setChecked(updatedItems);
    };



    useEffect(() => {
        const gameId = searchParams.get('gid');
        if (!gameId){
            router.push("/projects/lars/bingo");
            return;
        }

        const unsubscribe = onAuthStateChanged(auth, (user) => {
            fetchGameById(gameId).then((game) => {
                if (!game || !game.open) {
                    router.push("/projects/lars/bingo");
                }
                setGame(game);  
                const data = loadData<number[]>('props');
                const data2 = loadData<number[]>('check');
                setPrompts(data || shuffle(game!.values.length)); 
                setChecked(data2 || new Array(25).fill(false)); 
            }).catch((err) => {
                router.push("/projects/lars/bingo");
            }); 
          });     
         return () => unsubscribe();
        
    }, [router])


    useEffect(() => {
        if (prompts.length == 0 || checked.length == 0) return;
        saveData('props', prompts);
        saveData('check', checked);
    },[prompts, checked])


    return (
        game && <>
            <div className='bingo-title-max'>{game.title}</div>
            <div className='bingo-prompt-container noscroll'>
            {gridArray.map((row,y) => 
                row.map((val,x) => {
                    if (x === 2 && y === 2) return <div style={{backgroundColor:'rosybrown', fontSize:'200%'}} className='bingo-prompt-box small'>{icons[game.icon]}</div>
                    return <button 
                        className='bingo-prompt-box small' 
                        style={{backgroundColor:checked[x + (y*5)] ? 'rosybrown' : ''}}
                        onClick={() => check(x + (y*5))}>
                            {game.values[prompts[x + (y*5)]]}
                        </button>
                } 
                )
            )}
        </div>
        </>
    );
}




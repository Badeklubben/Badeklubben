'use client';
import { MouseEvent, useEffect, useState } from 'react';
import './style.css';
import Image from 'next/image';
import gif from './trump-dance.gif';

interface CardState {
    [key: number]: null | string;
}

interface CheckedState {
    [key: number]: boolean;
}

interface TotalState {
    card: CardState;
    check: CheckedState;
}

const saveData = (card: CardState, check: CheckedState) => {
    const total:TotalState = {card: card, check: check};
    const jsonData = JSON.stringify(total);
    if (typeof window !== "undefined" && window.localStorage) {
        localStorage.setItem("data", jsonData);
    }
};
  
const loadData = () : TotalState | null => {
    if (typeof window !== 'undefined' && window.localStorage) {
        const jsonData = localStorage.getItem('data');
        if (jsonData) return JSON.parse(jsonData) as TotalState;
    }
    return null;
};


export default function Bingo() {

    const prompts = [
        "Trump interupts a moderator",
        "Kamala mentions 'Convicted Felon'",
        "I am speaking!",
        "Kamala interrupts a moderator",
        "Trump interrupts a Kamala",
        "Kamala interrupts a Trump",
        "Project 2025",
        "Trump is warned by moderators",
        "Pantsuit",
        "Shut up",
        "Covid",
        "Golf",
        "Curses",
        "Reproductive rights",
        "Drill baby, drill!",
        "I get the biggest crowds",
        "Fake news",
        "Someone walks off",
        "Un- precedented",
        "Eye roll",
        "Trump assaination attempt",
        "Assaination attempt?",
        "Hoax",
        "Believe me!",
        "The wall",
        "Forgets name",
        "Jan 6. ",
        "Age",
        "Hunter Biden",
        "Tripping",
        "Witch hunt",
        "Kamala ethnicity"
    ]

    const [card, setCard] = useState<CardState>({
        0 : null,
        1 : null,
        2 : null,
        3 : null,
        4 : null,
        5 : null,
        6 : null,
        7 : null,
        8 : null,
        9 : null,
        10 : null,
        11 : null,
        12 : "meme",
        13 : null,
        14 : null,
        15 : null,
        16 : null,
        17 : null,
        18 : null,
        19 : null,
        20 : null,
        21 : null,
        22 : null,
        23 : null,
        24 : null,
    });

    const [checked, setChecked] = useState<CheckedState>({
        0 : false,
        1 : false,
        2 : false,
        3 : false,
        4 : false,
        5 : false,
        6 : false,
        7 : false,
        8 : false,
        9 : false,
        10 : false,
        11 : false,
        12 : false,
        13 : false,
        14 : false,
        15 : false,
        16 : false,
        17 : false,
        18 : false,
        19 : false,
        20 : false,
        21 : false,
        22 : false,
        23 : false,
        24 : false,
    });

    const [selecting, setSelecting] = useState(-1);
    const [playing, setPlaying] = useState(false);
    const [isLoaded, setIsLoaded] = useState(false);

    useEffect(() => {
        const data = loadData();
        if (data) {
            setCard(prev => data.card);
            setChecked(prev=> data.check);
            setIsLoaded(prev => true);
        }
    }, [])

    const select = (e:MouseEvent, idx:number) => {
        e.stopPropagation()
        setSelecting((prev) => idx);
    }

    const pick = (val: string) => {
        setCard((prev) =>{
            return {
                ...prev,
                [selecting]: val
            }
        });
        setSelecting((prev) => -1);
    }

    useEffect(() => {
        if (!isLoaded) return;
        saveData(card,checked);
    }, [checked,card])



    return (
        <div className="container">
            <div className='Title'>Election Bingo 2024</div>
            <div className="board">
                {Object.entries(card).map((tile, i) => {
                    return <div key={i} className='tile' onClick={(e) => i != 12 && (playing ? setChecked((prev) => {return {...prev, [i]: !prev[i]}}) : select(e,i))}>
                        <div className='inner' style={{backgroundColor:checked[i] ? '#E81B23' : ''}}>
                        {i == 12 && 
                            <Image alt='Free!' width={150} height={150} src={gif}></Image> ||
                            <div>{tile[1] || "Add!"}</div>
                        }
                        </div>
                    </div>
                })}
            </div>
            <div className='toggle' onClick={(e) => setPlaying(prev => !prev)}>{playing ? 'edit': 'play'}</div>
            {selecting > -1 && <div className='select-wall'>
                <div className='select'>
                    {prompts.map((prompt,i) => 
                        !Object.values(card).includes(prompt) && <div key={prompt} onClick={(e) => pick(prompt)} className='prompt'>{prompt}</div>
                    )}
                </div>
            </div>}
        </div>
    );
}
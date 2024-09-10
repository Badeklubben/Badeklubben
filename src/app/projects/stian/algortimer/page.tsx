'use client'
import "./style.css";
import {useEffect, useState} from "react";

const count = [
    {name: "Arne", count: 2},
    {name: "Østen", count: 4},
    {name: "Stian", count: 4},
    {name: "Lars", count: 4},
    {name: "Simon", count: 4},
    {name: "Kristian", count: 4},
    {name: "Oskar", count: 4},
    {name: "Bjørn", count: 4},
    {name: "Nico", count: 4},
];

const colors = [
    '#E8557A',
    '#F7995C',
    '#FFD24E',
    '#7AD1DF',
    '#5AC7BD'
];
const mod = (n:number, m:number) => ((n % m) + m) % m;

export default function Algoritmer() {

    const [timeLeft, setTimeLeft] = useState({ hours: 0, minutes: 0, seconds: 0 });
    useEffect(() => {
        const targetTime = new Date();
        targetTime.setUTCHours(8, 15, 0, 0); // 10:15 AM UTC+1 is 9:15 AM UTC

        const updateTimer = () => {
            const now = new Date();
            const difference = targetTime.getTime() - now.getTime();

            const hours = Math.floor(mod(difference / (1000 * 60 * 60), 24));
            const minutes = Math.floor(mod(difference / (1000 * 60), 60));
            const seconds = Math.floor(mod(difference / 1000, 60));
            setTimeLeft({ hours, minutes, seconds });

        };
        console.log("heieieaiafidi");
        const intervalId = setInterval(updateTimer, 1000);
        updateTimer(); // Initial call to set the correct time immediately

        return () => clearInterval(intervalId); // Cleanup interval on component unmount
    }, []);

    return (
        <>
            <div className="algo-container">
                <div className="count-container">
                    <p className="counter-title">The jar of consequence</p>
                    {count.map((user, i) => (
                        <div className="user-count" style={{backgroundColor: colors[i%colors.length]}} key={user.name}>
                            <p>{user.name}</p>
                            <p className="user-count-number">{user.count}</p>
                        </div>
                    ))}
                </div>
                <div className="algo-right">
                    <div className="timer-container">
                        <p className="hour">{timeLeft.hours}</p>
                        <p>:</p>
                        <p className="hour">{timeLeft.minutes}</p>
                        <p>:</p>
                        <p className="hour">{timeLeft.seconds}</p>
                    </div>
                    <div className="message-container">
                        <div className="message-box">
                            <p className="message-title">Tittel på beskjeden</p>
                            <p>Her kjem det beskjedar til heile lesesalen, som for eksempel at det er 10 minutt igjen av
                                pausen. Eller at det er 5 minutt igjen av timen. Eller at det er 5 minutt igjen av timen.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
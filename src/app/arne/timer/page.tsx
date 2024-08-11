'use client'
import DefaultNavbar from "@/app/shared/components/DefaultNavbar";
import Link from "next/link";
import React, {useEffect, useState } from "react";
import { Button, Box} from "@mui/material"
import DefaultTypography from "@/app/shared/components/DefaultTypography";


const startDate: number = 12
const startHour: number = 16
const startMinute: number = 45
const numberOfRounds: number = 13;
const roundDurationMinutes:number = 12;


interface TimeComponents {
    days: number;
    hours: number;
    minutes: number;
}

const parseMinutes = (totalMinutes: number): TimeComponents => {
    const days = Math.floor(totalMinutes / (24 * 60));
    const hours = Math.floor((totalMinutes % (24 * 60)) / 60);
    const minutes = totalMinutes % 60;
    return { days, hours, minutes };
};


const MyComponent: React.FC = () => {
    const [timeLeft, setTimeLeft] = useState<TimeComponents | null>(null);
    const [endTime, setEndtime] = useState<number| null>(null);
    const [roundsText, setRoundsText] = useState<string>("");

    useEffect(() => {
        const calculateTimeLeft = () => {
            const now = new Date();
            const targetTime = new Date();
            targetTime.setMonth(7); // Måneder er 0-indeksert (0 = januar, 9 = oktober)
            targetTime.setDate(startDate);
            targetTime.setHours(startHour);
            targetTime.setMinutes(startMinute);
            const diffMs = targetTime.getTime() - now.getTime();
            const diffMinutes = Math.floor(diffMs / 1000 / 60);
            if (diffMinutes > 0){
                setTimeLeft(parseMinutes(diffMinutes));
            }
            else{
                const roundsPassed = Math.floor(Math.abs(diffMinutes) / 12);
                const minutesUntilNextRound = 12 - (Math.abs(diffMinutes) % 12);
                setRoundsText(String(roundsPassed) + " runder passert. \n" + String(minutesUntilNextRound) + " minutter til neste runde. " )
            }
        };

        calculateTimeLeft();
        const interval = setInterval(calculateTimeLeft, 60 * 1000);
        return () => clearInterval(interval);
    }, []);

    return (
        <Box sx={{
            maxWidth: '80%', // Maks bredde på boksen
            padding: '16px', // Indre marg
            border: '3px solid #ccc', // Kantlinje
            borderRadius: '8px', // Avrundede hjørner
            wordWrap: 'break-word', // Bryt ord som går utenfor boksen
            overflowWrap: 'break-word', // Bryt ord som går utenfor boksen
            whiteSpace: 'pre-line', // Behandle linjeskift i strengen

        }}
        >
            {timeLeft !== null ? (
                <h3>
                    Tid igjen til start: {timeLeft.days} dager, {timeLeft.hours} timer, {timeLeft.minutes} minutter
                </h3>
            ) : (
                <h3>{roundsText}</h3>
            )}
        </Box>
    );
};

export default function Timer() {
    return (
        <Box
        >
            <DefaultTypography fontWeight={700} colorText={"#000"}>Informatikklekene</DefaultTypography>
            <br/>
            <MyComponent></MyComponent>
        </Box>
    );
}
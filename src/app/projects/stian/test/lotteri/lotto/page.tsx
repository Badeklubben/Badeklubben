'use client'

import { useState } from 'react';
import BackButton from '../../ui/back-button';

export default function Lotto() {

    // Getting todays date and formatting it to YYYY-MM-DD for the Default value in the useStates
    let today = new Date();

    function todayFormatted(padding : number) {
        
        let dd = String(today.getDate()).padStart(2, '0') + padding;
        let mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
        let yyyy = today.getFullYear();
        return yyyy + '-' + mm + '-' + dd;
    }
    

    // Definerer datoer som brukes i URL
    //let fromDate: string = "2023-11-04";
    //let toDate: string = "2023-11-26";
    const [fromDate, setFromDate] = useState("2023-11-04");
    const [toDate, setToDate] = useState("2023-11-26");

    // URL som brukes av Norsk Tipping for å hente ut data om tidligere trekninger
    const url: string = `https://api.norsk-tipping.no/LotteryGameInfo/v2/api/results/lotto?fromDate=${fromDate}&toDate=${toDate}`;


    // testing if the submit button works
    function handleSubmit(event: any) {
        event.preventDefault();
        console.log(fromDate, toDate);
    }

    // Sender GET request til norsk tipping api-et og henter ut data om tidligere trekninger mellom datoene brukeren har laget
    // Trenger backend for å hondere mengden data som kommer inn gjennom her
    async function request() {
        await fetch(url)
            .then(response => response.text())
            .then(data => console.log(data));
    }

    return (
        <div>
            <BackButton/>
            <h1>Backend tengs for å hondere denne mengden med data</h1>
            <h1>Tidligere trekninger</h1>
            <p>Her er en liste over tidligere trekninger:</p>
            <form onSubmit={handleSubmit}>
                <label>
                    From:
                    <input type="date" value={fromDate} onChange={(e) => setFromDate(e.target.value)} />
                </label>
                <label>
                    To:
                    <input type="date" value={toDate} onChange={(e) => setToDate(e.target.value)} />
                </label>
                <input type="submit" value="Submit" />
            </form>
            <button onClick={request}>Hent data</button>
        </div>
    );
}
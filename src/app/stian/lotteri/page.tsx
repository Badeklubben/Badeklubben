'use client'
import BackButton from "../ui/back-button";
export default function Lotteri() {
    return (
        <div>
        <BackButton/>
        <h1>Norsk Tipping Lotteridata</h1>
        <div>
            <li>
                <a href="/stian/lotteri/lotto">Lotto</a>
            </li>
            <li>
                <a href="/stian/lotto/viking">Viking Lotto</a>
            </li>
        </div>
        </div>
    );
}
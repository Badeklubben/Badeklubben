'use client'
import { useState, useEffect } from 'react';
import DefaultNavbar from "@/app/shared/components/DefaultNavbar";

const PhoneNumberForm: React.FC = () => {
    const [phoneValue, setPhoneValue] = useState<number>(12345678);
    const [angle, setAngle] = useState<number>(0);
    const [advancedMode, setAdvancedMode] = useState<boolean>(false);
    const [speed, setSpeed] = useState<number>(0);

    const phoneNumberToDisplay = (value: number): string => {
        return `${value.toString().substr(0, 3)} ${value.toString().substr(3, 2)} ${value.toString().substr(5, 3)}`;
    };

    const updatePhone = () => {
        let newAngle = Number(angle);
        let newValue = Number(phoneValue);
        let newSpeed = speed + Math.sin(newAngle * Math.PI / 180) * 40;

        newSpeed *= 0.995;
        newValue += Math.round(newSpeed * 4000);

        if (newValue > 99999999) {
            newValue = 99999999;
            newSpeed *= -1;
        } else if (newValue < 10000000) {
            newValue = 10000000;
            newSpeed *= -1;
        }

        setSpeed(newSpeed);
    };

    useEffect(() => {
        const interval = setInterval(updatePhone, 10);
        return () => clearInterval(interval);
    }, [speed]);

    const handleAdvancedModeChange = () => {
        setAdvancedMode(!advancedMode);
    };

    return (
        <form>
            <DefaultNavbar/>
            <br/>
            <div>Telefonnummer: <span>{phoneNumberToDisplay(phoneValue)}</span></div>
            <input
                type="range"
                min={10000000}
                max={99999999}
                value={phoneValue}
                onChange={(e) => setPhoneValue(Number(e.target.value))}
            />
            <hr />
            <div>
                <input
                    id="advancedMode"
                    type="checkbox"
                    checked={advancedMode}
                    onChange={handleAdvancedModeChange}
                />
                <label htmlFor="advancedMode"> Bruk avansert modus</label>
                {advancedMode && (
                    <input
                        type="range"
                        min={-10}
                        max={10}
                        step={0.2}
                        value={angle}
                        onChange={(e) => setAngle(Number(e.target.value))}
                    />
                )}
            </div>
            <input
                id="submit"
                type="submit"
                value="Send inn"
                onClick={(e) => {
                    e.preventDefault();
                    if (window.confirm(`Er dette nummeret ditt?\n${phoneNumberToDisplay(phoneValue)}`)) {
                        alert('Supert!');
                    } else {
                        alert(`Da må du endre det til: ${phoneNumberToDisplay(phoneValue)}`);
                    }
                }}
            />
        </form>
    );
};

export default PhoneNumberForm;

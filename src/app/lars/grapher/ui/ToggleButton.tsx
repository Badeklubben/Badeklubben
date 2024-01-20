import React, { SetStateAction } from "react";

export default function ToggleButton({ 
    state,
    setState,
    label,
} : {
    state : boolean;
    setState : React.Dispatch<SetStateAction<boolean>>;
    label : string,
}) {
    return (
        <div style={{opacity:!state ? 0.5 : 1}} className="toggle-button" onClick={() => setState(prev => !prev)}>{label}</div>
    )
}
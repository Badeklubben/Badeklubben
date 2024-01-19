import React, { SetStateAction } from "react";

export default function ToggleButton({ 
    state,
    setState,
    trueLabel,
    falseLabel,
} : {
    state : boolean;
    setState : React.Dispatch<SetStateAction<boolean>>;
    trueLabel : string,
    falseLabel : string
}) {
    return (
        <div style={{display:'flex', flexDirection:'row', justifyContent:'space-evenly'}}>
            <button style={{color:'orange', opacity:!state ? 0.5 : 1 }} onClick={() => setState(prev => !prev)} disabled={state}>{trueLabel}</button>
            <button style={{color:'orange', opacity:state ? 0.5 : 1 }} onClick={() => setState(prev => !prev)} disabled={!state}>{falseLabel}</button>
        </div>
    )
}
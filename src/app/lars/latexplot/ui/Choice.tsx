import React, { SetStateAction } from "react";


export default function Choice({
    options
}:{
    options: {label: string, state: boolean, setState: React.Dispatch<SetStateAction<boolean>>}[];
}) {
    return (
        <div className="choice">
            {
                options.map(({label,state,setState},idx) => 
                    <div className="option" key={React.useId()} onClick={() => setState(() => !state)}>
                        <div className="label">{label}</div>
                        <div className="checkbox">
                            {state && <div className="mark"/>}
                        </div>
                    </div>
                )
            }
        </div>
    )
}
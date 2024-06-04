import React, { ReactNode, SetStateAction, useState } from "react";

export default function DropDown({
    title,
    options
}:{
    title : string;
    options: {options: string[], state: string, setState: React.Dispatch<SetStateAction<string>>};
}) {
    const [hidden, setHidden] = useState<boolean>(true);

    return (
        <div className="dropdown">
            <div className="label"> 
                {title} 
            </div>
            <div className="container" onClick={() => {setHidden(()=>!hidden)}}>
                <div className="dropbtn">{options.state}</div>
                <div className={hidden ? "dropdown-content hidden" : "dropdown-content"}>
                    {
                        options.options.map((option,idx) => 
                            <div className="value" key={idx} onClick={() => options.setState(() => option)}>{option}</div>
                        )
                    }
                </div>
            </div>
        </div>
    )
}
import { ReactNode } from "react";

export default function TextInput({
    title,
}:{
    title : string;
}) {
    return (
        <div className="text-input">
            <div className="label"> 
                {title} 
            </div>
            <input className="input">
            </input>
        </div>
    )
}
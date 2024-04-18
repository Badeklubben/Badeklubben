import { ReactNode } from "react";

export default function PropField({
    title,
    children
}:{
    title : string;
    children?: string | JSX.Element |ReactNode;
}) {
    return (
        <div className="prop-field">
            <div className="label"> 
                {title} 
            </div>
            <div className="settings">
                {children}
            </div>
        </div>
    )
}
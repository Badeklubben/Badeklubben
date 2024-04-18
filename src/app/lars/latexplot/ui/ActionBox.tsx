import { ReactNode } from "react";

export default function ActionBox({
    title,
    button,
    children
}:{
    title : string;
    button : {name: string, action: ()=>void} | null;
    children?: string | JSX.Element |ReactNode;
}) {
    return (
        <div className="action-box">
            <div className="label-box a">
                <div className="label"> 
                    {title} 
                </div>
            </div>

            <div className="content">
                {children}
            </div>

            {button && <div className="label-box b">
                <div className="label" onClick={() => button.action()}> 
                    {button.name} 
                </div>
            </div>}

        </div>
    )
}
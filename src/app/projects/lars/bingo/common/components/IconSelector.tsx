import React, { useState } from "react";
import { FaFlagUsa } from "react-icons/fa";
import { SiGamebanana } from "react-icons/si";
import { BiSolidBeer } from "react-icons/bi";
import { FaHeart } from "react-icons/fa";

export const icons = [
    <SiGamebanana />,
    <FaFlagUsa />,
    <BiSolidBeer />,
    <FaHeart />,
]

interface IconInputProps {
    onIconChange: (icon: number) => void;
    icon: number;
}

const IconSelector: React.FC<IconInputProps> = ({onIconChange,icon}) => {
    const [iconIdx, setIconIdx] = useState<number>(icon);
 
    const handleIconClick = () => {
        const idx = (iconIdx + 1) % icons.length;
        setIconIdx(idx);
        onIconChange(idx);
    };

    return (
        <div>
            <div style={{ display: "flex", gap: "10px" }}>
                
                <div
                    onClick={handleIconClick}
                    style={{
                        cursor: "pointer",
                        border: "1px solid gray",
                        padding: "5px",
                        borderRadius: "5px",
                        textAlign: "center",
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                    }}
                >
                    <div style={{ fontSize: "30px" }}>{icons[iconIdx]}</div>
                </div>
          
            </div>
        </div>
    );
};

export default IconSelector;
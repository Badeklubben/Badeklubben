'use client'
import Button from '@mui/material/Button';
import DefaultDrawer from "@/app/shared/components/DefaultDrawer";
const boxStyle = {
    width: '100%', // Take up the full width of the parent container
    maxWidth: '400px', // Set a maximum width to avoid being too wide on larger screens
    height: 'auto', // Automatically adjust height based on content
    border: '2px solid #000',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: '#fff',
    fontSize: '2vw', // Responsive font size based on viewport width
};

export default function Arne() {
    return (
        <div >
            <DefaultDrawer/>
            <h1>echo sine farger!</h1>
            <div style={{...boxStyle, backgroundColor:"#fce4b3" }} >#fce4b3</div>
            <div style={{...boxStyle, backgroundColor:"#fcd37b" }} >#fcd37b</div>
            <div style={{...boxStyle, backgroundColor:"#fcc421" }} >#fcc421</div>
            <div style={{...boxStyle, backgroundColor:"#fcbc14" }} >#fcbc14</div>
            <div style={{...boxStyle, backgroundColor:"#93cbd3" }} >#93cbd3</div>
            <div style={{...boxStyle, backgroundColor:"#1fa7b2" }} >#1fa7b2</div>
            <div style={{...boxStyle, backgroundColor:"#0494a4" }} >#0494a4</div>
            <div style={{...boxStyle, backgroundColor:"#048c9c" }} >#048c9c</div>
        </div>
    );
}
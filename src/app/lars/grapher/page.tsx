'use client';
import Link from 'next/link';
import {useId, useState } from 'react';
import {CanvasSVG } from './ui/SVGElements';
import './style.css';

export default function Grapher() {

    const [deleteMode, setDeleteMode] = useState(false);

    return (
        <div className="page-container">
            <div style={{fontSize:'xx-large', marginBottom:10}}>This is the Grapher project</div>
            <Link href="/lars" style={{color:'orange'}}>
                <h1>Return</h1>
            </Link>
            
            <div style={{display:'flex',height:"100%", backgroundColor:"black", border:"1px solid #16FF00" , margin:"0 25%", overflow:'hidden'}}>

                <CanvasSVG instanceID={useId()} deleteMode={deleteMode}>
                </CanvasSVG>

            </div>
            <div style={{display:'flex', flexDirection:'column',height:'10%', width:'100%'}}>
                <button style={{color:'orange'}} onClick={() => setDeleteMode(prev => !prev)}>{deleteMode ? 'You are currently in delete mode' : 'You are currently in draw mode'}</button>
                <div style={{display:'flex', flexDirection:'row', justifyContent:'space-evenly'}}>
                    <div>LMB : drag & pan </div>
                    <div>MMB : scale & zoom</div>
                    <div>RMB : {deleteMode ? 'delete' : 'draw'}</div>
                </div>
            </div>
        </div>
    );
}
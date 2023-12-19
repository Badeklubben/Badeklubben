'use client';
import Link from 'next/link';
import { useRef, useId } from 'react';
import {CanvasSVG, Vertex } from './ui/SVGElements';
import {CreateMovable } from './lib/movement';
import './style.css';

export default function Grapher() {

    const ref = useRef(null);

    const mm = CreateMovable(
        {x:0,y:0},
        0.1,
        {
            sensitivity: 1000,
            max: 3,
            min: 0.1,
            direction: 1
        }
    )

    const n1 = CreateMovable(
        {x:300,y:300},
        100,
        {
            sensitivity: 10,
            max: 100,
            min: 4,
            direction: -1
        }
    )

    const n2 = CreateMovable(
        {x:700,y:700},
        20,
        {
            sensitivity: 10,
            max: 100,
            min: 4,
            direction: -1
        }
    )
    



    return (
        <div className="page-container">
            <div style={{fontSize:'xx-large', marginBottom:10}}>This is the Grapher project</div>
            <Link href="/lars" style={{color:'orange'}}>
                <h1>Return</h1>
            </Link>
            
            <div style={{display:'flex',height:"100%", backgroundColor:"black", border:"1px solid #16FF00" , margin:"0 25%", overflow:'hidden'}}>

                <CanvasSVG movable={mm} instanceID={useId()}>

                    <line x1={n1.state.position.x} y1={n1.state.position.y} x2={n2.state.position.x} y2={n2.state.position.y} stroke='#16FF00'></line>
            
                    <Vertex movable={n1} instanceID={useId()}></Vertex>
                    <Vertex movable={n2} instanceID={useId()}></Vertex>

                </CanvasSVG>

            </div>
            <div style={{height:'10%'}}>

            </div>
        </div>
    );
}
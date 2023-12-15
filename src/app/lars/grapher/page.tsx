'use client';
import Link from 'next/link';
import { useRef, useId } from 'react';
import {CanvasSVG, Vertex } from './ui/SVGElements';
import {createMovable } from './lib/movement';
import './style.css';

export default function Grapher() {

    const ref = useRef(null);

    const mm = createMovable(
        {x:0,y:0},
        1,
        {
            sensitivity: 1000,
            max: 3,
            min: 0.1,
            direction: 1
        }
    )

    const n1 = createMovable(
        {x:50,y:50},
        40,
        {
            sensitivity: 10,
            max: 100,
            min: 4,
            direction: -1
        }
    )

    const n2 = createMovable(
        {x:150,y:100},
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
            
            <div style={{display:'flex',height:"100%", backgroundColor:"gray", margin:"0 25%", overflow:'hidden'}}>

                <CanvasSVG movable={mm} instanceID={useId()}>

                    <line x1={n1.state.position.x} y1={n1.state.position.y} x2={n2.state.position.x} y2={n2.state.position.y} stroke='#D8E9A8'></line>
            
                    <Vertex movable={n1} instanceID={useId()}></Vertex>
                    <Vertex movable={n2} instanceID={useId()}></Vertex>

                </CanvasSVG>

            </div>
            <div style={{height:'10%'}}>

            </div>
        </div>
    );
}
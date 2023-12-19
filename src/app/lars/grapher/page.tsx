'use client';
import Link from 'next/link';
import { useRef, useId } from 'react';
import {CanvasSVG, Edge, Vertex } from './ui/SVGElements';
import {CreateMovable } from './lib/movement';
import './style.css';

export default function Grapher() {

    const ref = useRef(null);

    const mm = CreateMovable(
        {x:0,y:0},
        1,
        {
            sensitivity: 1000,
            max: 3,
            min: 0.1,
            direction: 1
        }
    )

    const n1 = CreateMovable(
        {x:30,y:30},
        10,
        {
            sensitivity: 10,
            max: 100,
            min: 4,
            direction: -1
        }
    )

    const n2 = CreateMovable(
        {x:60,y:80},
        5,
        {
            sensitivity: 10,
            max: 100,
            min: 4,
            direction: -1
        }
    )
    
    const n3 = CreateMovable(
        {x:80,y:40},
        7,
        {
            sensitivity: 10,
            max: 100,
            min: 4,
            direction: -1
        }
    )

    /*
    if (e.ctrlKey) {
        setMovableChildren(({[elmID]: toDelete, ...rest}) => rest))
        return
    }
    */

    return (
        <div className="page-container">
            <div style={{fontSize:'xx-large', marginBottom:10}}>This is the Grapher project</div>
            <Link href="/lars" style={{color:'orange'}}>
                <h1>Return</h1>
            </Link>
            
            <div style={{display:'flex',height:"100%", backgroundColor:"black", border:"1px solid #16FF00" , margin:"0 25%", overflow:'hidden'}}>

                <CanvasSVG movable={mm} instanceID={useId()}>
                        <Edge from={n1.state} to={n2.state} instanceID={useId()}></Edge>
                        <Edge from={n1.state} to={n3.state} instanceID={useId()}></Edge>
                        <Edge from={n3.state} to={n2.state} instanceID={useId()}></Edge>

                        <Vertex movable={n1} instanceID={useId()}></Vertex>
                        <Vertex movable={n2} instanceID={useId()}></Vertex>
                        <Vertex movable={n3} instanceID={useId()}></Vertex>
                </CanvasSVG>

            </div>
            <div style={{height:'10%'}}>

            </div>
        </div>
    );
}
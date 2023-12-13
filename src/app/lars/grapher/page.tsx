'use client';
import Link from 'next/link';
import { useState, useRef, useEffect } from 'react';
import {CanvasSVG, Vertex, Grid} from './ui/zoomAndPan';
import { Movable } from './lib/movement';



export default function Grapher() {

    const ref = useRef(null);

    const [movable,setMovable] = useState<Movable>({
        refElement: null,
        previosPosition: {x:0,y:0},
        position: {x:0,y:0},
        mousePosOnGrab: {x:0,y:0},
        dragging: false,
        scale: 1,
        zoomBounds: {
            sensitivity: 1000,
            max: 3,
            min: 0.1,
            direction: 1
        }
    })

    const [node,setNode] = useState<Movable>({
        refElement: null,
        previosPosition: {x:50,y:50},
        position: {x:50,y:50},
        mousePosOnGrab: {x:0,y:0},
        dragging: false,
        scale: 40,
        zoomBounds: {
            sensitivity: 10,
            max: 100,
            min: 4,
            direction: -1
        }
    })

    const [node2,setNode2] = useState<Movable>({
        refElement: null,
        previosPosition: {x:150,y:100},
        position: {x:150,y:100},
        mousePosOnGrab: {x:0,y:0},
        dragging: false,
        scale: 20,
        zoomBounds: {
            sensitivity: 10,
            max: 100,
            min: 4,
            direction: -1
        }
    })

    useEffect(() => {
        setMovable((prev) => {return {...prev, refElement : ref.current}})
        setNode((prev) => {return {...prev, refElement : ref.current}})
        setNode2((prev) => {return {...prev, refElement : ref.current}})
    },[])


    return (
        <div>
            <div style={{fontSize:'xx-large', marginBottom:10}}>This is the Grapher project</div>
            <Link href="/lars" style={{color:'orange'}}>
                <h1>Return</h1>
            </Link>
            
            <div style={{display:'flex',height:"50vh", aspectRatio:"1/1", backgroundColor:"gray", margin:"0 25%", overflow:'hidden'}}>

                <CanvasSVG movable={movable} setMovable={setMovable} ref={ref}>

                    <line x1={node.position.x} y1={node.position.y} x2={node2.position.x} y2={node2.position.y} stroke="red" />
                    <Vertex movable={node} setMovable={setNode} parent={movable}></Vertex>
                    <Vertex movable={node2} setMovable={setNode2} parent={movable}></Vertex>

                    { Grid(movable) }
               
                </CanvasSVG>

            </div>
        </div>
    );
}
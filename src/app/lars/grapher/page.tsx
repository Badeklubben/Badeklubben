'use client';
import Link from 'next/link';
import { useState, MouseEvent, WheelEvent } from 'react';
import { getRelMPos } from '../lib/geometry';


export default function Grapher() {
    //Stores the viewbox position from before dragging started
    const [previousposition,setPreviousposition] = useState({x:0,y:0});
    //Stores the current position of the viewbox
    const [position,setPosition] = useState({x:0,y:0});
    //Stores the initial position of the cursor (when dragging started)
    const [mdownpos, setMdownpos] = useState({x:0,y:0});
    //A boolean stating if the user is currently dragging the viewbox
    const [dragging, setDragging] = useState<boolean>(false);
    //The current zoom of the viewbox
    const [zoom, setZoom] = useState(1);

    

    const drag = (e:MouseEvent) => {
        if ( !dragging ) return;
        const current_position = getRelMPos(e);

        setPosition(() => {
            return {
                x: previousposition.x + (mdownpos.x - current_position.x) / zoom,
                y: previousposition.y + (mdownpos.y - current_position.y) / zoom
            }
        });
    }

    const terminateDragging = (e:MouseEvent) => {
        e.preventDefault();
        e.stopPropagation();

        setDragging(() => false);
    }

    const initiateDragging = (e:MouseEvent) => {
        e.preventDefault();
        e.stopPropagation();

        const cursor_position = getRelMPos(e);
        setMdownpos(() => cursor_position);
        setPreviousposition(() => position);
        setDragging(() => true);
    }

    const doZoom = (e:WheelEvent) => {
        const delta = e.deltaY / -1000 + zoom;
        if ( delta < 0.1 || delta > 3) return;

        const current_position = getRelMPos(e);
        setPosition(prev => {
            return {
                x: prev.x + ((delta-zoom) * current_position.x) / (delta*zoom),
                y: prev.y + ((delta-zoom) * current_position.y) / (delta*zoom)
            }
        });

        setZoom(() => delta)
        
    }
    return (
        <div>
            <div style={{fontSize:'xx-large', marginBottom:10}}>This is the Grapher project</div>
            <Link href="/lars" style={{color:'orange'}}>
                <h1>Return</h1>
            </Link>

            <div style={{width:"50%", aspectRatio:"1/1", backgroundColor:"gray", margin:"0 25%"}}>
            <svg 
                onMouseDown={initiateDragging}
                onMouseUp={terminateDragging}
                onMouseLeave={terminateDragging}
                onMouseMove={drag}
                onWheel={doZoom}

                style={{backgroundColor:"orange"}} 
                xmlns="http://www.w3.org/2000/svg" 
                viewBox={position.x + " " + position.y + " " + 100/zoom + " " + 100/zoom}>
                <circle cx="50" cy="50" r="40" fill="red" />
                <circle cx="150" cy="100" r="20" fill="red" />
            </svg>
            </div>
        </div>
    );
}
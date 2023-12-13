'use client';
import { useState, MouseEvent, WheelEvent } from 'react';
import { getRelMPos2, mod } from '../../lib/geometry';


export default function Vertex({
    SVGElement,
    s,
  }: {
    SVGElement: SVGSVGElement;
    s: number;
  }) {
    //Stores the viewbox position from before dragging started
    const [previousposition,setPreviousposition] = useState({x:0,y:0});
    //Stores the current position of the viewbox
    const [position,setPosition] = useState({x:200,y:200});
    //Stores the initial position of the cursor (when dragging started)
    const [mdownpos, setMdownpos] = useState({x:0,y:0});
    //A boolean stating if the user is currently dragging the viewbox
    const [dragging, setDragging] = useState<boolean>(false);
    //The current zoom of the viewbox
    const [zoom, setZoom] = useState(40);

    
    //FUNCTIONS TO HANDLE "CAMERA-MOVEMENT":
    const drag = (e:MouseEvent) => {
        if ( !dragging ) return;
        const current_position = getRelMPos2(e,SVGElement);

        setPosition(() => {
            return {
                x: previousposition.x - (mdownpos.x - current_position.x) / s,
                y: previousposition.y - (mdownpos.y - current_position.y) / s
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

        const cursor_position = getRelMPos2(e,SVGElement);
        setMdownpos(() => cursor_position);
        setPreviousposition(() => position);
        setDragging(() => true);
    }
    const doZoom = (e:WheelEvent) => {
        if (dragging) return;
        e.stopPropagation();

        const delta = e.deltaY / -10 + zoom;
        if ( delta < 5 || delta > 100) return;

        setZoom(() => delta);
 
    }



    return (
        <circle   
        onMouseDown={initiateDragging}
        onMouseUp={terminateDragging}
        onMouseLeave={terminateDragging}
        onMouseMove={drag}
        onWheel={doZoom} 
        cx={position.x} 
        cy={position.y}
        r={zoom} 
        fill="green" />
    );
}
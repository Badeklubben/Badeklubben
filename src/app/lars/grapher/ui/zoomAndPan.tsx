'use client';
import { Dispatch, ForwardedRef, SetStateAction, forwardRef } from 'react';
import { Movable,initiateDragging,terminateDragging,drag,doZoom } from '../lib/movement';


export function Vertex({
    parent,
    movable,
    setMovable,
  }: {
    parent: Movable;
    movable: Movable;
    setMovable: Dispatch<SetStateAction<Movable>>
  }) {
    return (
        <circle   
        onMouseDown={(e) => initiateDragging(e,setMovable)}
        onMouseUp={(e) => terminateDragging(e,setMovable)}
        onMouseLeave={(e) => terminateDragging(e,setMovable)}
        onMouseMove={(e) => drag(e,setMovable,parent)}
        onWheel={(e) => doZoom(e,setMovable,parent)} 

        cx={movable.position.x} 
        cy={movable.position.y}
        r={movable.scale} 
        fill="green" />
    );
}



export const CanvasSVG = forwardRef(
    (
        props:{ 
            movable: Movable;
            children?: React.ReactNode; 
            setMovable: Dispatch<SetStateAction<Movable>>
        },
        ref: ForwardedRef<null>
    ) => {
    return (
        <svg 
            onMouseDown={e => initiateDragging(e,props.setMovable)}
            onMouseUp={e => terminateDragging(e,props.setMovable)}
            onMouseLeave={e => terminateDragging(e,props.setMovable)}
            onMouseMove={e => drag(e,props.setMovable)}
            onWheel={e => doZoom(e,props.setMovable)}

            ref={ref}
            style={{backgroundColor:"orange"}} 
            xmlns="http://www.w3.org/2000/svg" 
            viewBox={props.movable.position.x + " " + props.movable.position.y + " " + 100/props.movable.scale + " " + 100/props.movable.scale}>
                {props.children}
        </svg>
    );
});

export function Grid(movable:Movable, spacing:number = 10, round:number = 5) {
    return [GridAxis(movable,true,spacing,round),GridAxis(movable,false,spacing,round)]
}

function GridAxis(movable:Movable, xAxis:boolean = true, spacing:number = 10, round:number = 5) {
    let currDim = spacing/movable.scale;
    let dir = xAxis ? movable.position.x : movable.position.y;
    let key = xAxis ? 'hor' : 'vert';
    let x = movable.position.x + 1/movable.scale;
    let y = xAxis ? movable.position.y + 2/movable.scale : movable.position.y;

    return Array.from({ length: spacing}, (_,i) => 
        {
            let val = Math.round((currDim * (i + Math.round(dir/currDim)))/round) * round;
            return <text key={key+i}  opacity={0.5} x={x + (xAxis ? currDim * i : 0)} y={y + (xAxis ? 0 : currDim * i)} fontSize={2/movable.scale}>{val}</text>
        }
    )
}

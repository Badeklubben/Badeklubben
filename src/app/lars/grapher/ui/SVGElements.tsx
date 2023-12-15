'use client';
import React, { useEffect, useRef, useState, MouseEvent, WheelEvent } from 'react';
import { Movable, StateType, newActiveState } from '../lib/movement';
import { getRelMPos } from '../lib/geometry';


export function Vertex({
    movable,
    instanceID
  }: {
    movable: StateType<Movable>;
    instanceID : string
  }) 
  {
    return (
        <circle   
        id={instanceID}
        cx={movable.state.position.x} 
        cy={movable.state.position.y}
        r={movable.state.scale} 
        fill="green"/>
    );
}



export function CanvasSVG({ 
    movable,
    children,
    instanceID
    } : {
    movable: StateType<Movable>;
    children?: React.ReactNode; 
    instanceID : string;
    }) {

        const [nodes, setNodes] = useState< {[id : string] : StateType<Movable>} >({});
        const ref = useRef<SVGSVGElement | null>(null);
        const active = newActiveState();

        //Map all the movable children on the canvas
        useEffect(() => {
            const temp : {[id : string] : StateType<Movable>} = {}
            temp[instanceID] = movable;
            
            React.Children.map(children, child => {
                if (React.isValidElement(child)) {
                    if (child.props.movable) temp[child.props.instanceID] = child.props.movable;  
                  }
            })

            setNodes(() => temp);
        
        }, [])

        //Start dragging the canvas or a node
        const initiateDragging = (e:MouseEvent) =>  {
            let current_position = getRelMPos(e,ref.current!);
            const element = nodes[(e.target as HTMLElement).getAttribute('id')!];
        
            element.setState((prev) => {
                return {
                    ...prev,
                    mousePosOnGrab: current_position,
                    previosPosition: prev.position,
                }
            });
            active.setState(() => element);      
        }

        //Scale the canvas or a node
        const doZoom = (e:WheelEvent) => {
            let current_position = getRelMPos(e,ref.current!);
            const element = nodes[(e.target as HTMLElement).getAttribute('id')!];

      
            element.setState((prev) => {
        
                const delta = e.deltaY / -prev.zoomBounds.sensitivity + prev.scale;
                if ( delta < prev.zoomBounds.min || delta > prev.zoomBounds.max) return prev;
                
                return {
                    ...prev,
                    scale : delta,
                    position: {
                        x: prev.position.x + ((delta-prev.scale) * current_position.x) / (delta*prev.scale),
                        y: prev.position.y + ((delta-prev.scale) * current_position.y) / (delta*prev.scale)
                    }
                }
            });
        }

        //Move a node or the canvas
        const drag = (e:MouseEvent) => {
            if ( !active.state ) return;
        
            const current_position = getRelMPos(e,ref.current!);
            const scale = movable.state.scale;
        
            active.state.setState(prev => {
                return {
                    ...prev,
                    position: {
                        x: prev.previosPosition.x + (prev.mousePosOnGrab.x - current_position.x) / scale * prev.zoomBounds.direction,
                        y: prev.previosPosition.y + (prev.mousePosOnGrab.y - current_position.y) / scale * prev.zoomBounds.direction
                    }
                }
            });
        }
        
        //Let go of component
        const terminateDragging = () => {
            if ( !active.state ) return;
            active.setState(() => null);
        }
        

        return (
            <svg 
                onMouseDown={initiateDragging}
                onMouseUp={terminateDragging}
                onMouseLeave={terminateDragging}
                onMouseMove={drag}
                onWheel={doZoom}
                id={instanceID}

                ref={ref}
                style={{backgroundColor:"orange", userSelect:'none'}} 
                xmlns="http://www.w3.org/2000/svg" 
                viewBox={movable.state.position.x + " " + movable.state.position.y + " " + 100/movable.state.scale + " " + 100/movable.state.scale}>
                    {children}
                    { Grid(movable.state) }
            </svg>
        );
};



function Grid(movable:Movable, spacing:number = 10, round:number = 5) {
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

'use client';
import React, { useEffect, useRef, useState, MouseEvent, WheelEvent } from 'react';
import { Movable, StateType, NewActiveState, Position } from '../lib/movement';
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
        strokeWidth={1}
        stroke='#16FF00'
        />
    );
}

export function Edge({
    from,
    to,
    instanceID
  }: {
    from: Movable;
    to : Movable;
    instanceID : string
  }) 
  {
    return (
        <line 
            style={{pointerEvents:'none'}} 
            id={instanceID}
            x1={from.position.x} 
            y1={from.position.y} 
            x2={to.position.x} 
            y2={to.position.y} 
            stroke='#16FF00'
            />
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
        const active = NewActiveState();

        const [penDown, setPenDown] = useState(false);
        const [trace, setTrace] = useState<Position[]>([]);

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
        
        },[children])

        //Start dragging the canvas or a node
        const initiateDragging = (e:MouseEvent) =>  {   
            if (e.button == 2) {
                setPenDown(() => true);
                return;
            }

            let current_position = getRelMPos(e,ref.current!);
            let elmID = (e.target as HTMLElement).getAttribute('id')!;

            const element = nodes[elmID];
        
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
            if (penDown) return;
            let current_position = getRelMPos(e,ref.current!);
            let elmID = (e.target as HTMLElement).getAttribute('id')!;

            const element = nodes[elmID];

      
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

            //draw
            if (penDown) {
                const current_position = getRelMPos(e,ref.current!);

                setTrace(prev => [...prev,{
                    x: (current_position.x + movable.state.position.x* movable.state.scale) / movable.state.scale, 
                    y: (current_position.y + movable.state.position.y* movable.state.scale) / movable.state.scale
                }]);
                
                return;
            }

            //drag
            if ( !active.state ) return;
            const current_position = getRelMPos(e,ref.current!);

            active.state.setState(prev => {
                return {
                    ...prev,
                    position: {
                        x: prev.previosPosition.x + (prev.mousePosOnGrab.x - current_position.x) / movable.state.scale * prev.zoomBounds.direction,
                        y: prev.previosPosition.y + (prev.mousePosOnGrab.y - current_position.y) / movable.state.scale * prev.zoomBounds.direction
                    }
                }
            });
        }

        const endDrawing = () => {
            setPenDown(() => false);
            setTrace(() => []);
        }
        
        //Let go of component
        const terminateDragging = () => {
            endDrawing();
            if ( !active.state ) return;
            active.setState(() => null);
        }

        return (
            <svg 
                onMouseDown={initiateDragging}
                onMouseUp={terminateDragging}
                onMouseLeave={terminateDragging}
                onMouseMove={drag}
                onContextMenu={(e) => e.preventDefault()}
                onWheel={doZoom}
                id={instanceID}

                ref={ref}
                style={{backgroundColor:"black", userSelect:'none'}} 
                xmlns="http://www.w3.org/2000/svg" 
                viewBox={movable.state.position.x + " " + movable.state.position.y + " " + 100/movable.state.scale + " " + 100/movable.state.scale}>
           
                    {children}
  
                    { Grid(movable.state) }

                    {
                        trace.length &&
                        <path style={{pointerEvents:'none'}} d={'M ' + trace.map((position,i) => position.x + ' ' + position.y).join(' ')} stroke='#16FF00' fill='none' strokeWidth={0.1/movable.state.scale}></path>
                    }
                    
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
            return <text style={{pointerEvents:'none'}} key={key+i}  opacity={0.5} x={x + (xAxis ? currDim * i : 0)} y={y + (xAxis ? 0 : currDim * i)} fill='#16FF00' fontSize={2/movable.scale}>{val}</text>
        }
    )
}

'use client';
import React, { useRef, useState, MouseEvent, WheelEvent, useId } from 'react';
import { getRelMPos } from '../lib/geometry';

//Types
type Position = {
    x:number;
    y:number;
};

type Mover = {
    previosPosition: Position;
    position: Position;
    mousePosOnGrab: Position;
    scale: number;
    zoomBounds: {
        sensitivity: number,
        max: number,
        min: number,
        direction: 1 | -1;
    };
}

//Internal functions
function Grid(movable:Mover, spacing:number = 10, round:number = 5) {
    return [GridAxis(movable,true,spacing,round),GridAxis(movable,false,spacing,round)]
}
function GridAxis(movable:Mover, xAxis:boolean = true, spacing:number = 10, round:number = 5) {
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
function Vertex({
    movable,
    instanceID
  }: {
    movable: Mover;
    instanceID : string
  }) 
  {
    return (
        <circle   
        id={instanceID}
        cx={movable.position.x} 
        cy={movable.position.y}
        r={movable.scale} 
        strokeWidth={1}
        stroke='#16FF00'
        />
    );
}
function Edge({
    from,
    to,
    instanceID
  }: {
    from: Mover;
    to : Mover;
    instanceID : string
  }) 
  {
    return (
        <line 
            id={instanceID}
            x1={from.position.x} 
            y1={from.position.y} 
            x2={to.position.x} 
            y2={to.position.y} 
            stroke='#16FF00'
            />
    );
}

//Exported functions
export function CanvasSVG({ 
    instanceID,
    deleteMode,
    } : {
    deleteMode: boolean; 
    instanceID : string;
    }) {

        const [nodes, setNodes] = useState< {[id : string] : Mover} >({
            [instanceID] : {
                previosPosition : {x:0,y:0},
                position : {x:0,y:0},
                mousePosOnGrab : {x:0,y:0},
                scale : 1,
                zoomBounds : {
                    sensitivity: 1000,
                    max: 3,
                    min: 0.1,
                    direction: 1
                }
            },
            ["useId()"] : {
                previosPosition : {x:30,y:30},
                position : {x:30,y:30},
                mousePosOnGrab : {x:30,y:30},
                scale : 10,
                zoomBounds : {
                    sensitivity: 10,
                    max: 100,
                    min: 4,
                    direction: -1
                }
            },
            ["a"] : { 
                previosPosition : {x:60,y:80},
                position : {x:60,y:80},
                mousePosOnGrab : {x:60,y:80},
                scale : 5,
                zoomBounds : {
                    sensitivity: 10,
                    max: 100,
                    min: 4,
                    direction: -1
                }
            },
            ["b"] : { 
                previosPosition :  {x:80,y:40},
                position :  {x:80,y:40},
                mousePosOnGrab :  {x:80,y:40},
                scale : 7,
                zoomBounds : {
                    sensitivity: 10,
                    max: 100,
                    min: 4,
                    direction: -1
                }
            },
        });
        const [edges, setEdges] = useState< {[id : string] : {from: string, to: string}} >({
            ['edge'+useId()]: {from: "a", to: "b"},
            ['edge'+useId()]: {from: "a", to: "useId()"},
            ['edge'+useId()]: {from: "useId()", to: "b"},
        });


        const ref = useRef<SVGSVGElement | null>(null);
        const [active, setActive] = useState<string | null>();
        const [penDown, setPenDown] = useState(false);
        const [trace, setTrace] = useState<Position[]>([]);

        /**
         * Get the id of the element beeing handled
         * @param e mouse event
         * @param ignoreWithPrefix if the element's id starts with this a default value will be returned (instanceID)
         * @returns 
         */
        const getElementID = (e:MouseEvent, ignoreWithPrefix: string | null = null) => {
            let elmID = (e.target as HTMLElement).getAttribute('id')!;
            return ignoreWithPrefix && elmID.startsWith(ignoreWithPrefix) ?  instanceID : elmID;
        }

        /**
         * Delete the element beeing handled
         * @param e mouse event
         * @returns 
         */
        const deleteID = (e:MouseEvent) => {
            let elmID = getElementID(e);
            if ( elmID == instanceID ) return;

            if ( elmID.startsWith("edge") ) {
                setEdges(({[elmID]: toDelete, ...rest}) => rest);
            }
            else {
                setEdges(prev => {
                    let a = Object.entries(prev).filter(([id,edge]) => edge.from != elmID && edge.to != elmID)
                    return Object.fromEntries(a);
                })

                setNodes(({[elmID]: toDelete, ...rest}) => rest);
            }
        }

        /**
         * Log where the drag/draw/delete event started and what the target movable element
         * @param e mouse event
         * @returns 
         */
        const initiateDragging = (e:MouseEvent) =>  {   
            //right-clicks means drawing or deleting
            if (e.button == 2) {
                if (deleteMode) deleteID(e);
                setPenDown(() => true);
                return;
            }
            
            //set the element clicked as active
            let current_position = getRelMPos(e,ref.current!);
            let elmID = getElementID(e,'edge');
            setActive(() => elmID);
            
            //update default values for the element
            setNodes((prev) => {
                return {
                    ...prev,
                    [elmID] : {
                        ...prev[elmID],
                        mousePosOnGrab: current_position,
                        previosPosition: prev[elmID].position,
                    }
                }
            })
            
        }

        /**
         * Drag or delete movable elements, or draw new ones.
         * @param e mouse event
         * @returns 
         */
        const drag = (e:MouseEvent) => {

            //draw or delete
            if (penDown) {
                if (deleteMode) deleteID(e);
                else {
                    const current_position = getRelMPos(e,ref.current!);

                    setTrace(prev => [...prev,{
                        x: (current_position.x + nodes[instanceID].position.x* nodes[instanceID].scale) / nodes[instanceID].scale, 
                        y: (current_position.y + nodes[instanceID].position.y* nodes[instanceID].scale) / nodes[instanceID].scale
                    }]);
                }
            }
            //drag
            else {
                if ( !active ) return;
                const current_position = getRelMPos(e,ref.current!);

                setNodes((prev) => {
                    let pA = prev[active];
                    return {
                        ...prev,
                        [active] : {
                            ...pA,
                            position: {
                                x: pA.previosPosition.x + (pA.mousePosOnGrab.x - current_position.x) / nodes[instanceID].scale * pA.zoomBounds.direction,
                                y: pA.previosPosition.y + (pA.mousePosOnGrab.y - current_position.y) / nodes[instanceID].scale * pA.zoomBounds.direction
                            }
                        }
                    }
                })
            }
        }

        /**
         * Stop drawing and clear the active tag
         * @returns 
         */
        const terminateDragging = () => {
            endDrawing();
            setActive(() => null);
        }

        /**
         * Stop drawing and convert the drawing into an edge or a movable element.
         * @returns 
         */
        const endDrawing = () => {
            setPenDown(() => false);
            setTrace(() => []);
        }

        /**
         * Adjust the scale parameter of a movable element
         * @param e mouse event
         * @returns 
         */
        const doZoom = (e:WheelEvent) => {
            if (penDown) return;

            let current_position = getRelMPos(e,ref.current!);
            let elmID = getElementID(e,'edge');
      
            setNodes((prev) => {
                const delta = e.deltaY / -prev[elmID].zoomBounds.sensitivity + prev[elmID].scale;
                if ( delta < prev[elmID].zoomBounds.min || delta > prev[elmID].zoomBounds.max) return prev;

                return {
                    ...prev,
                    [elmID] : {
                        ...prev[elmID],
                        scale : delta,
                        position: {
                            x: prev[elmID].position.x + ((delta-prev[elmID].scale) * current_position.x) / (delta*prev[elmID].scale),
                            y: prev[elmID].position.y + ((delta-prev[elmID].scale) * current_position.y) / (delta*prev[elmID].scale)
                        }
                    }
                }

            })
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
                viewBox={nodes[instanceID].position.x + " " +nodes[instanceID].position.y + " " + 100/nodes[instanceID].scale + " " + 100/nodes[instanceID].scale}>
                    
                    <g>
                        {Object.entries(edges).map(([id,edge],idx) => <Edge key={'e'+idx} from={nodes[edge.from]} to={nodes[edge.to]} instanceID={id} ></Edge>)}
                        {Object.entries(nodes).map(([id,node],idx) => id != instanceID && <Vertex key={'v'+idx} instanceID={id} movable={node}></Vertex>)}
                    </g>

                    {Grid(nodes[instanceID])}

                    {
                        trace.length &&
                        <path style={{pointerEvents:'none'}} d={'M ' + trace.map((position,i) => position.x + ' ' + position.y).join(' ')} stroke='#16FF00' fill='none' strokeWidth={0.1/nodes[instanceID].scale}></path>
                    }
            </svg>
        );
};



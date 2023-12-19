'use client';
import React, { useRef, useState, MouseEvent, WheelEvent, useId } from 'react';
import { contain, getRelMPos, genID } from '../lib/tools';
import  recognizer, { makeEdge, makeVertex }  from '../lib/recognizer';
import { Bound, Mover, Position } from '../lib/definitions';

/*
Notes:
Something wrong with zoom. Wrong when adjust bounds.
Nothing is done to prevent duplicate edges.
*/


//Internal functions
function Grid(movable:Mover, spacing:number = 10, round:number = 5) {
    return [GridAxis(movable,true,spacing,round),GridAxis(movable,false,spacing,round)]
}
function GridAxis(movable:Mover, xAxis:boolean = true, spacing:number = 10, round:number = 5) {
    const currDim = spacing/movable.scale;
    const dir = xAxis ? movable.position.x : movable.position.y;
    const key = xAxis ? 'hor' : 'vert';
    const x = movable.position.x + 1/movable.scale;
    const y = xAxis ? movable.position.y + 2/movable.scale : movable.position.y;

    return Array.from({ length: spacing}, (_,i) => 
        {
            const val = Math.round((currDim * (i + Math.round(dir/currDim)))/round) * round;
            return <text style={{pointerEvents:'none'}} key={key+i}  opacity={0.5} x={x + (xAxis ? currDim * i : 0)} y={y + (xAxis ? 0 : currDim * i)} fill='#16FF00' fontSize={2/movable.scale}>{val}</text>
        }
    )
}

function Vertex({
    movable,
    instanceID,
    scale
  }: {
    movable: Mover;
    instanceID : string;
    scale: number
  }) 
  {
    return (
        <circle   
        id={instanceID}
        cx={movable.position.x} 
        cy={movable.position.y}
        r={movable.scale} 
        strokeWidth={0.3/scale}
        stroke='#16FF00'
        />
    );
}
function Edge({
    from,
    to,
    instanceID,
    scale
  }: {
    from: Mover;
    to : Mover;
    instanceID : string,
    scale: number
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
            strokeWidth={0.3/scale}
            />
    );
}


const CANVAS : Mover = { 
    previosPosition : {x:0,y:0},
    position : {x:0,y:0},
    mousePosOnGrab : {x:0,y:0},
    scale : 0.5,
    zoomBounds : {
        sensitivity: 1000,
        max: 2,
        min: 0.1,
        direction: 1        
    }
}
const VERTEXBOUNDS : Bound = { 
    sensitivity: 10,
    max: 50,
    min: 10,
    direction: -1
}
const genVertex = (position: Position, scale: number) : Mover => {
    return {
        previosPosition: position,
        position: position,
        mousePosOnGrab: position,
        scale: contain(scale,VERTEXBOUNDS.max,VERTEXBOUNDS.min),
        zoomBounds: VERTEXBOUNDS
    }
}



//Exported functions
export function CanvasSVG({ 
    instanceID,
    deleteMode,
    } : {
    deleteMode: boolean; 
    instanceID : string;
    }) {

        const [nodes, setNodes] = useState< {[id : string] : Mover} >({[instanceID] : CANVAS});   
        const [edges, setEdges] = useState< {[id : string] : {from: string, to: string}} >({});


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
            const elmID = (e.target as HTMLElement).getAttribute('id')!;
            return ignoreWithPrefix && elmID.startsWith(ignoreWithPrefix) ?  instanceID : elmID;
        }

        /**
         * Delete the element beeing handled
         * @param e mouse event
         * @returns 
         */
        const deleteID = (e:MouseEvent) => {
            const elmID = getElementID(e);
            if ( elmID == instanceID ) return;

            if ( elmID.startsWith("edge") ) {
                setEdges(({[elmID]: toDelete, ...rest}) => rest);
            }
            else {
                setEdges(prev => {
                    const a = Object.entries(prev).filter(([id,edge]) => edge.from != elmID && edge.to != elmID)
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
            if (penDown || active) return
            //right-clicks means drawing or deleting
            if (e.button == 2) {
                if (deleteMode) deleteID(e);
                setPenDown(() => true);
                return;
            }
            
            //set the element clicked as active
            const current_position = getRelMPos(e,ref.current!);
            const elmID = getElementID(e,'edge');
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
                    const pA = prev[active];
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
            if (trace.length) {
                const drawn = recognizer(trace);
                if (drawn.id == 'vertex') {
                    const newVertexInfo = makeVertex(drawn.keyPoints);
                    setNodes(prev => {
                        return {
                            ...prev,
                            [genID()] : genVertex(newVertexInfo.center,newVertexInfo.radius)
                        }
                    })
                } else {
                    const newEdge = makeEdge(drawn.keyPoints,nodes);
                    if (newEdge)
                    {
                        setEdges(prev => {
                            return {
                                ...prev,
                                ['edge' + genID()] : newEdge
                            }
                        })
                    }
                }
            }

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

            const current_position = getRelMPos(e,ref.current!);
            const elmID = getElementID(e,'edge');
      
            setNodes((prev) => {
                let  delta = e.deltaY / -prev[elmID].zoomBounds.sensitivity + prev[elmID].scale;
                delta = contain(delta, prev[elmID].zoomBounds.max, prev[elmID].zoomBounds.min);

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
                style={{backgroundColor:"black", userSelect:'none',cursor: active ? 'grabbing': 'default'}} 
                xmlns="http://www.w3.org/2000/svg" 
                viewBox={nodes[instanceID].position.x + " " +nodes[instanceID].position.y + " " + 100/nodes[instanceID].scale + " " + 100/nodes[instanceID].scale}>
                    
                    <g>
                        {Object.entries(edges).map(([id,edge],idx) => <Edge key={'e'+idx} from={nodes[edge.from]} to={nodes[edge.to]} instanceID={id} scale={nodes[instanceID].scale}></Edge>)}
                        {Object.entries(nodes).map(([id,node],idx) => id != instanceID && <Vertex key={'v'+idx} instanceID={id} movable={node} scale={nodes[instanceID].scale}></Vertex>)}
                    </g>

                    {Grid(nodes[instanceID])}

                    {
                        trace.length &&
                        <path strokeDasharray={0.5/nodes[instanceID].scale} strokeOpacity={0.2} style={{pointerEvents:'none'}} d={'M ' + trace.map((position,i) => position.x + ' ' + position.y).join(' ')} stroke='#16FF00' fill='none' strokeWidth={0.1/nodes[instanceID].scale}></path>
                    }
            </svg>
        );
};



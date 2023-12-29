'use client';
import React, { useRef, useState, MouseEvent, WheelEvent, useEffect } from 'react';
import { getRelMPos, genID } from '../lib/tools';
import  recognizer, { makeEdge, makeVertex }  from '../lib/recognizer';
import {  Mover, Position, MoverUpdater, MoverUpdaters } from '../lib/definitions';
import { CANVAS, CANVASBOUNDS, VERTEXBOUNDS } from '../lib/globals';

/*
Notes:
Nothing is done to prevent duplicate edges.

The html in page.tsx needs a cleanup
*/


//Internal functions
function Grid(movable:Mover, spacing:number = 10) {
    return [GridAxis(movable,true,spacing),GridAxis(movable,false,spacing)]
}
function GridAxis(movable:Mover, xAxis:boolean, spacing:number) {
    const currDim = spacing/movable.scale;
    const dir = xAxis ? movable.position.x : movable.position.y;
    const key = xAxis ? 'hor' : 'vert';
    const x = movable.position.x + 1/movable.scale;
    const y = xAxis ? movable.position.y + 2/movable.scale : movable.position.y;

    return Array.from({ length: spacing}, (_,i) => 
        {
            const val = Math.round((currDim * (i + Math.round(dir/currDim))));
            return <text style={{pointerEvents:'none'}} key={key+i}  opacity={0.5} x={x + (xAxis ? currDim * i : 0)} y={y + (xAxis ? 0 : currDim * i)} fill='#16FF00' fontSize={2/movable.scale}>{val}</text>
        }
    )
}

function Vertex({
    movable,
    instanceID,
    scale,
    isActive,
    isHoovered
  }: {
    movable: Mover;
    instanceID : string;
    scale: number;
    isActive : boolean;
    isHoovered : boolean;
  }) 
  {
    return (
        <circle   
        id={instanceID}
        cx={movable.position.x} 
        cy={movable.position.y}
        r={movable.scale} 
        strokeWidth={0.3/scale}
        stroke= {isActive ? 'yellow' : isHoovered ? 'pink' : '#16FF00'}
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



//Exported functions
export function CanvasSVG({ 
    instanceID,
    deleteMode,
    graph,
    } : {
    deleteMode: boolean; 
    instanceID : string;
    graph : {
        nodes : {[id : string] : Mover},
        setNodes : React.Dispatch<React.SetStateAction<{[id : string] : Mover}>>,
        edges : {[id : string] : {from: string, to: string}},
        setEdges : React.Dispatch<React.SetStateAction<{[id : string] : {from: string, to: string}}>>,
        hasUnsavedChanges: React.Dispatch<React.SetStateAction<boolean>>,
        active : string | null,
        setActive : React.Dispatch<React.SetStateAction<string | null>>,
        hoover : string | null,
        setHoover : React.Dispatch<React.SetStateAction<string | null>>,
    }
    }) {
        const [canvas, setCanvas] = useState<Mover>(CANVAS);

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
         * This method is used to change values in the nodes and edges using pre-defined methods
         * @param e 
         * @param id 
         * @param method 
         */
        const alterGraph = (e : any, id: string, method: MoverUpdater,scaling: boolean = false) => {
            const current_position = id != instanceID && scaling ?
                            getRelMPos(e,ref.current!,VERTEXBOUNDS.min / 10) : 
                            getRelMPos(e,ref.current!)

            if (id == instanceID) {
                setCanvas((prev) => method(prev,current_position,canvas,CANVASBOUNDS,e));
            }
            else {
                graph.setNodes((prev) => {
                    return {
                        ...prev,
                        [id] : method(prev[id],current_position,canvas,VERTEXBOUNDS,e)
                    }
                })
            }
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
                graph.setEdges(({[elmID]: toDelete, ...rest}) => rest);
            }
            else {
                if (elmID == graph.active) graph.setActive(prev => null);
                graph.setEdges(prev => {
                    const a = Object.entries(prev).filter(([id,edge]) => edge.from != elmID && edge.to != elmID)
                    return Object.fromEntries(a);
                })

                graph.setNodes(({[elmID]: toDelete, ...rest}) => rest);
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
            const elmID = getElementID(e,'edge');

            if (e.ctrlKey) {
                graph.setActive(prev => elmID == instanceID ? null : elmID);
                return;
            }

            setActive(() => elmID);
            //update default values for the element
            alterGraph(e,elmID,MoverUpdaters.grab);       
        }

        /**
         * Drag or delete movable elements, or draw new ones.
         * @param e mouse event
         * @returns 
         */
        const drag = (e:MouseEvent) => {
            const elmID = getElementID(e,'edge');
            graph.setHoover(prev => elmID == instanceID ? null : elmID);
            //draw or delete
            if (penDown) {
                if (deleteMode) deleteID(e);
                else {
                    const current_position = getRelMPos(e,ref.current!);

                    setTrace(prev => [...prev,{
                        x: (current_position.x + canvas.position.x* canvas.scale) / canvas.scale, 
                        y: (current_position.y + canvas.position.y* canvas.scale) / canvas.scale
                    }]);
                }
            }
            //drag
            else {
                if ( !active ) return;
                alterGraph(e,active,MoverUpdaters.drag);
            }
        }

        /**
         * Stop drawing and clear the active tag
         * @returns 
         */
        const terminateDragging = () => {
            endDrawing();
            graph.hasUnsavedChanges(() => true);
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
                    graph.setNodes(prev => {
                        return {
                            ...prev,
                            [genID()] : makeVertex(drawn.keyPoints)
                        }
                    })
                } else {
                    const newEdge = makeEdge(drawn.keyPoints,graph.nodes);
                    if (newEdge)
                    {
                        graph.setEdges(prev => {
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
            const elmID = getElementID(e,'edge');
            alterGraph(e,elmID,MoverUpdaters.scale,true);
            graph.hasUnsavedChanges(() => true);
        }
        
        //Center on global active
        useEffect(() => {
            if (!graph.active || graph.active == instanceID) return;

            setCanvas(prev => {
                return {
                    ...prev,
                    position : {
                        x : graph.nodes[graph.active!].position.x - 50/prev.scale,
                        y : graph.nodes[graph.active!].position.y - 50/prev.scale
                    }
                }
            })
        },[graph.active])

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
                style={{backgroundColor:"black", userSelect:'none',cursor: active ? 'grabbing': 'default', border:"1px solid #16FF00"}} 
                xmlns="http://www.w3.org/2000/svg" 
                viewBox={canvas.position.x + " " +canvas.position.y + " " + 100/canvas.scale + " " + 100/canvas.scale}>
                    
                    <g>
                        {Object.entries(graph.edges).map(([id,edge],idx) => <Edge key={'e'+idx} from={graph.nodes[edge.from]} to={graph.nodes[edge.to]} instanceID={id} scale={canvas.scale}></Edge>)}
                        {Object.entries(graph.nodes).map(([id,node],idx) => <Vertex key={'v'+idx} instanceID={id} movable={node} scale={canvas.scale} isActive={graph.active == id} isHoovered={graph.hoover == id}></Vertex>)}
                    </g>

                    {Grid(canvas)}

                    {
                        trace.length &&
                        <path strokeDasharray={0.5/canvas.scale} strokeOpacity={0.5} style={{pointerEvents:'none'}} d={'M ' + trace.map((position,i) => position.x + ' ' + position.y).join(' ')} stroke='#16FF00' fill='none' strokeWidth={0.1/canvas.scale}></path>
                    }
            </svg>
        );
};



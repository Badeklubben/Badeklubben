'use client';
import React, { useRef, useState, MouseEvent, WheelEvent, useEffect } from 'react';
import { getRelMPos, genID } from '../lib/tools';
import  recognizer, { makeEdge, makeVertex }  from '../lib/recognizer';
import {  Node, Position, NodeUpdater, MoverUpdaters, GraphState } from '../lib/definitions';
import { CANVAS, CANVASBOUNDS, VERTEXBOUNDS } from '../lib/globals';
import { containsEdge } from '../lib/graphTools';

/*
Notes:
The html in page.tsx needs a cleanup
*/


//Internal functions
function Grid(node:Node, spacing:number = 10) {
    return [GridAxis(node,true,spacing),GridAxis(node,false,spacing)]
}
function GridAxis(node:Node, xAxis:boolean, spacing:number) {
    const currDim = spacing/node.scale;
    const dir = xAxis ? node.position.x : node.position.y;
    const key = xAxis ? 'hor' : 'vert';
    const x = node.position.x + 1/node.scale;
    const y = xAxis ? node.position.y + 2/node.scale : node.position.y;

    return Array.from({ length: spacing}, (_,i) => 
        {
            const val = Math.round((currDim * (i + Math.round(dir/currDim))));
            return <text style={{pointerEvents:'none'}} key={key+i}  opacity={0.5} x={x + (xAxis ? currDim * i : 0)} y={y + (xAxis ? 0 : currDim * i)} fill='#16FF00' fontSize={2/node.scale}>{val}</text>
        }
    )
}

function Vertex({
    node,
    instanceID,
    scale,
    isActive,
    isHoovered
  }: {
    node: Node;
    instanceID : string;
    scale: number;
    isActive : boolean;
    isHoovered : boolean;
  }) 
  {
    return (
        <circle   
        id={instanceID}
        cx={node.position.x} 
        cy={node.position.y}
        r={node.scale} 
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
    from: Node;
    to : Node;
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
    graph : GraphState
    }) {
        const [canvas, setCanvas] = useState<Node>(CANVAS);

        const ref = useRef<SVGSVGElement | null>(null);
        const [grabbed, setGrabbed] = useState<string | null>();
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
        const alterGraph = (e : any, id: string, method: NodeUpdater,position: Position) => {
            if (id == instanceID) {
                setCanvas((prev) => method(prev,position,canvas,CANVASBOUNDS,e));
            }
            else {
                graph.setNodes((prev) => {
                    return {
                        ...prev,
                        [id] : method(prev[id],position,canvas,VERTEXBOUNDS,e)
                    }
                })
            }
        }
        const update = (e: any, method: 'grab' | 'drag' | 'scale') => {
            const elmID = getElementID(e,'edge');
            let current_position = getRelMPos(e,ref.current!);
            const isCanvas = elmID == instanceID;

            switch (method) {
                case 'grab':
                    if (e.ctrlKey) {
                        graph.setActive(prev => isCanvas ? null : elmID);
                        break;
                    }
                    setGrabbed(() => elmID);
                    alterGraph(e,elmID,MoverUpdaters.grab,current_position);
                    break;
                case 'drag':
                    if ( !grabbed ) break;
                    alterGraph(e,grabbed,MoverUpdaters.drag,current_position);
                    break;
            
                default:
                    if (!isCanvas) current_position = getRelMPos(e,ref.current!,VERTEXBOUNDS.min / 10);
                    alterGraph(e,elmID,MoverUpdaters.scale,current_position);
                    break;
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
            if (penDown || grabbed) return
            //right-clicks means drawing or deleting
            if (e.button == 2) {
                if (deleteMode) deleteID(e);
                setPenDown(() => true);
                return;
            }
            //update default values for the element
            update(e,'grab');  
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
            else update(e,'drag');
        }

        /**
         * Stop drawing and clear the active tag
         * @returns 
         */
        const terminateDragging = () => {
            endDrawing();
            graph.setHasUnsavedChanges(() => true);
            setGrabbed(() => null);
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
                    if (newEdge && !containsEdge(Object.values(graph.edges),newEdge))
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
            update(e,'scale');
            graph.setHasUnsavedChanges(() => true);
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
                style={{backgroundColor:"black", userSelect:'none',cursor: grabbed ? 'grabbing': 'default', border:"1px solid #16FF00"}} 
                xmlns="http://www.w3.org/2000/svg" 
                viewBox={canvas.position.x + " " +canvas.position.y + " " + 100/canvas.scale + " " + 100/canvas.scale}>
                    
                    <g>
                        {Object.entries(graph.edges).map(([id,edge],idx) => <Edge key={'e'+idx} from={graph.nodes[edge.from]} to={graph.nodes[edge.to]} instanceID={id} scale={canvas.scale}></Edge>)}
                        {Object.entries(graph.nodes).map(([id,node],idx) => <Vertex key={'v'+idx} instanceID={id} node={node} scale={canvas.scale} isActive={graph.active == id} isHoovered={graph.hoover == id}></Vertex>)}
                    </g>

                    {Grid(canvas)}

                    {
                        trace.length &&
                        <path strokeDasharray={0.5/canvas.scale} strokeOpacity={0.5} style={{pointerEvents:'none'}} d={'M ' + trace.map((position,i) => position.x + ' ' + position.y).join(' ')} stroke='#16FF00' fill='none' strokeWidth={0.1/canvas.scale}></path>
                    }
            </svg>
        );
};



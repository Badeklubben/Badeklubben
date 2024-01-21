'use client';
import React, { useRef, useState, MouseEvent, WheelEvent, useEffect } from 'react';
import {centroid, getElementID, getRelMPos } from '../lib/tools';
import  recognizer  from '../lib/recognizer';
import {  Node, Position, NodeUpdater, MoverUpdaters, GraphState, Dimensions } from '../lib/definitions';
import { CANVAS, CANVASBOUNDS, COLORS, VERTEXBOUNDS } from '../lib/globals';
import { DrawingToElement, isEdge } from '../lib/graphTools';
import Edge from './Edge';
import Vertex from './Vertex';
import Grid from './Grid';

/*
Next steps:
    - Generalised lists
    - Seperate double-click (hook?)
*/

export function CanvasSVG({ 
    instanceID,
    graph,
    showGrid,
    } : {
    instanceID : string;
    graph : GraphState,
    showGrid : boolean
    }) {
        const [canvas, setCanvas] = useState<Node>(CANVAS);
        const [dimentions, setDimentions] = useState<Dimensions>({width:100,height:100});

        const ref = useRef<SVGSVGElement | null>(null);
        const [grabbed, setGrabbed] = useState<string | null>();
        const [penDown, setPenDown] = useState(false);
        const [trace, setTrace] = useState<Position[]>([]);


        //update size on window-resize
        useEffect(() => {
            const updateDims = () => setDimentions(prev => {return {width: window.innerWidth, height: window.innerHeight}});
            window.addEventListener('resize',updateDims);
            updateDims();
            return (() => window.removeEventListener('keydown', updateDims));
        },[])

        const [clicked, setClicked] = useState<string | null>(null);
        useEffect(() => {
            if (clicked){
                setTimeout(() => {
                    setClicked(() => null);
                },250);
            }
        },[clicked])

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
            const elmID = getElementID(e);
            let current_position = getRelMPos(e,ref.current!,dimentions);
            const isCanvas = elmID == instanceID;

            switch (method) {
                case 'grab':
                    if (elmID == clicked) {
                        graph.setActive(prev => isCanvas ? null : elmID);
                        break;
                    }
                    setClicked(() => elmID);
                    if (isEdge(elmID)) break;
                    setGrabbed(() => elmID);
                    alterGraph(e,elmID,MoverUpdaters.grab,current_position);
                    break;
                case 'drag':
                    if ( !grabbed ) break;
                    alterGraph(e,grabbed,MoverUpdaters.drag,current_position);
                    break;
            
                default:
                    if (isEdge(elmID)) break;
                    if (!isCanvas) current_position = getRelMPos(e,ref.current!,{width:VERTEXBOUNDS.min / 10,height:VERTEXBOUNDS.min / 10});
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

            graph.setActive(prev => null);
            if ( isEdge(elmID) ) {
                graph.setEdges(({[elmID]: toDelete, ...rest}) => rest);
            }
            else {
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
                if (e.ctrlKey) deleteID(e);
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
            const elmID = getElementID(e);
            if (!grabbed) graph.setHoover(prev => elmID == instanceID ? null : elmID);
            //draw or delete
            if (penDown) {
                if (e.ctrlKey){
                    deleteID(e);
                    if (trace.length) setTrace(() => []);
                }
                else {
                    const current_position = getRelMPos(e,ref.current!,dimentions);

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
                DrawingToElement(drawn,graph, graph.directed);
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

            var position : Position = {x:0,y:0};
            if (isEdge(graph.active)) position = centroid([graph.nodes[graph.edges[graph.active].from].position,graph.nodes[graph.edges[graph.active].to].position])
            else position = graph.nodes[graph.active].position;

            setCanvas(prev => {
                return {
                    ...prev,
                    position : {
                        x : position.x - (dimentions.width/2)/prev.scale,
                        y :position.y - (dimentions.height/2)/prev.scale
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
                style={{backgroundColor:COLORS.primary, userSelect:'none',cursor: grabbed ? 'grabbing': 'default'}} 
                xmlns="http://www.w3.org/2000/svg" 
                viewBox={canvas.position.x + " " +canvas.position.y + " " + dimentions.width/canvas.scale + " " + dimentions.height/canvas.scale}>
                    
                    <g>
                    {Object.entries(graph.edges).map(([id,edge],idx) => 
                        !(!graph.directed && edge.directed) && <Edge 
                            isActive={graph.active == id} 
                            isHoovered={graph.hoover == id} 
                            key={'e'+id} 
                            from={graph.nodes[edge.from]} 
                            to={graph.nodes[edge.to]} 
                            instanceID={id} 
                            directed={graph.directed} 
                            weight={graph.weighted ? edge.weight : null}></Edge>)}
                    {Object.entries(graph.nodes).map(([id,node],idx) => 
                        <Vertex 
                            key={'v'+id}
                            instanceID={id} 
                            node={node} 
                            scale={canvas.scale} 
                            isActive={graph.active == id} 
                            isHoovered={graph.hoover == id}></Vertex>)}
                    </g>

                    {showGrid && Grid(canvas, dimentions)} 

                    {
                        trace.length &&
                        <path 
                            strokeDasharray={0.5/canvas.scale} 
                            strokeOpacity={1} 
                            style={{pointerEvents:'none'}} 
                            d={'M ' + trace.map((position,i) => position.x + ' ' + position.y).join(' ')} 
                            stroke={COLORS.secondary} fill='none' strokeWidth={1/canvas.scale}></path>
                    }
            </svg>
        );
};



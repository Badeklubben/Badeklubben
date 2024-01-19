'use client';
import React, { useRef, useState, MouseEvent, WheelEvent, useEffect } from 'react';
import { getRelMPos, normal } from '../lib/tools';
import  recognizer  from '../lib/recognizer';
import {  Node, Position, NodeUpdater, MoverUpdaters, GraphState, Dimensions } from '../lib/definitions';
import { CANVAS, CANVASBOUNDS, COLORS, VERTEXBOUNDS } from '../lib/globals';
import { DrawingToElement } from '../lib/graphTools';

/*
Notes:
There should be the same number of grid numbers regardless of screen_size
*/


//Internal functions
function Grid(node:Node, dimentions:Dimensions, spacing:number = 10) {
    return [GridAxis(node,true,dimentions.width/spacing),GridAxis(node,false,dimentions.height/spacing)]
}
function GridAxis(node:Node, xAxis:boolean, spacing:number) {
    const currDim = spacing/node.scale;
    const dir = xAxis ? node.position.x : node.position.y;
    const key = xAxis ? 'hor' : 'vert';
    const x = node.position.x + 1/node.scale;
    const y = xAxis ? node.position.y + 20/node.scale : node.position.y;

    return Array.from({ length: spacing}, (_,i) => 
        {
            const val = Math.round((currDim * (i + Math.round(dir/currDim))));
            return <text style={{pointerEvents:'none'}} key={key+i}  opacity={0.5} x={x + (xAxis ? currDim * i : 0)} y={y + (xAxis ? 0 : currDim * i)} fill={COLORS.secondary} fontSize={20/node.scale}>{val}</text>
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
        <g>
            <circle   
                id={instanceID}
                cx={node.position.x} 
                cy={node.position.y}
                r={node.scale} 
                strokeWidth={0.5/scale}
                fill={COLORS.secondary}
                stroke= {isActive ? COLORS.active : isHoovered ? COLORS.hoover : COLORS.secondary}
            />
           <text 
                style={{pointerEvents:'none'}} 
                x={node.position.x} 
                y={node.position.y} 
                dominantBaseline="middle" 
                textAnchor="middle" 
                fill={isActive ? COLORS.active : isHoovered ? COLORS.hoover : COLORS.primary} 
                fontSize={node.scale}>{node.value}</text> 
        </g>

    );
}
function Edge({
    from,
    to,
    instanceID,
    scale,
    delta
  }: {
    from: Node;
    to : Node;
    instanceID : string;
    scale: number;
    delta: Position
  }) 
  {
    return (
        from != to ?
        <line 
            id={instanceID}
            x1={from.position.x + delta.x * scale} 
            y1={from.position.y + delta.y * scale} 
            x2={to.position.x + delta.x * scale} 
            y2={to.position.y + delta.y * scale} 
            stroke={COLORS.secondary}
            opacity={0.5}
            strokeWidth={1/scale}
            />
        :
        <path 
            id={instanceID}
            d={`M ${from.position.x} ${from.position.y}  A ${from.scale} ${from.scale} 0 1 1 ${from.position.x + 0.1} ${from.position.y + 0.1}`} 
            stroke={COLORS.secondary}
            opacity={0.5}
            fill="none"
            strokeWidth={1/scale}
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
    graph : GraphState,
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
            let current_position = getRelMPos(e,ref.current!,dimentions);
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

            setCanvas(prev => {
                return {
                    ...prev,
                    position : {
                        x : graph.nodes[graph.active!].position.x - (dimentions.width/2)/prev.scale,
                        y : graph.nodes[graph.active!].position.y - (dimentions.height/2)/prev.scale
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
                    {Object.entries(graph.edges).map(([id,edge],idx) => !(!graph.directed && edge.directed) && <Edge key={'e'+idx} from={graph.nodes[edge.from]} to={graph.nodes[edge.to]} delta={edge.directed ? normal(graph.nodes[edge.from].position,graph.nodes[edge.to].position) : {x:0,y:0}} instanceID={id} scale={canvas.scale}></Edge>)}
                    {Object.entries(graph.nodes).map(([id,node],idx) => <Vertex key={'v'+idx} instanceID={id} node={node} scale={canvas.scale} isActive={graph.active == id} isHoovered={graph.hoover == id}></Vertex>)}
                    </g>

                    {Grid(canvas, dimentions)}

                    {
                        trace.length &&
                        <path strokeDasharray={0.5/canvas.scale} strokeOpacity={1} style={{pointerEvents:'none'}} d={'M ' + trace.map((position,i) => position.x + ' ' + position.y).join(' ')} stroke={COLORS.secondary} fill='none' strokeWidth={1/canvas.scale}></path>
                    }
            </svg>
        );
};



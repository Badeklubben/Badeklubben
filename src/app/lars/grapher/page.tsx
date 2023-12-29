'use client';
import Link from 'next/link';
import {useEffect, useId, useState } from 'react';
import {CanvasSVG } from './ui/SVGElements';
import './style.css';
import { Graph, HistoryElement, Mover } from './lib/definitions';
import { loadData, saveData } from './lib/saver';

export default function Grapher() {

    const [deleteMode, setDeleteMode] = useState(false);

    const [nodes, setNodes] = useState< {[id : string] : Mover} >({});   
    const [edges, setEdges] = useState< {[id : string] : {from: string, to: string}} >({});
    const [active, setActive] = useState<string | null>(null);
    const [hoover, setHoover] = useState<string | null>(null);

    //This section handles undoing and redoing:
    const [readyForSaving, setReadyForSaving] = useState(false); //Stops any saving before the local storage has been checked and loaded.
    const [history, setHistory] = useState<HistoryElement|undefined>();

    //check for local progress
    useEffect(() => {
        const savedGraph = loadData();
        if ( savedGraph ) {
            updateGraph(savedGraph);
            setActive(prev => Object.keys(savedGraph.nodes)[0]);
        };
        setReadyForSaving(true);
    }, []);
    //event listners
    useEffect(() => {
        document.addEventListener('keydown', undo);
        return (() => document.removeEventListener('keydown', undo));
    }, [history]);

    //Save
    useEffect(() => {
        if ( !readyForSaving ) return;
        const g = {nodes:nodes,edges:edges};

        if (history && history.graph.nodes === g.nodes && history.graph.edges === g.edges ) return;
        
        saveData(g);
        setHistory((prev) => {
            if (!prev) return new HistoryElement(g);
            return prev.add(g);
        })
        setReadyForSaving(false);
    }, [nodes,edges,readyForSaving]);

    const updateGraph = (g : Graph) => {
        setNodes((prev) => g.nodes);
        setEdges((prev) => g.edges);
    }
    const undo = (e: KeyboardEvent) => {
        if (!history) return;
        if (e.code == 'KeyZ' && e.ctrlKey) {
            if ( e.shiftKey ) {
                if ( history.next ) {
                    updateGraph(history.next!.graph);
                    setHistory(prev => prev!.next);
                }
                return;
            }
            if ( history.previous ) {
                updateGraph(history.previous!.graph);
                setHistory(prev => prev!.previous);
            }          
        }
    }

    return (
        <div className="page-container">
            <div style={{fontSize:'xx-large', marginBottom:10}}>This is the Grapher project</div>
            <Link href="/lars" style={{color:'orange'}}>
                <h1>Return</h1>
            </Link>
            <div style={{display:'flex', flexDirection:'row',width:"100%", height: '100%', backgroundColor:"black", justifyContent:'space-evenly',margin:'0 0 10px 0', gap:'10px', overflow:'hidden'}}>
                <div style={{display:'flex', flexDirection:'column',width:'300px',border:"1px solid #16FF00", gap:'10px'}}>
                    <div style={{fontSize:'x-large'}}>Nodes</div>
                    <div>
                        {Object.entries(nodes).map(([id,node],idx) => <div 
                            key={'list'+id} 
                            style={{color:id == active ? 'yellow' : id == hoover ? 'pink' : 'inherit'}} 
                            onClick={() => setActive(prev => id)}
                            onMouseOver={() => setHoover(prev => id)}>{id}</div>)}
                    </div>

                    { (active) &&
                        <div>
                            <div>Neighbours of {active}</div>
                            {Object.entries(edges).map(([id,edge],idx) =>  {
                                const from = edge.from == active;
                                const to =  edge.to == active;
                                const nid = from ? edge.to : edge.from;
                    
                                return (from || to) && <div 
                                    key={'neighbour'+id} 
                                    style={{color: nid == active ? 'yellow' : nid == hoover ? 'pink' : 'inherit'}} 
                                    onClick={() => setActive(prev => nid)}
                                    onMouseOver={() => setHoover(prev => nid)}>
                                        {nid}
                                </div>})
                            }
                        </div>
                    }
                    
                </div>

                <div style={{height:"100%", aspectRatio:"1/1" , backgroundColor:"black" , overflow:'hidden'}}>
                    <div style={{display:'flex', alignItems: 'center', justifyContent: 'center', height:'100%'}}>
                        <CanvasSVG instanceID={useId()} deleteMode={deleteMode} graph={
                            {nodes: nodes, 
                            setNodes: setNodes, 
                            edges: edges, 
                            setEdges: setEdges, 
                            hasUnsavedChanges: setReadyForSaving,
                            active : active,
                            setActive: setActive,
                            hoover : hoover,
                            setHoover : setHoover
                            }}>
                        </CanvasSVG>
                    </div>
                </div>
                
                <div style={{display:'flex', flexDirection:'column',width:'300px', border:"1px solid #16FF00", gap:'10px'}}>
                    <div style={{display:'flex', flexDirection:'row', justifyContent:'space-evenly'}}>
                        <button style={{color:'orange', opacity:!deleteMode ? 0.5 : 1 }} onClick={() => setDeleteMode(prev => !prev)} disabled={deleteMode}>Delete</button>
                        <button style={{color:'orange', opacity:deleteMode ? 0.5 : 1 }} onClick={() => setDeleteMode(prev => !prev)} disabled={!deleteMode}>Draw</button>
                    </div>
                    <div>
                        <div style={{display:'flex', flexDirection:'row', justifyContent:'space-between'}}>
                            <div>LMB</div>
                            <div>drag & pan</div>
                        </div>
                        <div style={{display:'flex', flexDirection:'row', justifyContent:'space-between'}}>
                            <div>MMB</div>
                            <div>scale & zoom</div>
                        </div>
                        <div style={{display:'flex', flexDirection:'row', justifyContent:'space-between'}}>
                            <div>LMB+CRTL</div>
                            <div>select</div>
                        </div>
                        <div style={{display:'flex', flexDirection:'row', justifyContent:'space-between'}}>
                            <div>RMB</div>
                            <div>{deleteMode ? 'delete' : 'draw'}</div>
                        </div>
                        <div style={{display:'flex', flexDirection:'row', justifyContent:'space-between'}}>
                            <div>CTRL+Z</div>
                            <div>undo</div>
                        </div>
                        <div style={{display:'flex', flexDirection:'row', justifyContent:'space-between'}}>
                            <div>CTRL+SHIFT+Z</div>
                            <div>redo</div>
                        </div>
                    </div>
                </div>
            </div>


        </div>
    );
}
'use client';
import Link from 'next/link';
import {useEffect, useId, useState } from 'react';
import {CanvasSVG } from './ui/SVGElements';
import './style.css';
import { Edge, Node } from './lib/definitions';
import History from './ui/History';
import { getConnectedNode } from './lib/graphTools';

export default function Grapher() {

    const [deleteMode, setDeleteMode] = useState(false);

    const [nodes, setNodes] = useState< {[id : string] : Node} >({});   
    const [edges, setEdges] = useState< {[id : string] : Edge} >({});
    const [active, setActive] = useState<string | null>(null);
    const [hoover, setHoover] = useState<string | null>(null);
    const [hasUnsavedChanges, setHasUnsavedChanges] = useState<boolean>(false);

    const [help, setHelp] = useState<boolean>(false);
    const [loaded, setLoaded] = useState<boolean>(false);
    useEffect(() => {setLoaded(true);},[]);

    const graphState = {
        nodes: nodes, 
        setNodes: setNodes, 
        edges: edges, 
        setEdges: setEdges, 
        hasUnsavedChanges : hasUnsavedChanges,
        setHasUnsavedChanges: setHasUnsavedChanges,
        active : active,
        setActive: setActive,
        hoover : hoover,
        setHoover : setHoover
    }



    return (
        <div className="container">
            <History graph={graphState}/>
            <div className='header'>
                <Link href="/lars"><h1 className='button'>Return</h1></Link>
                <div style={{fontSize:'xx-large'}}>This is the Grapher project</div>
                <div className='button' onClick={() => setHelp(prev => !prev)}>help</div>
            </div>
            <div className="body">
                <div className="part">
                    <div className='inner'>
                        <div style={{fontSize:'large'}}>Nodes</div>
                        <div className='list'>
                            <div className='scrollable'>
                                {Object.entries(nodes).map(([id,node],idx) => <div 
                                    key={'list'+id} 
                                    style={{color:id == active ? 'yellow' : id == hoover ? 'pink' : 'inherit'}} 
                                    onClick={() => setActive(prev => id)}
                                    onMouseOver={() => setHoover(prev => id)}>{node.value || id}</div>)}
                            </div>
                        </div>
                    </div>
                    <div className='inner'>
                        <div style={{fontSize:'large'}} >Neighbours</div>
                        <div className='list'>
                            { active && <div className='scrollable'>
                                {Object.entries(edges).map(([id,edge],idx) =>  {
                                    const nid = getConnectedNode(edge, active);
                                    return (nid) && <div 
                                        key={'neighbour'+id} 
                                        style={{color: nid == active ? 'yellow' : nid == hoover ? 'pink' : 'inherit'}} 
                                        onClick={() => setActive(prev => nid)}
                                        onMouseOver={() => setHoover(prev => nid)}>{nodes[nid].value || nid}</div>})}
                                </div>
                            }
                        </div>
                    </div>        
         
                </div>
                <div className="part middle">
                    <CanvasSVG instanceID={useId()} deleteMode={deleteMode} graph={graphState}/>
                 </div>
                <div className="part">                
                    <div className='inner'>
                        <div style={{fontSize:'large'}}>Settings</div>
                        <div style={{display:'flex', flexDirection:'row', justifyContent:'space-evenly'}}>
                        <button style={{color:'orange', opacity:!deleteMode ? 0.5 : 1 }} onClick={() => setDeleteMode(prev => !prev)} disabled={deleteMode}>Delete</button>
                        <button style={{color:'orange', opacity:deleteMode ? 0.5 : 1 }} onClick={() => setDeleteMode(prev => !prev)} disabled={!deleteMode}>Draw</button>
                    </div>
                    </div>
                    <div className='inner'>
                        <div style={{fontSize:'large'}}>Data</div>
                    </div>
                </div>
                {help && <div className='help'>
                    <div>
                        <div className='help-data'>
                            <div>LMB</div>
                            <div>drag & pan</div>
                        </div>
                        <div className='help-data'>
                            <div>MMB</div>
                            <div>scale & zoom</div>
                        </div>
                        <div className='help-data'>
                            <div>LMB+CRTL</div>
                            <div>select</div>
                        </div>
                        <div className='help-data'>
                            <div>RMB</div>
                            <div>{deleteMode ? 'delete' : 'draw'}</div>
                        </div>
                        <div className='help-data'>
                            <div>CTRL+Z</div>
                            <div>undo</div>
                        </div>
                        <div className='help-data'>
                            <div>CTRL+SHIFT+Z</div>
                            <div>redo</div>
                        </div>
                    </div>
                </div>}
            </div>
            <div className="footer">
                <div className="part outer">
                    <div style={{fontSize:'large'}}>Node {active && nodes[active].value}</div>
                    {active && 
                    <div>
                        <div>ID: {active}</div>
                        <div>X: {Math.round(nodes[active].position.x)} Y: {Math.round(nodes[active].position.y)}</div>
                        <div>scale: {Math.round(nodes[active].scale)}</div>
                    </div>}
                </div>
                <div className="part"><div style={{fontSize:'large'}}>Edge data?</div></div>
                <div className="part"><div style={{fontSize:'large'}}>Tools?</div></div>
                <div className="part outer"><div style={{fontSize:'large'}}>Output?</div></div>
            </div>
            <div className={loaded ? 'curtain fade' : 'curtain'}>Loading..</div>
        </div>


    
    );
}
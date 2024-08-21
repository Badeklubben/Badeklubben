'use client';
import Link from 'next/link';
import {useEffect, useId, useState } from 'react';
import {CanvasSVG } from './ui/CanvasSVG';
import './style.css';
import { Edge, Node } from './lib/definitions';
import History from './ui/History';
import { getConnectedNode, isEdge } from './lib/graphTools';
import ToggleButton from './ui/ToggleButton';
import HelpBox from './ui/HelpBox';
import { CONTROLS } from './lib/globals';
import { LIST } from './ui/ObjectList';

export default function Grapher() {

    const [nodes, setNodes] = useState< {[id : string] : Node} >({});   
    const [edges, setEdges] = useState< {[id : string] : Edge} >({});
    const [active, setActive] = useState<string | null>(null);
    const [hoover, setHoover] = useState<string | null>(null);
    const [hasUnsavedChanges, setHasUnsavedChanges] = useState<boolean>(false);
    const [directed, setDirected] = useState<boolean>(false);
    const [weighted, setWeighted] = useState<boolean>(false);

    const [help, setHelp] = useState<boolean>(false);
    const [loaded, setLoaded] = useState<boolean>(false);

    const [showGrid, setShowGrid] = useState<boolean>(false);

    const [suppordedDevice, setSupportedDevice] = useState<boolean>(false);
    useEffect(() => {
        setSupportedDevice(() => {
            try{
                document.createEvent('TouchEvent');
                return false;
            }catch(e){
                return true;
            }
        })
        setLoaded(true);
    },[]);

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
        setHoover : setHoover,
        directed : directed,
        setDirected: setDirected,
        weighted: weighted,
        setWeighted: setWeighted
    }



    return (
        <div className="container">
            <History graph={graphState}/>
            <CanvasSVG instanceID={useId()} graph={graphState} showGrid={showGrid}/>
   

            <div className='floating v headerr'>
                <div className='strip'>
                    <Link href="/lars"><h1 className='button'>Return</h1></Link>
                    <div style={{fontSize:'xx-large'}}>This is the Grapher project</div>
                    <div className='button' onClick={() => setHelp(prev => !prev)}>help</div>
                    
                </div>
            </div>
     
            {active && <div className='floating h headerr'>
                {isEdge(active) ?
                    <div className='card'>
                        <div>
                            <div>ID: {active}</div>
                            <div>{nodes[edges[active].from].value} - {nodes[edges[active].to].value}</div>
                            {weighted && <div>Weight: {edges[active].weight}</div>}
                        </div>
                    </div>
                    :
                    <div className='card'>
                        <div>
                            <div>ID: {active}</div>
                            <div>X: {Math.round(nodes[active].position.x)} Y: {Math.round(nodes[active].position.y)}</div>
                            <div>scale: {Math.round(nodes[active].scale)}</div>
                        </div>
                        {LIST.neighbours(graphState)}
                    </div>
                }
            </div>}
    

            <div className='floating h footer'>
                <div className='card'>
                    {LIST.nodes(graphState)}
                    {LIST.edges(graphState)} 
                </div>
            </div>

            <div className='floating v footer'>
                <div className='strip'>
                    <ToggleButton state={directed} setState={setDirected} label='D'/>
                    <ToggleButton state={weighted} setState={setWeighted} label='W'/>
                    <ToggleButton state={showGrid} setState={setShowGrid} label='G'/>
                </div>
            </div>

            <HelpBox controls={CONTROLS} active={help} setActive={setHelp}/>

            {!suppordedDevice && <div className={'floating curtain'}>Sorry, touch-screen devices are not yet supported...</div>}             
            <div className={loaded ? 'floating curtain fade' : 'floating curtain'}>Loading..</div>

        </div>
    );
}
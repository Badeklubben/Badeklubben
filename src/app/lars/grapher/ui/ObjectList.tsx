import { Edge, GraphState, Node } from "../lib/definitions";
import { COLORS } from "../lib/globals";
import { getConnectedNode } from "../lib/graphTools";

export type Callback = (value: [string, unknown], index: number) => JSX.Element | "" | false;
export type InnerCallback = (object:unknown, graph: GraphState, id:string) => string;
export type ShowCallback = (object:unknown, graph: GraphState) => boolean;

export const LIST = {
    neighbours : (graph: GraphState) =>  { 
        return ObjectList(
            "Neighbours",
            graph.edges,
            GetCallback(
                "neighbour_list",
                graph,
                (object,graph,nid) => graph.nodes[nid].value || nid,
                (object,graph,nid) => getConnectedNode(object as Edge, graph.active!),
                (object,graph) => !(object as Edge).directed || (graph.directed && (object as Edge).from == (object as Edge).to)
            )
        )
    },
    edges : (graph: GraphState) =>  { 
        return ObjectList(
            "Edges",
            graph.edges,
            GetCallback(
                "edge_list",
                graph,
                (object,graph,nid) => graph.nodes[(object as Edge).from].value + "-" + graph.nodes[(object as Edge).to].value,
                null,
                (object,graph) => graph.directed || !(object as Edge).directed,
            )
        )
    },
    nodes : (graph: GraphState) =>  { 
        return ObjectList(
            "Nodes",
            graph.nodes,
            GetCallback(
                "node_list",
                graph,
                (object,graph,nid) => {return (object as Node).value || nid},
            )
        )
    },
}


function ObjectList(title:string, objects: {[id: string]: unknown}, callback : Callback) : JSX.Element {
    return (
        <div className='list-container'>
            <div style={{fontSize:'large'}} >{title}</div>
            <div className='list'>
                <div className='scrollable'>
                    {Object.entries(objects).map(callback)}
                </div>
            </div>
        </div>  
    );
}


function GetCallback(key:string, graph : GraphState, label: InnerCallback, getId: InnerCallback | null = null, show: ShowCallback | null = null) : Callback {
    return ([id, object],idx) => {
        const nid = getId ? getId(object,graph,id) : id;
        const visible = show ? show(object,graph) : true;
        return (nid && visible) && <div
            key={key+id}
            style={{cursor:'pointer' ,color: nid == graph.active ? COLORS.secondary : nid == graph.hoover ? COLORS.hoover : 'inherit'}} 
            onClick={() => graph.setActive(prev => nid)}
            onMouseOver={() => graph.setHoover(prev => nid)}>
                {label(object, graph,nid)}
        </div>
    }
}



import { Drawing, Edge, Graph, GraphState, Node, Position } from "./definitions";
import { VERTEXBOUNDS } from "./globals";
import { centroid, contain, distance, genID, radius } from "./tools";

export const getConnectedNode = (e: Edge,n: string) => {
    if (e.from == n) return e.to;
    if (e.to == n) return e.from;
    return null;
}

export const isEqualEdges = (e1: Edge, e2: Edge) => {
    const equal = e1.from == e2.from && e1.to == e2.to;
    const reversed = e1.to == e2.from && e1.from == e2.to;
    if (equal) return 1;
    if (reversed) return -1;
    return 0    
}

export const containsEdge = (edges : Edge[], e: Edge) => {
    
    for (let i = 0; i < edges.length; i++) {
        if ( isEqualEdges(e, edges[i]) ) {     
            return true;
        }
    }
    return false;
}

const getLabels = (nodes : {[id: string] : Node}) => {
    return Object.values(nodes).map((node) => node.value);
}

const newLabel = (takenLabels: (string|null)[]) => {
    const characters = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_-+=';
    let value = null;
    for (let i = 0; i < characters.length; i++) {
        if (!takenLabels.includes(characters[i])) {
            value = characters[i];
            break;
        }
    }
    return value;
}

function makeVertex(points : Position[], graph: Graph) : Node{
    let c = centroid(points);
    const r = radius(points,c);
    return {
        value: newLabel(getLabels(graph.nodes)),
        previosPosition: c,
        position: c,
        mousePosOnGrab: c,
        scale: contain(r,VERTEXBOUNDS.max, VERTEXBOUNDS.min),
    }
} 

function makeEdge(points: Position[], graph : Graph){
    let start : null | string = null;
    let end : null | string = null;

    Object.entries(graph.nodes).forEach(([id,node]) => {
        if (distance(node.position, points[0]) <= node.scale && !start) {
            start = id;
        }
        else if (distance(node.position, points[points.length-1]) <= node.scale && !end) {
            end = id;
        }
        if (end && start) return;
    });

    return (start && end) ? {from: start,to: end} : null;
} 

export function drawingToElement(drawing : Drawing, graph: GraphState) {
    if (drawing.id == 'vertex') {
        const vertex = makeVertex(drawing.points,graph);
        graph.setNodes(prev => {
            return {
                ...prev,
                [genID()] : vertex
            }
        })
    }
    else if (drawing.id == 'edge') {
        const edge = makeEdge(drawing.points, graph);
        if (edge && !containsEdge(Object.values(graph.edges),edge)){
            graph.setEdges(prev => {
                return {
                    ...prev,
                    ['edge' + genID()] : edge
                }
            })
        }
    }
} 
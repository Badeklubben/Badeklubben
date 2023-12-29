import { Edge, Node } from "./definitions";

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
    //if (Object.values(graph.edges).map((edge) => isEqualEdges(newEdge,edge)).every((value) => value == 0))
}
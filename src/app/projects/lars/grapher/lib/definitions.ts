import {contain } from "./tools";

export type Position = {
    x:number;
    y:number;
};

export type Dimensions = {
    width:number;
    height:number;
};

export type Bound = {
    sensitivity: number,
    max: number,
    min: number,
    direction: 1 | -1;
}

export type Edge = {
    from:string;
    to:string;
    weight:number;
    directed: boolean;
};

export type Drawing = {
    id : 'edge' | 'vertex';
    points : Position[];
}

export type Node = {
    value : string | null;
    previosPosition: Position;
    position: Position;
    mousePosOnGrab: Position;
    scale: number;
}

export type Graph = {
    nodes : {[id : string] : Node},
    edges : {[id : string] : Edge},
    weighted : boolean,
    directed: boolean
    
}

export type GraphState = {
    nodes : {[id : string] : Node},
    setNodes : React.Dispatch<React.SetStateAction<{[id : string] : Node}>>,
    edges : {[id : string] : Edge},
    setEdges : React.Dispatch<React.SetStateAction<{[id : string] : Edge}>>,
    hasUnsavedChanges: boolean,
    setHasUnsavedChanges: React.Dispatch<React.SetStateAction<boolean>>,
    active : string | null,
    setActive : React.Dispatch<React.SetStateAction<string | null>>,
    hoover : string | null,
    setHoover : React.Dispatch<React.SetStateAction<string | null>>,
    directed : boolean,
    setDirected : React.Dispatch<React.SetStateAction<boolean>>,
    weighted : boolean,
    setWeighted : React.Dispatch<React.SetStateAction<boolean>>,
}


export class HistoryElement {
    previous : HistoryElement | undefined;
    next : HistoryElement | undefined;
    graph : Graph;
    constructor(graph: Graph) {
        this.graph = graph;
    }
    add(this:HistoryElement, graph: Graph) : HistoryElement {
        const elm = new HistoryElement(graph);
        elm.previous = this;
        this.next = elm;
        return elm;
    }
}

export type NodeUpdater = (node : Node, position: Position, parent: Node,  bound : Bound, e: any) => Node;
export const MoverUpdaters = {
    grab : (node: Node, position: Position, parent: Node,  bound : Bound) => {
        return {
            ...node,
            mousePosOnGrab: position,
            previosPosition: node.position,
        }
    },
    drag : (node: Node, position: Position, parent: Node, bound : Bound) => {
        return {
            ...node,
            position : {
                x: node.previosPosition.x + (node.mousePosOnGrab.x - position.x) / parent.scale * bound.direction,
                y: node.previosPosition.y + (node.mousePosOnGrab.y - position.y) / parent.scale * bound.direction
            }
        }
    },
    scale : (node: Node,position: Position, parent: Node,  bound : Bound, e:WheelEvent) => {
        let newScale = contain(node.scale + bound.sensitivity * -e.deltaY/100,bound.max,bound.min);

        return {
            ...node,
            scale : newScale,
            position: {
                x: node.position.x + ((newScale-node.scale) * position.x) / (newScale*node.scale) ,
                y: node.position.y + ((newScale-node.scale) * position.y) / (newScale*node.scale) 
            } 
        }
    }
}

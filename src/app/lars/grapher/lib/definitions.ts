
export type Position = {
    x:number;
    y:number;
};

export type Bound = {
    sensitivity: number,
    max: number,
    min: number,
    direction: 1 | -1;
}
export type Mover = {
    previosPosition: Position;
    position: Position;
    mousePosOnGrab: Position;
    scale: number;
    zoomBounds: Bound;
}

export type Graph = {
    nodes : {[id : string] : Mover},
    edges : {[id : string] : {from: string, to: string}}
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
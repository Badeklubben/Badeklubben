import {contain } from "./tools";

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

export type MoverUpdater = (mover : Mover, position: Position, parent: Mover,  bound : Bound, e: any) => Mover;
export const MoverUpdaters = {
    grab : (mover: Mover, position: Position, parent: Mover,  bound : Bound) => {
        return {
            ...mover,
            mousePosOnGrab: position,
            previosPosition: mover.position,
        }
    },
    drag : (mover: Mover, position: Position, parent: Mover, bound : Bound) => {
        return {
            ...mover,
            position : {
                x: mover.previosPosition.x + (mover.mousePosOnGrab.x - position.x) / parent.scale * bound.direction,
                y: mover.previosPosition.y + (mover.mousePosOnGrab.y - position.y) / parent.scale * bound.direction
            }
        }
    },
    scale : (mover: Mover,position: Position, parent: Mover,  bound : Bound, e:WheelEvent) => {
        let newScale = contain(mover.scale + bound.sensitivity * -e.deltaY/100,bound.max,bound.min);

        return {
            ...mover,
            scale : newScale,
            position: {
                x: mover.position.x + ((newScale-mover.scale) * position.x) / (newScale*mover.scale) ,
                y: mover.position.y + ((newScale-mover.scale) * position.y) / (newScale*mover.scale) 
            } 
        }
    }
}

import { Bound, Node } from "./definitions";

export const CANVAS : Node = { 
    value : 'canvas',
    previosPosition : {x:0,y:0},
    position : {x:0,y:0},
    mousePosOnGrab : {x:0,y:0},
    scale : 5,
}

export const CANVASBOUNDS : Bound = {
    sensitivity: 0.1,
    max: 5,
    min: 0.1,
    direction: 1     
}

export const VERTEXBOUNDS : Bound = { 
    sensitivity: 1,
    max: 50,
    min: 1,
    direction: -1
}
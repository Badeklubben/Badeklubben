import { Bound, Node } from "./definitions";

export const COLORS = {
    primary : '#1d252bff',
    secondary : '#65e8ebff',
    active : 'white',
    hoover : 'orange'
}

export const CONTROLS = {
    "LMB" : "drag & pan",
    "MMB" : "scale & zoom",
    "LMB x 2" : "select",
    "RMB" : "draw",
    "RMB+CTRL" : "draw",
    "CTRL+Z" : "undo",
    "CTRL+SHIFT+Z" : "redo",
}

export const CANVAS : Node = { 
    value : 'canvas',
    previosPosition : {x:0,y:0},
    position : {x:0,y:0},
    mousePosOnGrab : {x:0,y:0},
    scale : 5,
}

export const CANVASBOUNDS : Bound = {
    sensitivity: 0.1,
    max: 10,
    min: 0.1,
    direction: 1     
}

export const VERTEXBOUNDS : Bound = { 
    sensitivity: 1,
    max: 50,
    min: 1,
    direction: -1
}
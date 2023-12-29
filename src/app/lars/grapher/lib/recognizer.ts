import { Mover, Position } from "./definitions";
import { VERTEXBOUNDS } from "./globals";
import { contain } from "./tools";


function distance(start: Position, end: Position) {
    return Math.sqrt(Math.pow(end.x - start.x,2) + Math.pow(end.y - start.y,2));
}
function equal(A: Position, B: Position) {
    return A.x == B.x && A.y == B.y;
}

function perpendicularDistance(point: Position, start: Position, end: Position) {
    if ( equal(start,end) ) return distance(point,start);

    let dStartEnd = {x: end.x - start.x, y: end.y - start.y};
    let dPointStart = {x: start.x - point.x, y: start.y - point.y};

    return Math.abs(dStartEnd.x * dPointStart.y - dPointStart.x * dStartEnd.y) / Math.sqrt(Math.pow(dStartEnd.x,2) + Math.pow(dStartEnd.y, 2));
}

function douglasPaucker(points: Position[], ebsilon:number): Position[]{
    let ebsilonD = distance(points[0],points[points.length -1]) * ebsilon;
    let dMax = 0;
    let idx = 0;
    for (let index = 1; index < points.length-1; index++) {
        let d = perpendicularDistance(points[index],points[0],points[points.length-1]);
        if (d > dMax) {
            idx = index;
            dMax = d;
        }
    }

    if (dMax > ebsilonD) {
        let recRes1 = douglasPaucker(points.slice(0,idx+1),ebsilon).slice(0,points.length-1);
        let recRes2 = douglasPaucker(points.slice(idx),ebsilon);
        return recRes1.concat(recRes2);
    }
    return [points[0] ,points[points.length -1]];
}


function centroid(points: Position[]) {
    let cx = 0;
    let cy = 0;
    for (let index = 0; index < points.length; index++) {
        cx += points[index].x;
        cy += points[index].y;
    }
    return {x: cx/points.length, y: cy/points.length};
}
function radius(points: Position[], center: Position) {
    let r = 0;
    for (let index = 0; index < points.length; index++) {
        r += distance(points[index],center);
    }
    return r/points.length;
}

export function makeVertex(points: Position[]) : Mover{
    let c = centroid(points);
    const r = radius(points,c);
    return {
        previosPosition: c,
        position: c,
        mousePosOnGrab: c,
        scale: contain(r,VERTEXBOUNDS.max, VERTEXBOUNDS.min),
    }
} 

export function makeEdge(points: Position[], movables: {[id : string] : Mover}){
    let start : null | string = null;
    let end : null | string = null;

    Object.entries(movables).forEach(([id,mover]) => {
        if (distance(mover.position, points[0]) <= mover.scale && !start) {
            start = id;
        }
        else if (distance(mover.position, points[points.length-1]) <= mover.scale && !end) {
            end = id;
        }
        if (end && start) return;
    });

    return (start && end) ? {from: start,to: end} : null;
} 

export default function recognizer(points: Position[]) {
    let simplified = douglasPaucker(points,0.3);

    if (simplified.length < 4) return {id:"edge", keyPoints: simplified};
    return {id:"vertex", keyPoints: simplified};
}
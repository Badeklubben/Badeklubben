import { Drawing, Position } from "./definitions";
import { distance } from "./tools";


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


export default function recognizer(points: Position[]) : Drawing {
    let simplified = douglasPaucker(points,0.3);

    if (simplified.length < 4) return {id:"edge", points: simplified};
    return {id:"vertex", points: simplified};
}
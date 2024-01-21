import { MouseEvent } from 'react';
import { Dimensions, Position } from './definitions';


//Dunctions
export function getRelMPos(e:MouseEvent,el:Element, dimensions: Dimensions) {
    const canvas_rect = el.getBoundingClientRect();
    const x = (e.clientX - canvas_rect.left) * dimensions.width / canvas_rect.width;
    const y = (e.clientY - canvas_rect.top) * dimensions.height / canvas_rect.height;
    return {x:x,y:y};
}

export function contain(value:number,max:number,min:number) {
    return Math.max(Math.min(value,max),min);
}

export function mod(n:number, m:number):number {
    return ((n % m) + m) % m;
}

export function distance(start: Position, end: Position) {
    return Math.sqrt(Math.pow(end.x - start.x,2) + Math.pow(end.y - start.y,2));
}


export function genID(length: number = 10): string {
    const characters = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_-+=';
    let randomString = '';
  
    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * characters.length);
      randomString += characters.charAt(randomIndex);
    }
  
    return randomString;
}

/**
 * Get the id of the element beeing handled
 * @param e mouse event
 * @param ignoreWithPrefix if the element's id starts with this a default value will be returned (instanceID)
 * @returns 
 */
export const getElementID = (e:MouseEvent) => {
    return (e.target as HTMLElement).getAttribute('id')!;;
}

export function normal(p1: Position, p2: Position) : Position {
    const d = distance(p1,p2);
    return {x: (-p2.y + p1.y)/d, y: (p2.x - p1.x)/d};
}

export function slope(x: number, xMax: number, xMin: number): number {
    const norm = (x - xMin) / (xMax - xMin);
    return contain((0.5 - Math.abs(norm - 0.5)) * 2,1,0);
}
export function addPos(p1: Position, p2: Position) : Position {
    return {x: p1.x + p2.x, y: p1.y + p2.y};
}
export function subPos(p1: Position, p2: Position) : Position {
    return {x: p1.x - p2.x, y: p1.y - p2.y};
}

export function offsetBy(p1: Position, p2: Position, offset: number) : Position {
    const vect = subPos(p2,p1);
    const d = distance(p1,p2);
    return {x: p1.x + vect.x - vect.x * offset / d, y: p1.y + vect.y - vect.y * offset / d};
}

export function centroid(points: Position[]) {
    let cx = 0;
    let cy = 0;
    for (let index = 0; index < points.length; index++) {
        cx += points[index].x;
        cy += points[index].y;
    }
    return {x: cx/points.length, y: cy/points.length};
}
export function radius(points: Position[], center: Position) {
    let r = 0;
    for (let index = 0; index < points.length; index++) {
        r += distance(points[index],center);
    }
    return r/points.length;
}
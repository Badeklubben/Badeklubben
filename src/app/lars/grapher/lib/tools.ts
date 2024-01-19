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

export function normal(p1: Position, p2: Position) : Position {
    const d = distance(p1,p2);
    return {x: (-p2.y + p1.y)/d, y: (p2.x - p1.x)/d};
}

export function slope(x: number, xMax: number, xMin: number): number {
    const norm = (x - xMin) / (xMax - xMin);
    return contain((0.5 - Math.abs(norm - 0.5)) * 2,1,0);
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
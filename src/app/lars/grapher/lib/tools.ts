import { MouseEvent } from 'react';


//Dunctions
export function getRelMPos(e:MouseEvent,el:Element, scalar: number = 100) {
    const canvas_rect = el.getBoundingClientRect();
    const x = (e.clientX - canvas_rect.left) * scalar / canvas_rect.width;
    const y = (e.clientY - canvas_rect.top) * scalar / canvas_rect.height;
    return {x:x,y:y};
}

export function contain(value:number,max:number,min:number) {
    return Math.max(Math.min(value,max),min);
}

export function mod(n:number, m:number):number {
    return ((n % m) + m) % m;
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

export function slope(x: number, xMax: number, xMin: number): number {
    const norm = (x - xMin) / (xMax - xMin);
    return contain((0.5 - Math.abs(norm - 0.5)) * 2,1,0);
}
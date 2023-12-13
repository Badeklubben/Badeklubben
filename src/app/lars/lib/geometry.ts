import { MouseEvent } from 'react';

export function getRelMPos(e:MouseEvent) {
    const canvas_rect = e.currentTarget.getBoundingClientRect();
    const x = (e.clientX - canvas_rect.left) * 100 / canvas_rect.width;
    const y = (e.clientY - canvas_rect.top) * 100 / canvas_rect.height;
    return {x:x,y:y};
}


export function getRelMPos2(e:MouseEvent,el:Element) {
    const canvas_rect = el.getBoundingClientRect();
    const x = (e.clientX - canvas_rect.left) * 100 / canvas_rect.width;
    const y = (e.clientY - canvas_rect.top) * 100 / canvas_rect.height;
    return {x:x,y:y};
}

export function mod(n:number, m:number):number {
    return ((n % m) + m) % m;
}
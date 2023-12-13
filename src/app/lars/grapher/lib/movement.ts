import { Dispatch, MouseEvent, SetStateAction, WheelEvent } from 'react';
import { getRelMPos } from './geometry';

export type Position = {
    x:number;
    y:number;
};

export type Movable = {
    refElement: Element | null;
    previosPosition: Position;
    position: Position;
    mousePosOnGrab: Position;
    dragging: boolean;
    scale: number;
    zoomBounds: {
        sensitivity: number,
        max: number,
        min: number,
        direction: number
    };
};




export  function drag(e:MouseEvent, setMovable: Dispatch<SetStateAction<Movable>>, parent: Movable | null = null) {
    setMovable(prev => {
        if ( !prev.dragging ) return prev;
        const current_position = getRelMPos(e, prev.refElement!);
        const scale = parent ? parent.scale : prev.scale;
        
        return {
            ...prev,
            position: {
                x: prev.previosPosition.x + (prev.mousePosOnGrab.x - current_position.x) / scale * prev.zoomBounds.direction,
                y: prev.previosPosition.y + (prev.mousePosOnGrab.y - current_position.y) / scale * prev.zoomBounds.direction
            }
        }
    });
}

export function terminateDragging(e:MouseEvent, setMovable: Dispatch<SetStateAction<Movable>>) {
    e.preventDefault();
    e.stopPropagation();

    setMovable((prev) => {return {...prev, dragging: false}});
}

export function initiateDragging(e:MouseEvent, setMovable: Dispatch<SetStateAction<Movable>>) {
    e.preventDefault();
    e.stopPropagation();

    setMovable((prev) => {
        const current_position = getRelMPos(e, prev.refElement!);
        return {
            ...prev,
            mousePosOnGrab: current_position,
            previosPosition: prev.position,
            dragging: true
        }
    });
}

export function doZoom(e:WheelEvent, setMovable: Dispatch<SetStateAction<Movable>>, parent: Movable | null = null) {
    e.stopPropagation();

    setMovable((prev) => {
        if ( prev.dragging || (parent ? parent.dragging : false) ) return prev;

        const delta = e.deltaY / -prev.zoomBounds.sensitivity + prev.scale;
        if ( delta < prev.zoomBounds.min || delta > prev.zoomBounds.max) return prev;

        const current_position = getRelMPos(e,prev.refElement!);
        return {
            ...prev,
            scale : delta,
            position: {
                x: prev.position.x + ((delta-prev.scale) * current_position.x) / (delta*prev.scale),
                y: prev.position.y + ((delta-prev.scale) * current_position.y) / (delta*prev.scale)
            }
        }
    });
}

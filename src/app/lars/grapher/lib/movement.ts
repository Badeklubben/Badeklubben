import { Dispatch, SetStateAction, useState } from 'react';

export type StateType<T> = {
    state:T;
    setState:Dispatch<SetStateAction<T>>;
};

export type Position = {
    x:number;
    y:number;
};

export type ZoomBounds = {
    sensitivity: number,
    max: number,
    min: number,
    direction: 1 | -1;
}

export type Movable = {
    refElement: Element | null;
    previosPosition: Position;
    position: Position;
    mousePosOnGrab: Position;
    dragging: boolean;
    scale: number;
    zoomBounds: ZoomBounds;
};


export function CreateMovable(position: Position, scale: number, bounds : ZoomBounds) : StateType<Movable> {
    const [movable,setMovable] = useState<Movable>({
        refElement: null,
        previosPosition: position,
        position: position,
        mousePosOnGrab: position,
        dragging: false,
        scale: scale,
        zoomBounds: bounds
    });
    return {state:movable,setState:setMovable};
}

export function NewActiveState(active : StateType<Movable> | null = null) : StateType<StateType<Movable> | null> {
    const [activeM, setActiveM] = useState<StateType<Movable> | null>(active);
    return {state: activeM, setState: setActiveM}
}

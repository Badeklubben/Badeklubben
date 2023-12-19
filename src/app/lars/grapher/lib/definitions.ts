
export type Position = {
    x:number;
    y:number;
};

export type Bound = {
    sensitivity: number,
    max: number,
    min: number,
    direction: 1 | -1;
}
export type Mover = {
    previosPosition: Position;
    position: Position;
    mousePosOnGrab: Position;
    scale: number;
    zoomBounds: Bound;
}
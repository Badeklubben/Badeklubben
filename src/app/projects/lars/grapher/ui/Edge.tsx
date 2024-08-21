import { useEffect, useState } from "react";
import { Node, Position } from "../lib/definitions";
import { addPos, centroid, normal, offsetBy } from "../lib/tools";
import { COLORS } from "../lib/globals";

export default function Edge({
    from,
    to,
    instanceID,
    directed,
    weight,
    isActive,
    isHoovered,

  }: {
    from: Node;
    to : Node;
    instanceID : string;
    directed : boolean;
    weight : null | number;
    isActive: boolean;
    isHoovered : boolean;

  }) 
  {
    const offset = 1;
    const [p1, setP1] = useState<Position>(from.position);
    const [p2, setP2] = useState<Position>(to.position);
    const [p3, setP3] = useState<Position>(to.position);
    const [r, setR] = useState<number>(0); 
    const [loaded, setLoaded] = useState<boolean>(false); 
    useEffect(() => {
        if (from == to) {
            setLoaded(true);
            return
        };
        const delta = normal(from.position,to.position);
        const newP1 = addPos(offsetBy(to.position,from.position,from.scale + offset), delta)
        const newP2 = addPos(offsetBy(from.position,to.position,to.scale + offset), delta)
        const direction = (p2.x - p1.x)/Math.abs(p2.x - p1.x)

        setP1((prev) => newP1);
        setP2((prev) => newP2);
        setP3((prev) => addPos(centroid([newP2,newP1]), {x:delta.x * 3, y : delta.y *3}));
        setR(prev => direction * -90 + direction * Math.acos(delta.x) * 180/Math.PI);
        setLoaded(true);
    },[from,to]);


    return (
        loaded && <g opacity={0.5}>
            <defs>
                <marker
                    id="triangle"
                    viewBox="0 0 10 10"
                    refX="10"
                    refY="-3"
                    markerUnits="strokeWidth"
                    markerWidth={2}
                    markerHeight={2}
                    orient="auto">
                    <path d="M 0 5 L 10 0 L 0 0 z" fill={COLORS.secondary}/>
                </marker>
            </defs>
        {
            from != to ?
            <g>
                <line 
                    id={instanceID}
                    x1={p1.x} 
                    y1={p1.y} 
                    x2={p2.x} 
                    y2={p2.y} 
                    stroke={isActive ? COLORS.active : isHoovered ? COLORS.hoover : COLORS.secondary} 
                    markerEnd={directed ? 'url(#triangle)' : ''}
                    strokeWidth={1}
                    />
                {weight != null && <text 
                    style={{pointerEvents:'none'}} 
                    x={p3.x} 
                    y={p3.y} 
                    transform={"rotate(" + r + "," + p3.x + "," + p3.y +")"}
                    dominantBaseline="middle" 
                    textAnchor="middle" 
                    fill={isActive ? 'white' : isHoovered ? COLORS.hoover : COLORS.secondary} 
                    fontSize={3}>{weight}</text> }
            </g>
            :
            <g>
                <path 
                    id={instanceID}
                    d={`M ${from.position.x + from.scale + offset} ${from.position.y}  A ${from.scale} ${from.scale} 0 1 0 ${from.position.x} ${from.position.y - from.scale - offset}`} 
                    stroke={isActive ? COLORS.active : isHoovered ? COLORS.hoover : COLORS.secondary} 
                    fill="none"
                    strokeWidth={1}
                    markerEnd={directed ? 'url(#triangle)' : ''}
                    />
                {weight != null && <text 
                    style={{pointerEvents:'none'}} 
                    x={from.position.x + from.scale} 
                    y={from.position.y - 2*from.scale - 2} 
                    dominantBaseline="middle" 
                    textAnchor="middle" 
                    fill={isActive ? COLORS.active : isHoovered ? COLORS.hoover : COLORS.secondary} 
                    fontSize={3}>{weight}</text>} 
            </g>
        }
        </g>
    );
}
import { Node } from "../lib/definitions";
import { COLORS } from "../lib/globals";

export default function Vertex({
    node,
    instanceID,
    scale,
    isActive,
    isHoovered
  }: {
    node: Node;
    instanceID : string;
    scale: number;
    isActive : boolean;
    isHoovered : boolean;
  }) 
  {
    return (
        <g opacity={0.5}>
            <circle   
                id={instanceID}
                cx={node.position.x} 
                cy={node.position.y}
                r={node.scale} 
                strokeWidth={1}
                fill={isActive ? COLORS.secondary : COLORS.primary} 
                stroke= {isActive ? COLORS.primary : COLORS.secondary} 
            />
           <text 
                style={{pointerEvents:'none'}} 
                x={node.position.x} 
                y={node.position.y} 
                dominantBaseline="middle" 
                textAnchor="middle" 
                fill={isActive ? COLORS.primary : isHoovered ? COLORS.hoover : COLORS.secondary} 
                fontSize={node.scale}>{node.value}</text> 
        </g>

    );
}
import { Dimensions, Node } from "../lib/definitions";
import { COLORS } from "../lib/globals";


export default function Grid(node:Node, dimentions:Dimensions, spacing:number = 10) {
    return [GridAxis(node,true,dimentions.width/spacing),GridAxis(node,false,dimentions.height/spacing)]
}

function GridAxis(node:Node, xAxis:boolean, spacing:number) {
    const currDim = spacing/node.scale;
    const dir = xAxis ? node.position.x : node.position.y;
    const key = xAxis ? 'hor' : 'vert';
    const x = node.position.x + 1/node.scale;
    const y = xAxis ? node.position.y + 20/node.scale : node.position.y;

    return Array.from({ length: spacing}, (_,i) => 
        {
            const val = Math.round((currDim * (i + Math.round(dir/currDim))));
            return <text style={{pointerEvents:'none'}} key={key+i}  opacity={0.5} x={x + (xAxis ? currDim * i : 0)} y={y + (xAxis ? 0 : currDim * i)} fill={COLORS.secondary} fontSize={20/node.scale}>{val}</text>
        }
    )
}

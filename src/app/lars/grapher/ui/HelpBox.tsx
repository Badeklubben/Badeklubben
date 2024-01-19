export default function HelpBox({
    controls,
    active,
}:{
    controls : {[key : string] : string};
    active : boolean;
}) {
    return (
        active && 
        <div className='help'>          
            {Object.entries(controls).map(([key,value],idx) => {
                return <div key={key + idx} className='help-data'>
                    <div>{key}</div>
                    <div>{value}</div>
                </div>
            })}
        </div>
    )
}
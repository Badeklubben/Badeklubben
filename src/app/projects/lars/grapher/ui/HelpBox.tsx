export default function HelpBox({
    controls,
    active,
    setActive,
}:{
    controls : {[key : string] : string};
    active : boolean;
    setActive : React.Dispatch<React.SetStateAction<boolean>>,
}) {
    return (
        active && 
        <div className='floating c'>
            <div className='floating info' onClick={() => setActive(prev => false)}>    
                <div className="title">HELP</div>      
                {Object.entries(controls).map(([key,value],idx) => {
                    return <div key={key + idx} className='data'>
                        <div>{key}</div>
                        <div>{value}</div>
                    </div>
                })}
            </div>
        </div>
    )
}
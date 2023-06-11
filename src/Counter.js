import React,{useState} from "react";
function Counter()
{
    const [number,setNumber]=useState(0)

    return (
        <>
            <div style={{display:"flex"
            }}>
                <button onClick={ ()=>setNumber(number+1)}>
                    Increase
                </button>
                <div>{ number}</div>
                <button onClick={()=>setNumber(number-1)}>Decrease</button>
            </div>
        </>
    )

}
export default Counter;
import React, {useState, useEffect, useRef} from "react";

function Component(){

    const ref = useRef(0);

    useEffect(()=> {
        console.log("Rendered")
    });

    function handleClick(){
        ref.current++;
        console.log(ref.current);
    }

    return(
        <>
        <button onClick= {handleClick} >Click Me</button>
        </>
    );
}

export default Component
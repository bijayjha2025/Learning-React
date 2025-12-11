import React, {useState, useEffect, useRef} from "react";

function Component(){

    const inputRef = useRef(null);

    useEffect(()=> {
        console.log("Rendered")
    });

    function handleClick(){
        inputRef.current.focus();
        inputRef.current.style.backgroundColor = "green";
    }

    return(
        <>
        <button onClick= {handleClick} >Click Me</button><br></br>
        <input ref = {inputRef}/>
        </>
    );
}

export default Component
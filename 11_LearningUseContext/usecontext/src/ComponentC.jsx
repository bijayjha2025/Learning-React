
import React, {useContext} from "react";
import { userContext } from "./ComponentA.jsx";

import ComponentD from "./ComponentD.jsx";

function ComponentC(){
    const user = useContext(userContext);
    
    return(
        <div className="container">
            <h1>Component C</h1>
            <h2>{`How are you ${user}`}</h2>
            <ComponentD/>
        </div>
    );
}

export default ComponentC
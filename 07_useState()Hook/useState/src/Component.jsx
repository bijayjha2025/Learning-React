import { useState } from "react";

function Component(){
    const [name, setName]= useState();
    const [age, setAge]= useState(0);

    const updateName = () => {
        setName("Bob");
    }

    return(
        <div>
            <p>Name: {name}</p>
            <button onClick={updateName}>Set Name</button>

            <p>Name: {age}</p>
            <button onClick={incrementAge}>Increment Age</button>
        </div>
    );
}

export default Component
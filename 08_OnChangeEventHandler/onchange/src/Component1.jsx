

import React, {useState} from 'react';

function Component1(){

    const [name, setName] = useState("");
    const [quantity, setQuantity] = useState();

    function handleNameChange(event){
        setName(event.target.value);
    }

    function handleQuantityChange(event){
        setQuantity(event.target.value);
    }

    return(
        <>
        <div>
            <input value={name} onChange={handleNameChange}></input>
            <p>Name: {name}</p>

            <input value={quantity} onChange={handleQuantityChange}></input>
            <p>Quantity: {quantity}</p>

        </div>
        </>

    );

}

export default Component1
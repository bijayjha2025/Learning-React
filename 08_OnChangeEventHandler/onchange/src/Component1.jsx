

import React, {use, useState} from 'react';

function Component1(){

    const [name, setName] = useState("");
    const [quantity, setQuantity] = useState();
    const [comment, setComment] = useState("");
    const [payment, setPayment] = useState("");

    function handleNameChange(event){
        setName(event.target.value);
    }

    function handleQuantityChange(event){
        setQuantity(event.target.value);
    }

    function handleComment(event){
        setComment(event.target.value);
    }

    function handlePayment(event){
        setPayment(event.target.value);
    }

    return(
        <>
        <div>
            <input value={name} onChange={handleNameChange}></input>
            <p>Name: {name}</p>

            <input value={quantity} onChange={handleQuantityChange}></input>
            <p>Quantity: {quantity}</p>

            <textarea value={comment} onChange={handleComment} placeholder='Enter anything'></textarea>
            <p>Comment: {comment}</p>

            <select  value={payment} onChange={handlePayment}>
                <option value="">Select option</option>
                <option value="COD">COD</option>
                <option value="connectIPS">ConnectIPS</option>
                <option value="eSewa">eSewa</option>
                <option value="Khalti">Khalti</option>
            </select>
            <p>Payment: {payment}</p>

        </div>
        </>

    );

}

export default Component1
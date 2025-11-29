
import React, {useState} from 'react'

function Component1(){

    const [food, setFood] = useState({price: 600,
                                      brand: "WaiWai",
                                      type: "Packed" });



    function handlePriceChange(event){
        setFood(f => ({...f, price: event.target.value}));
    }

    function handleBrandChange(event){
        setFood(f => ({...f, brand: event.target.value}));
    }

    function handleTypeChange(event){
        setFood(f => ({...f, type: event.target.value}));
    }


    return(
        <>
         <div>
            <p>Your favorite food is: {food.price} {food.brand} {food.type}</p>

            <input type="number" value={food.price} onChange={handlePriceChange}/><br></br>
            <input type= "text" value={food.brand} onChange={handleBrandChange}/><br></br>
            <input type="text" value={food.type} onChange={handleTypeChange}/><br></br>
         </div>;
        </>
    );
}

export default Component1
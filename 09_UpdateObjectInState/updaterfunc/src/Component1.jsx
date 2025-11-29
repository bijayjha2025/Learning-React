
import React, {useState} from 'react'

function Component1(){

    const [food, setFood] = useState({price: 600,
                                      brand: "WaiWai",
                                      type: "Packed" });

    return(
        <>
         <div>
            <p>Your favorite food is: {food.price} {food.brand} {food.type}</p>

            <input type="number" value={food.price}/><br></br>
            <input type= "text" value={food.brand}/><br></br>
            <input type="text" value={food.type}/><br></br>
         </div>;
        </>
    );
}

export default Component1
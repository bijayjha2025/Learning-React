
import React, {use, useState} from 'react'

function Component2(){

    const [foods, setFoods] = useState(["Pizza", "Burger", "Roll"]);


    return(
        <>
        <div>
            <h2>List of foods</h2>
            <ul>
                {foods.map((food, index) => <li key={index}>{food}</li>)}
            </ul>
            <input type='text' id='foodEntered' placeholder='Enter food name'/>
            <button onClick={handleAddFood}>Add Food</button>
        </div>
        
        
        </>

    );
}

export default Component2
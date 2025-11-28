
import React, {useState} from 'react';

function Colorselector(){

    const [color, setColor] = useState('#FFFFFF');

    function handleColorChange(event){
        setColor(event.target.value);
    }
    
    return(
        <>
        <div className='colorSelectorContainer'>
            <h1>Color Selector</h1>
            <div className='colorDisplay' style={{backgroundColor: color}}>
                <p>Selected Color: {color}</p>
            </div>
            <label>Select a color:</label>
            <input type='color' value={color} onChange={handleColorChange}></input>
        </div>
        
        </>
    );
}

export default Colorselector
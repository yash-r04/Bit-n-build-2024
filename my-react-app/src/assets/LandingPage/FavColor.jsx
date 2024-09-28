
import React, {useState} from 'react';

function FavColor(){

    const [color, setColor] = useState("#FFFFFF");

    function handleColorChange(event){
        setColor(event.target.value);
    }
    return(<div className="card1">
    <div className = "color-picker-container">
        <div className="color-display" style={{backgroundColor: color}}></div>
            <label>Select Favourite color:</label>
            <input type="color" value={color} onChange={handleColorChange}/>
       </div>
       </div>
       );
}
export default FavColor
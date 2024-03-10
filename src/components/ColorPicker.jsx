import React,{useState} from "react";


function ColorPicker(){

    const [color,setColor]=useState("#fffff");

    function handleColor(event){
        setColor(event.target.value);

    }


    return (
        <div className="color-container">
            <h1>color picker</h1>
            <div className="selected-display" style={{backgroundColor:color}}>
                <p>
                    selected color :{color}
                </p>
            </div><br />
            <input type="color" value={color} onChange={handleColor} />
        </div>
    )
}

export default ColorPicker;
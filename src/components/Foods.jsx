import React,{useState} from "react";

function Foods(){
    const [foods,setFoods]=useState([]);

    function addFood(){
        const newFood=document.getElementById("food-input").value;
        document.getElementById("food-input").value;

        setFoods(f=>[...f,newFood])

    }
    function deleteFood(){

    }
    
    return(
        <div>
            <h1>foods</h1>
            <ul>
                {foods.map((food,index)=><li key={index}> {food}</li>)}
            </ul>
            <input type="text" id="food-input" placeholder="enter food name" /><br />
            <button onClick={addFood}>add food</button>
        </div>
    )

}

export default Foods;
import React,{useState} from "react";

function Car(){
    const [car,setCar]=useState({model:"ford",make:"mustang",year:2023})

    function handleModel(event){
        setCar(c=>({...c,model:event.target.value}));
    }
    function handleMake(event){
        setCar(c=>({...c,make:event.target.value}));
    }
    function handleYear(event){
        setCar(c=>({...c,year:event.target.value}));
    }

    return(<div>
        <input type="text" value={car.model} onChange={handleModel} /> model <br />
        <input type="text" value={car.make} onChange={handleMake}/>make <br />
        <input type="number" value={car.year} onChange={handleYear}/> year <br />

        <p> favourite car is {car.model} {car.make} {car.year}</p>
    </div>

    )
}
export default Car;
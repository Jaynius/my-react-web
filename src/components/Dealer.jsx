import React,{useState} from "react";

function Dealer(){
    const [cars,setCars]=useState([])
    const [carMake,setCarMake]=useState("ford");
    const [carModel,setCarModel]=useState("mustang");
    const [carYear,setCarYear]=useState(new Date().getFullYear);

    function addCar(){
        const newCar={make:carMake,
                    model:carModel,
                    year:carYear};
        setCars(c=>[...c,newCar]);
        setCarMake("")
        setCarModel("")
        setCarYear(new Date().getFullYear);           
    }
    function removeCar(index){
        setCars(cars.filter((_,i)=>(i !==index)));

    }
    function handleMake(event){
        setCarMake(event.target.value);
    }

    function handleModel(event){
        setCarModel(event.target.value);
    }

    function handleYear(event){
        setCarYear(event.target.value);
    }

    return(
        <div>
            <h1>list of cars</h1><br />
            <ul>
                {cars.map((car,index)=><li key={index} onClick={()=>removeCar(index)}>{car.carMake} {car.carModel} {car.carYear}</li>)}
            </ul>
            <br />
            <input type="text" value={carMake} onChange={handleMake}/><br />
            <input type="text" value={carModel} onChange={handleModel} /><br />
            <input type="number" value={carYear} onChange={handleYear} /><br />
            <button onClick={addCar}>add car</button>
        </div>
    );
}
export default Dealer;
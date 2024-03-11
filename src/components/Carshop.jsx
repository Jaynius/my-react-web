import React,{useState} from "react";
function CarShop(){
    const [cars,setCars]=useState([]);
    const [carMake,setMake]=useState("")
    const [carModel, setModel]=useState("");
    const [carYear,setYear]=useState();

    function addCar(){
        const newCar={
            make:carMake,
            model:carModel,
            year:carYear
        }

        setCars(c=>[...c,newCar]);
        setMake("");
        setModel("");
        setYear("");

    }

    function removeCar(index){
        setCars(c=> c.filter((_,i)=>i !==index))
        // setCars(cars.filter((_,i)=>(i !==index)));
    }
    
    function handleMake(event){
        setMake(event.target.value);
    }

    function handleModel(event){
        setModel(event.target.value)
    }

    function handleYear(event){
        setYear(event.target.value);
    }


    return (
        <div>
            <h1>list of cars</h1>
            <ol>
                {cars.map((car,index)=><li key={index} onClick={()=>removeCar(index)} > {car.make} {car.model} {car.year}</li>)}
            </ol>
            <label >car make</label><br />
            <input type="text"  onChange={handleMake} value={carMake}  /><br />
            <label > car model</label><br />
            <input type="text"  onChange={handleModel} value={carModel}  /><br />
            <label > year of manufacture</label><br />
            <input type="number" onChange={handleYear} value={carYear} /><br />
            <button onClick={addCar}>add car</button>
            
        </div>
    )

}

export default CarShop;
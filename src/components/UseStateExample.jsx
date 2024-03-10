import React,{useState} from "react";

function UseStateExample(){
    const [name, setName]=useState("Guest");
    const[age,setAge]=useState(0);
    const[isEmployed,setStatus]=useState(false);

    const setUserName=()=>{
        setName("Bram");

    }
    const incrementAge=()=>{
        setAge(age+1);
    }
    const setEmployment=()=>{
        setStatus(!isEmployed);
    }
    

    return(<div>
        <p>Name: {name}</p>
        <button onClick={setUserName}> set name</button>

        <p>Age: {age}</p>
        <button onClick={incrementAge}> set age</button>

        <p>Employed: {isEmployed ? "yes":"no"}</p>
        <button onClick={setEmployment}>set status</button>
    </div>)

}

export default UseStateExample;
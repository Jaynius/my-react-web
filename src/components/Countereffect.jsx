import React,{useState,useEffect} from "react";

function CounterEffect(){
    const [count, setCount]=useState(0);
    const [color,setcolor]=useState("green")

    useEffect(()=>{
        document.title=`count ${count} ${color}`
    },[count,color])

    function increment(){
        setCount(c=>c+1);
            }

    function decrement(){
        setCount(c=>c-1);
    }

    function changeColor(){
        setcolor(c=>c==="green" ? "red":"green")
    }

    return(
        <div className="counter-container">
            <h1 style={{color:color}} value={count}  > count: {count}</h1><br />
            <button onClick={increment}>increment counter</button>
            <button onClick={decrement}>decrement counter</button>
            <button onClick={changeColor}>change color</button>
        </div>
    );

}
export default CounterEffect;
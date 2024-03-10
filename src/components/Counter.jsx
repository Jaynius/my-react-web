import React,{useState} from "react";

function Counter(){
    const [score,setScore]=useState(10);

    const resetScore=()=>setScore(10);

    const incrementscore=()=>setScore(score+1);
    const decrementScore=()=>setScore(score-1);


return(
    <div className="score">
        <p className="content-display" >score: {score}</p>
        <button className="reset"onClick={resetScore}>Reset Score</button>
        <button className="increment" onClick={incrementscore}>Increment Score</button>
        <button className="decrement" onClick={decrementScore}>Decrement score</button>
    </div>
)
}

export default Counter;

import React,{useState} from "react";
function Todo(){
    const [tasks,setTasks]=useState(["eat breakfast"]);
    const [newTask,setNewtask]=useState("");

    function handleInputchange(event){
        setNewtask(event.target.value);
        
    }

    function addTask(){
        if(newTask.trim() !==""){
        setTasks(t=>[...t,newTask])
        setNewtask("");
        }
    
    }
    
    function removeTask(index){
      const updatedTask=tasks.filter((element,i)=>i !==index);
      setTasks(updatedTask);

    }
    function moveUp(index){
        if(index>0){
            const updatedTask=[...tasks]
            [updatedTask[index],updatedTask[index - 1]]=[updatedTask[index - 1],updatedTask[index]]
            setTasks(updatedTask);
        }

    }
    function moveDown(index){
        if(index <tasks.length - 1){
            const updatedTask=[...tasks]
            [updatedTask[index],updatedTask[index + 1]]=[updatedTask[index + 1],updatedTask[index]]
            setTasks(updatedTask);
        }

    }

    return(<div className="to-do-container">
        <h1>Brams To do list</h1>
        <div className="tasks-container">
            <input type="text" value={newTask} placeholder="enter task" onChange={handleInputchange}/>
            <button className="add-btn" onClick={addTask}>Add Task</button>
            <ol>
                {tasks.map((task,index)=><li key={index}>
                    <span className="text">{task}</span>
                    <button className="up-btn" onClick={()=>moveUp(index)}>Up</button>
                    <button className="down-btn" onClick={()=>moveDown(index)}> down</button>
                    <button className="delete-btn" onClick={()=>removeTask(index)}>delete task</button>
                </li>)}
            </ol>

        </div>

    </div>)
}
export default Todo;
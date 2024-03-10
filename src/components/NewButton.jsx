 function NewButton(){
    let count=0;

    const handleClick=(e)=>e.target.textContent="Ouch";
    //const handleClick2=(name)=>console.log(`${name} stop clicking`)
    const handleClick2=(name)=>{
        if(count<3){
            count++;
            console.log(`${name} youve clickes ${count} times`)
        }
        else{
            console.log(`${name} stop clicking many times`)
        }

    }
return(<>
    <button onClick={()=>handleClick2("bram")}>click me</button>
    <button onDoubleClick={(e)=>handleClick(e)}> click me too</button>
    </>
);
}

export default NewButton;
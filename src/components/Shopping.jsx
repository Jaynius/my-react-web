import React,{useState} from "react";

function Shopping(){
    const [name,setName]=useState("Guest");
    const [quantity,setQuantity]=useState(1);
    const [comment,setComment]=useState("");
    const [payment, setPayment]=useState("");
    const [shipping, setShipping]=useState("");

    function handleNamechange(event){
        setName(event.target.value);
    }

    function handleQuantitychange(event){
        setQuantity(event.target.value);
    }
    function handleCommentChange(event){
        setComment(event.target.value);
    }
    function handlePayment(event){
        setPayment(event.target.value);
    }

    function handleshipping(event){
        setShipping(event.target.value);
    }
    return(
    <div className="shopping-container">  
        <p>Name: {name}</p>
        <input type="text" onChange={handleNamechange}/>
        <p>Quantity: {quantity}</p>
        <input type="number" onChange={handleQuantitychange} />
        <p>Comment: {comment} </p>
        <textarea placeholder="enter delivery comments" 
        cols="30" rows="10" 
        onChange={handleCommentChange}></textarea >
        <p>
        <select onChange={handlePayment}>
            <option value=""> select payment option</option>
            <option value="visa"> visa</option>
            <option value="mastercad"> mastercard</option>
            <option value="mpesa">mpesa</option>
        </select>
        </p>

        <p>payment: {payment}</p>
        <label >
            <input type="radio" value="pick up" 
            checked={shipping==="pick up"} 
            onChange={handleshipping}
            />
            pick up
        </label><br />
        <label >
            <input type="radio" value="ups delivery" 
            checked={shipping==="ups delivery"} 
            onChange={handleshipping}/>
            ups delivery
        </label> 
        <p>Shipping: {shipping}</p>

    </div>)



}
export default Shopping;
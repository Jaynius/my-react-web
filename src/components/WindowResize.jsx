import React,{useState,useEffect} from "react";

function WindowResize(){
    const [width,setWidth]=useState(window.innerWidth);
    const [height, setHeight]=useState(window.innerHeight);


    useEffect(()=>{
        addEventListener("resize",handleResize);

        return(removeEventListener("resize",handleResize))
    })
    function handleResize(){
        setHeight(window.innerHeight);
        setWidth(window.innerWidth);
    }

    return(
        <dir>
            <p> width: {width}px</p>
            <p>height: {height}px</p>
        </dir>
    )

}
export default WindowResize;
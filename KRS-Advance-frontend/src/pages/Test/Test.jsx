import { useState } from "react";
import { useEffect } from "react";
export default function Test(){
    const [num, setNum]= useState(0);
    const [num2, setNum2]= useState(0);

    function click(){
        // var n= num+1;
        // setNum(n);
        setNum ((prev)=>(prev=prev+1));
    }
    function click1(){
        // var n= num+1;
        // setNum(n);
        setNum2 ((prev)=>(prev=prev+1));
    }
    useEffect(()=>{
        setTimeout(()=>{ 
        setNum(10);
        }
        ,500) ;     
        console.log("called");
    },[num2]);

return(
    <div>
        <center>Test
        <div>{num}</div>
        <button onClick={click}>Increment</button>
        <br />
        <br />
        <br />
        <br />
        <div>{num2}</div>
        <button onClick={click1}>Change</button>
        </center>
    </div>
);
} 
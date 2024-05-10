import React, {useState} from "react";

export default function Practice(){

    function decrementCount(){
        // setCount(count-1);
        setCount(prevCount => prevCount-1);
    }

    function incrementCount(){
        setCount(prevCount => prevCount+1);
    }

    const[count, setCount] = useState(4)
    return (
    <>
    <button onClick={decrementCount}>-</button>
    <span>{count}</span>
    <button onClick={incrementCount} >+</button>
    </>
    )
}
import { useEffect, useState } from "react";

export default function useDebounce(initialValue="",delay=1000){
    const[debounceValue,setDebounceValue]=useState(initialValue);
    useEffect(()=>{
        const timer = setTimeout(()=>{
         setDebounceValue(initialValue)
        },1000);
        return()=>{
            clearTimeout(timer)
        }
    },[delay,initialValue])
    return debounceValue
}
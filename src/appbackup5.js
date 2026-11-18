import { BrowserRouter as Router , Routes, Route,Link } from "react-router-dom";
import Laddertosuccesshome from "./Laddertosucesshome";
import { useEffect, useState } from "react";


function App()
{
  const[data,setData]=useState(0)
   const[count,setCount]=useState(10)
  useEffect(()=>{
    console.log("hello useeffect called")
  },[])

  useEffect(()=>{
    console.log("hello useeffect 2 called")
  })

  useEffect(()=>{
    //  setData(data+1)  //do not use this 
    console.log("hello useeffect data called")
    if(data>10)
    {
      setData(0)
    }
  },[data])

  useEffect(()=>{
    console.log("hello useeffect count called")
  },[count])
  //  console.log("component rerender")
  return( 
   
    <div>
    <h1>data is :{data}</h1>
    <h1>count is :{count}</h1>
    <button onClick={()=>setData(data+1)}>increase data</button>
        <button onClick={()=>setCount(count+1)}>increase count</button>
    
    </div>
   
  
  )
}
export default App
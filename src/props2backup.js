import Simplecalculator from "./Simplecalculator";
import "./Cal.css";
import Studentnew from "./Studentnew";
import { useState } from "react";

function App() {
  const[flag,setFlag]=useState(false)
  return (
    <div>
      {/* <Simplecalculator /> */}
      {
        flag==true? <Studentnew name="rohan" course="fullstack"   address={{city: "Rohtak",state: "Haryana",
    pincode: 124001
  }}  />:null
      }
     

  <button onClick={()=>setFlag(!flag)}>Toggle</button>
    </div>
  );
}

export default App;
import { useState } from "react";
import React from "react";
function App() {
  const [a,seta]=useState(10);
 const [b,setb]=useState(30);
  const [c,setc]=useState(10);
function show()
{
  setc(a+b)
  
}
console.log("component rerender")
  return (
    <div>
<p>loremdddd {c}
</p>
<button onClick={show}>login</button>

    </div>
  );
}

export default App;
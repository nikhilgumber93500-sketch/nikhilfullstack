import Header from "./Header";
import Bannerimage from "./Bannerimage";
import Announcement from "./Announcement";
import Footer from "./Footer";
import "./App.css";
import React from "react";
function App() {
  let a=20;
let b=30;
let c=a+b;
function show()
{
  c=70;
  alert(c)
}
  return (
    <div>
<p>loremdddd {c}
</p>
<button onClick={show}>login</button>

    </div>
  );
}

export default App;
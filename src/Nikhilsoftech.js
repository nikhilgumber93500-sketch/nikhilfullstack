import { BrowserRouter as Router , Routes, Route,Link } from "react-router-dom";
import About from "./About";
import Courses from "./Courses";
import Softech from "./Softech";
import Questions from "./Question";
import Contact from "./Contact";
import Login from "./Login";



function App()
{
  
  return( 
   
    <div>
       <Router>
        {/* <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/course">Course</Link>
<Link to="/question">Question</Link>
<Link to="/contact">Contact</Link> */}
<Routes>
          <Route path="/" element={ < Softech/>}/>
          <Route path="/about" element={ <About/>}/>
          <Route path="/course" element={ < Courses/>}/>
          <Route path="/question" element={ < Questions/>}/>
          <Route path="/contact" element={ < Contact/>}/>
            <Route path="/login" element={ < Login/>}/>
          
     </Routes>
</Router>
     
  
    </div>
   
  
  )
}
export default App
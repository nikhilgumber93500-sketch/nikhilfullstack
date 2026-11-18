
import Laddertosuccesshome from "./Laddertosucesshome";
import { BrowserRouter as Router , Routes, Route,Link } from "react-router-dom";

import About2 from "./About2";

import Contact2 from "./Contact2";
import Course2 from "./Course2";
import Faq1 from "./Faq1";



function App()
{
  
  return( 
   
    <div>
       <Router>
      
<Routes>
          <Route path="/" element={ < Laddertosuccesshome/>}/>
          <Route path="/about" element={ <About2/>}/>
          <Route path="/course" element={ < Course2/>}/>
          <Route path="/question" element={ < Faq1/>}/>
          <Route path="/contact" element={ < Contact2/>}/>
            
          
     </Routes>
</Router>
    
    </div>
   
  
  )
}
export default App
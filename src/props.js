import Studentnew from "./Studentnew";
import './App.css'

function App()
{
  return(
    <div>
      <img src="/soft.js" width={300} height={400}/>
      <Studentnew name="Nikhil" course ="Full stack"/>
          <Studentnew name="Bikram" course ="Full stack"/>
    </div>
  );
}
export default App;
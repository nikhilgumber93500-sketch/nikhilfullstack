import FAQ from "./FAQ";
import Footer1 from "./Footer1";
import Header1 from "./Header1";
import Product from "./Product";
import Slider from "./Slider";
import Extra from "./Extra";
import Extra1 from "./Extra1";
import Child from "./Child";
import { useCallback,useState } from "react";
function Softech() {
  const [count, setCount] = useState(0);
   const handleClick = useCallback(() => {
    console.log("Button clicked");
  }, []);

  return (
  <>
   <Header1/>
    {/* <h2>Parent Component</h2>

      <h3>Count: {count}</h3>

      <button onClick={() => setCount(count + 1)}>
        Increase Count
      </button>

      <Child showfunction={handleClick} /> */}
   {/* <Extra name="manan" /> */}
   {/* <Extra1 /> */}
   <Slider />
   <Product/>
   <FAQ/>
   <Footer1/>
   </>
  );
}

export default Softech;
import { useState } from "react";
function Calculator() {
  const [first, setFirst] = useState(0);
  const [second, setSecond] = useState(0);
  const [result, setResult] = useState(0);
  function number1(event)
  {
    setFirst(Number(event.target.value));

  }
   function number2(event)
  {
    setSecond(Number(event.target.value));
    
  }
  function sum() {
    setResult(first + second);
  }

  function minus() {
    setResult(Number(first) - Number(second));
  }

  function mul() {
    setResult(Number(first) * Number(second));
  }

  function div() {
    setResult(Number(first) / Number(second));
  }

  function mod() {
    setResult(Number(first) % Number(second));
  }

  return (
    <div className="calculator">

      <label>Enter first no.</label>
      <input
        type="number"
        onChange={number1}
      />

      <label>Enter second no.</label>
      <input
        type="number"
        onChange={number2}
      />

      <label>Result</label>
      <input value={result} readOnly />

      <div className="buttons">
        <button onClick={sum}>Sum</button>
        <button onClick={minus}>Minus</button>
        <button onClick={mul}>Mul</button>
        <button onClick={div}>Div</button>
        <button onClick={mod}>Mod</button>
      </div>

    </div>
  );
}

export default Calculator;
import React, { useState } from "react";
function Extra1() {
  const [count, setCount] = useState(0);
  const expensiveCalculation = () => {
    console.log("Calculation running...");
    let total = 400000;
    for (let i = 0; i < 100000000; i++) {
      total += i;
    }

    return total;
  };

  const result = expensiveCalculation();

  return (
    <div>
      <h2>Result: {result}</h2>

      <h3>Count: {count}</h3>

      <button onClick={() => setCount(count + 1)}>
        Increase Count
      </button>
    </div>
  );
}

export default Extra1;
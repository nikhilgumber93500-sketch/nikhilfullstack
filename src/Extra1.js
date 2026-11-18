import React, { useState,useMemo } from "react";

function Extra1() {
  const [count, setCount] = useState(0);

  const expensiveCalculation =  useMemo(() => {
    console.log("Calculation running...");

    let total = 0;

    for (let i = 0; i < 10000; i++) {
      total += i;
    }

    return total;
 }, []);


  return (
    <div>
      <h2>Result: {expensiveCalculation}</h2>

      <h3>Count: {count}</h3>

      <button onClick={() => setCount(count + 1)}>
        Increase Count
      </button>
    </div>
  );
}

export default Extra1;
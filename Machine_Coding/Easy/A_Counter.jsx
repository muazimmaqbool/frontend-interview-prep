import React, { useState } from "react";

/*
->Question:
    Create a counter with:
        Increment button
        Decrement button
        Reset button
*/
const A_Counter = () => {
  const [count, setcount] = useState(0);

  const handleRest = () => {
    setcount(0);
  };
  return (
    <div>
      <h2>Counter: {count}</h2>
      <button onClick={() => setcount((prev) => prev + 1)}>+</button>
      <button onClick={() => setcount((prev) => prev - 1)}>-</button>
      <button disabled={count === 0} onClick={handleRest}>
        Reset
      </button>
    </div>
  );
};

export default A_Counter;

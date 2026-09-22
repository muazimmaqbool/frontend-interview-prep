import React, { useState } from "react";
import usePrevious from "./usePreviousHook";

const U_usePreviousHook = () => {
  const [currentCount, setCurrentCount] = useState(0);
  const increment = () => {
    setCurrentCount(currentCount + 1);
  };
  const decrement = () => {
    setCurrentCount(currentCount - 1);
  };
  const reset = () => {
    setCurrentCount(0);
  };
  const previousCount = usePrevious(currentCount);
  return (
    <div>
      <h1>usePrevious Hook</h1>
      <h3>Current Count: {currentCount}</h3>
      <h3>Previous Count: {previousCount}</h3>
      <button onClick={decrement}>Decrement</button>
      <button onClick={reset}>Reset</button>
      <button onClick={increment}>Increment</button>
    </div>
  );
};

export default U_usePreviousHook;

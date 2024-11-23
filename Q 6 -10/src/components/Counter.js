import React, { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);

  const increment = () => setCount(count + 1);
  const decrement = () => setCount(count - 1);

  return (
    <div>
      <p className="text-lg">Counter: {count}</p>
      <button onClick={increment} className="btn btn-primary m-2">
        Increment
      </button>
      <button onClick={decrement} className="btn btn-danger m-2">
        Decrement
      </button>
    </div>
  );
};

export default Counter;

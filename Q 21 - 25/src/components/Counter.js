import React, { useState } from "react";

const UnrelatedItems = React.memo(() => {
  console.log("UnrelatedItems rendered!");
  return (
    <ul className="list-disc pl-4">
      <li>Item 1</li>
      <li>Item 2</li>
      <li>Item 3</li>
    </ul>
  );
});

const Counter = () => {
  const [count, setCount] = useState(0);

  return (
    <div className="p-6 space-y-4">
      <h1 className="text-2xl">Counter: {count}</h1>
      <button
        className="btn btn-primary"
        onClick={() => setCount((prev) => prev + 1)}
      >
        Increment
      </button>
      <UnrelatedItems />
    </div>
  );
};

export default Counter;

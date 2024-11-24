import React, { useState } from "react";
import Child from "./Child";

const Parent = () => {
  const [parentCount, setParentCount] = useState(0);
  const [otherState, setOtherState] = useState("Initial State");

  return (
    <div className="p-6 space-y-4">
      <button
        className="btn btn-primary"
        onClick={() => setParentCount((prev) => prev + 1)}
      >
        Increment Parent Count ({parentCount})
      </button>
      <button
        className="btn btn-secondary"
        onClick={() => setOtherState("Updated!")}
      >
        Update Other State
      </button>

      <p className="text-gray-700">Other State: {otherState}</p>
      <Child count={parentCount} />
    </div>
  );
};

export default Parent;

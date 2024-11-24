import React from "react";

const Child = React.memo(({ count }) => {
  console.log("Child rendered!");
  return (
    <div className="card shadow-lg p-4">
      <h2 className="text-lg font-bold">Child Component</h2>
      <p>Count from Parent: {count}</p>
    </div>
  );
});

export default Child;

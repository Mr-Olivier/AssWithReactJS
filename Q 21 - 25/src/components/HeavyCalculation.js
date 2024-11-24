import React, { useState, useMemo } from "react";

const calculateFactorial = (n) => {
  if (n === undefined || n === null || isNaN(n) || n < 0) {
    return 0; // Handle invalid input
  }
  if (n === 0 || n === 1) {
    return 1; // Base case
  }
  return n * calculateFactorial(n - 1); // Recursive case
};

const HeavyCalculation = React.memo(() => {
  const [input, setInput] = useState("");

  // Memoize the result to avoid re-calculating unnecessarily
  const factorialResult = useMemo(() => {
    const num = parseInt(input, 10);
    return calculateFactorial(num);
  }, [input]);

  return (
    <div
      className="p-6 bg-white shadow-md rounded-lg"
      style={{ width: "300px", marginLeft: "20px" }}
    >
      <h2 className="text-xl font-bold mb-4">Factorial Calculator</h2>
      <input
        type="number"
        placeholder="Enter a number"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        className="w-full p-2 border rounded-md mb-4"
      />
      <p className="text-lg">
        Factorial: <span className="font-semibold">{factorialResult}</span>
      </p>
    </div>
  );
});

export default HeavyCalculation;

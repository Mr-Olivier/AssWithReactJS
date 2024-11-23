import React, { useState } from "react";

const ControlledForm = () => {
  const [inputValue, setInputValue] = useState("");

  return (
    <div className="card bg-base-100 shadow-md p-6">
      <form>
        <div className="form-control mb-4">
          <label className="label">
            <span className="label-text">Enter Text</span>
          </label>
          <input
            type="text"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            className="input input-bordered"
          />
        </div>
      </form>
      <p className="text-primary">You entered: {inputValue}</p>
    </div>
  );
};

export default ControlledForm;

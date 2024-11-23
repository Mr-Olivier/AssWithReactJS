import React, { useState } from "react";

const UserForm = () => {
  const [inputValue, setInputValue] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(inputValue);
  };

  return (
    <form onSubmit={handleSubmit} className="p-4 bg-gray-100 rounded shadow-md">
      <label className="block mb-2 text-gray-700">Your Input:</label>
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        className="p-2 border rounded w-full mb-4"
      />
      <button type="submit" className="btn btn-primary">
        Submit
      </button>
    </form>
  );
};

export default UserForm;

import React, { useState } from "react";

const CheckboxForm = () => {
  const [selectedOptions, setSelectedOptions] = useState([]);

  const handleChange = (e) => {
    const value = e.target.value;
    setSelectedOptions((prev) =>
      prev.includes(value)
        ? prev.filter((option) => option !== value)
        : [...prev, value]
    );
  };

  return (
    <div className="p-6 bg-base-100 shadow-md rounded-md">
      <h2 className="text-2xl font-bold mb-4 text-primary">
        Select Your Options
      </h2>
      <form className="space-y-4">
        <label className="flex items-center space-x-2">
          <input
            type="checkbox"
            value="Option 1"
            onChange={handleChange}
            className="checkbox checkbox-primary"
          />
          <span className="text-gray-800 hover:text-blue-600 transition duration-300">
            Option 1
          </span>
        </label>
        <label className="flex items-center space-x-2">
          <input
            type="checkbox"
            value="Option 2"
            onChange={handleChange}
            className="checkbox checkbox-primary"
          />
          <span className="text-gray-800 hover:text-blue-600 transition duration-300">
            Option 2
          </span>
        </label>
        <label className="flex items-center space-x-2">
          <input
            type="checkbox"
            value="Option 3"
            onChange={handleChange}
            className="checkbox checkbox-primary"
          />
          <span className="text-gray-800 hover:text-blue-600 transition duration-300">
            Option 3
          </span>
        </label>
      </form>
      <div className="mt-6">
        <h3 className="text-xl font-semibold text-secondary">
          Selected Options:
        </h3>
        <ul className="list-disc pl-6">
          {selectedOptions.length > 0 ? (
            selectedOptions.map((option, index) => (
              <li
                key={index}
                className="mt-1 text-lg text-blue-700 font-semibold"
              >
                {option}
              </li>
            ))
          ) : (
            <p className="text-sm text-gray-400 mt-1">No options selected.</p>
          )}
        </ul>
      </div>
    </div>
  );
};

export default CheckboxForm;

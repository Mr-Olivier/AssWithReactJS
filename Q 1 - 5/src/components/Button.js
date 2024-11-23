import React from "react";

function Button({ text, color }) {
  return (
    <button
      className={`btn btn-${color} text-white p-2 rounded-lg shadow-md m-2`}
    >
      {text}
    </button>
  );
}

export default Button;

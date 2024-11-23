import React, { useState } from "react";

const ButtonToggle = () => {
  const [isOn, setIsOn] = useState(false);

  const toggleState = () => {
    setIsOn(!isOn);
  };

  return (
    <button
      onClick={toggleState}
      className={`p-2 rounded ${
        isOn ? "bg-green-500" : "bg-red-500"
      } text-white`}
    >
      {isOn ? "ON" : "OFF"}
    </button>
  );
};

export default ButtonToggle;

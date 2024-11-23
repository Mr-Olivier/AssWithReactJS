import React, { useState } from "react";

const HoverColor = () => {
  const [bgColor, setBgColor] = useState("bg-white");

  const handleMouseOver = () => setBgColor("bg-blue-500");
  const handleMouseOut = () => setBgColor("bg-white");

  return (
    <div
      className={`p-6 ${bgColor} transition-colors duration-300`}
      onMouseOver={handleMouseOver}
      onMouseOut={handleMouseOut}
    >
      <p className="text-white text-lg hover:font-bold ">It's Hovered</p>
    </div>
  );
};

export default HoverColor;

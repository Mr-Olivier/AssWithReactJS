import React from "react";
import Hobby from "./Hobby";

function ParentComponent() {
  const hobbies = ["Reading", "gaming", "Cycling"];

  return (
    <div className="bg-base-200 p-4 rounded-lg shadow-lg">
      <h2 className="text-xl font-bold mb-4">My Hobbies</h2>
      {hobbies.map((hobby, index) => (
        <Hobby key={index} hobby={hobby} />
      ))}
    </div>
  );
}

export default ParentComponent;

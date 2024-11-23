import React from "react";

function CurrentDate() {
  const today = new Date().toLocaleDateString();

  return (
    <div className="bg-secondary text-white p-4 rounded-lg shadow-lg">
      <p className="text-lg">Today's Date: {today}</p>
    </div>
  );
}

export default CurrentDate;

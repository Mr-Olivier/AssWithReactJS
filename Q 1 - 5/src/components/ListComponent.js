import React from "react";

function ListComponent() {
  const items = ["Item 1", "Item 2", "Item 3"];

  return (
    <ul className="list-disc list-inside bg-neutral text-white p-4 rounde-lg shadow-lg">
      {items.map((item, index) => (
        <li key={index}>{item}</li>
      ))}
    </ul>
  );
}

export default ListComponent;

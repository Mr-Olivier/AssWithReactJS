import React from "react";

function ProfileCard({ name, age, email }) {
  return (
    <div className="card bg-accent text-white p-4 rounded-lg shadow-lg">
      <h2 className="text-xl font-bold">{name}</h2>
      <p>Age: {age}</p>
      <p>Email: {email}</p>
    </div>
  );
}

export default ProfileCard;

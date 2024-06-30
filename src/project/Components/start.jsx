import React from "react";

export default function Start({ setUsername }) {
  const handleClick = () => {
    const name = prompt("Please enter your name:");
    if (name) {
      setUsername(name);
    } else {
      alert('Please enter your name');
    }
  };

  return (
    <div className="start">
      <button className="startButton" onClick={handleClick}>
        Start
      </button>
    </div>
  );
}

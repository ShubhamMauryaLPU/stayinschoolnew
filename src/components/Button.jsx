import React from "react";

const Button = ({ name, className = "" }) => {
  return (
    <button
      className={`p-2 hover:bg-[rgb(232,168,116)] border-1 rounded-2xl text-lg font-bold ${className}`}
    >
      {name}
    </button>
  );
};

export default Button;

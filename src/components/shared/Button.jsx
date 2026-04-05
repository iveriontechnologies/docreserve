import React from "react";

const Button = ({ name }) => {
  return (
    <button className="btn-primary px-4 py-2 text-sm font-semibold cursor-pointer transition-transform duration-200 hover:scale-105">
      {name}
    </button>
  );
};

export default Button;

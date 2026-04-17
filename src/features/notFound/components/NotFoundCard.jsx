import React from "react";
import { Link } from "react-router-dom";

const NotFoundCard = ({ color, name, text, icon, link }) => {
  return (
    <Link
      to={`${link}`}
      className="bg-white rounded-2xl flex flex-col gap-4 p-6 w-[282.67px]"
    >
      <div className={`${color} p-3 rounded-full w-fit`}>
        <img src={icon} alt="" />
      </div>
      <h4 className="[font-family:var(--font-monrope)] text-[20px] font-bold">
        {name}
      </h4>
      <p className="w-[218.67px] text-sm [font-family:var(--font-inter)] text-[var(--on-surface-variant)]">
        {text}
      </p>
    </Link>
  );
};

export default NotFoundCard;

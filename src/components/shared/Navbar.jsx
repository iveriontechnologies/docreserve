import React from "react";
import { Link, NavLink } from "react-router-dom";
import Button from "./Button";

const Navbar = () => {
  return (
    <div className="bg-[var(--surface-container-lowest)]">
      <div className="container flex justify-between items-center py-2">
        <Link
          to={"/"}
          className="[font-family:var(--font-monrope)] font-bold sm:font-extrabold text-[var(--primary)] text-[20px] sm:text-2xl"
        >
          DocReserve
        </Link>

        <ul className="hidden md:flex gap-4 items-center">
          <NavLink to={"/"}>
            <p className="text-sm font-semibold">Home</p>
            <hr className="active-underline" />
          </NavLink>
          <NavLink to={"/services"}>
            <p className="text-sm font-semibold">Service</p>
            <hr className="active-underline" />
          </NavLink>
          <NavLink to={"/about"}>
            <p className="text-sm font-semibold">About</p>
            <hr className="active-underline" />
          </NavLink>
          <NavLink to={"/contact"}>
            <p className="text-sm font-semibold">Contact</p>
            <hr className="active-underline" />
          </NavLink>
        </ul>

        <Button name={"Book Now"} />
      </div>
    </div>
  );
};

export default Navbar;

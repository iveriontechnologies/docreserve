import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="py-8">
      <div className="container flex flex-col gap-4">
        {/* Upper Layer */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {/* ==============Box 1 =============*/}
          <div className="flex flex-col gap-2">
            <Link
              to={"/"}
              className="[font-family:var(--font-monrope)] font-bold sm:font-extrabold text-[var(--primary)] text-[20px] sm:text-2xl"
            >
              DocReserve
            </Link>

            <p className="text-body-lg text-[var(--on-surface-variant)] hover:text-[var(--on-surface)]">
              Providing compassionate, expert medical care for the entire
              community.
            </p>
          </div>
          {/* ==============Box 2 =============*/}

          <ul className="flex flex-col gap-2">
            <p className="font-bold [font-family:var(--font-inter)]">
              Quick Links
            </p>
            <Link
              className="text-body-lg text-[var(--on-surface-variant)] hover:text-[var(--on-surface)]"
              to={"/"}
            >
              Home
            </Link>
            <Link
              className="text-body-lg text-[var(--on-surface-variant)] hover:text-[var(--on-surface)]"
              to={"/about"}
            >
              About Us
            </Link>
            <Link
              className="text-body-lg text-[var(--on-surface-variant)] hover:text-[var(--on-surface)]"
              to={"/services"}
            >
              Services
            </Link>
            <Link
              className="text-body-lg text-[var(--on-surface-variant)] hover:text-[var(--on-surface)]"
              to={"/contact"}
            >
              Contact
            </Link>
          </ul>

          {/* ==============Box 3 =============*/}

          <ul className="flex flex-col gap-2">
            <p className="font-bold [font-family:var(--font-inter)]">
              Services
            </p>
            <Link
              className="text-body-lg text-[var(--on-surface-variant)] hover:text-[var(--on-surface)]"
              to={"/services"}
            >
              Genral Checkup
            </Link>
            <Link
              className="text-body-lg text-[var(--on-surface-variant)] hover:text-[var(--on-surface)]"
              to={"/services"}
            >
              Pediatrics
            </Link>
            <Link
              className="text-body-lg text-[var(--on-surface-variant)] hover:text-[var(--on-surface)]"
              to={"/services"}
            >
              Cronic Care
            </Link>
          </ul>

          {/* ==============Box 4 =============*/}

          <ul className="flex flex-col gap-2">
            <p className="font-bold [font-family:var(--font-inter)]">Legal</p>
            <Link to={"#`"}>Privacy Policy</Link>
            <Link to={"#"}>Terms of Service</Link>
            <Link to={"#"}>Accessibility</Link>
          </ul>
        </div>
        {/* Lower Layer */}
        <hr className="bg-[var(--on-surface-variant)]"/>
        <div>
          <p>© 2024 DocReserve. The Clinical Curator. All rights reserved.</p>
          <div></div>
        </div>
      </div>
    </div>
  );
};

export default Footer;

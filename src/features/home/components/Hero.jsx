import React from "react";
import Button from "../../../components/shared/Button";
import { assets } from "../../../assets/images/assets";

const Hero = () => {
  return (
    <div className="w-full">
      <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-10 py-6 lg:py-0">
        {/* ================Left=============== */}
        <div className="relative w-full flex flex-col justify-center px-4 lg:px-17">
          {/* top left */}
          <div className="absolute top-[-80px] left-[-80px] w-[220px] h-[220px] rounded-full bg-blue-400/40 blur-3xl"></div>
          <h1 className="text-4xl lg:text-6xl font-extrabold text-center lg:text-start [font-family:var(--font-monrope)]">
            Book Your Doctors{" "}
            <span className="text-[var(--primary)]">Appointment</span> in
            Minutes
          </h1>
          <p className="mt-4 text-lg text-[var(--on-surface-variant)] text-center lg:text-start [font-family:var(--font-inter)]">
            Experience a curated approach to healthcare. We connect you with
            top-tier specialists through a seamless, editorial-grade interface
            designed for your peace of mind.
          </p>

          <div className="m-auto mt-6 lg:mt-6 lg:ml-0 ">
            <Button name={"Book Now"} />
          </div>
        </div>
        {/* ================Right=============== */}
        <div className="flex justify-center lg:justify-end w-full">
          <div className="relative w-full h-[600px] overflow-hidden bg-[var(--surface-container-low)]">
            {/* top left */}
            <div className="absolute top-[-80px] left-[-80px] w-[220px] h-[220px] rounded-full bg-blue-400/40 blur-3xl"></div>

            {/* top right */}
            <div className="absolute top-[-80px] right-[-80px] w-[220px] h-[220px] rounded-full bg-cyan-300/40 blur-3xl"></div>

            {/* bottom left */}
            <div className="absolute bottom-[-80px] left-[-80px] w-[220px] h-[220px] rounded-full bg-emerald-300/40 blur-3xl"></div>

            {/* bottom right */}
            <div className="absolute bottom-[-80px] right-[-80px] w-[220px] h-[220px] rounded-full bg-indigo-400/40 blur-3xl"></div>

            {/* soft center glow */}
            <div className="absolute inset-0 bg-white/20 backdrop-blur-[40px]"></div>

            {/* optional inner card feel */}
            {/* <div className="absolute inset-4 bg-white/20 backdrop-blur-md border border-white/20"></div> */}

            {/* doctor image */}
            <div className="relative z-10 h-full flex items-end justify-center">
              <img
                src={assets.heroImage}
                alt="Doctor"
                className=" min-h-[400px] object-contain"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;

import React from "react";

const DoctorExperienceCard = ({ color, text, text2 }) => {
  return (
    <div className={`bg-${color} p-4 rounded-lg w-full`}>
      <p className="text-headline-md font-bold text-center sm:text-start w-full">
        {text}
      </p>
      <p className="font-family: var(--font-inter) text-[var(--primary)] font-bold text-center sm:text-start  w-full">
        {text2}
      </p>
    </div>
  );
};

export default DoctorExperienceCard;

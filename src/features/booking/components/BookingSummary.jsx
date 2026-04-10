import React from "react";

const BookingSummary = ({ icon, title, value }) => {
  return (
    <div className="flex items-center gap-2">
      <div className="bg-[var(--surface-container-lowest)] rounded-full p-3 flex items-center gap-4">
        <img src={icon} alt={title} />
      </div>
      <div className="flex flex-col items-start">
        <h3 className="[font-family:var(--font-inter)] font-semibold text-[8px] sm:text-[12px] text-[var(--on-surface-variant)]">
          {title}
        </h3>
        <p className="[font-family:var(--font-inter)] font-semibold text-sm sm:text-base">
          {value}
        </p>
      </div>
    </div>
  );
};

export default BookingSummary;

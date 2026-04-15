import React from "react";

const TimeSlots = ({ isAvailable, isSelected, isBooked, time, onSelect }) => {
  const getButtonState = () => {
    if (isBooked) {
      return "bg-[var(--danger)] border-0 text-white cursor-not-allowed";
    }

    if (!isAvailable) {
      return "bg-gray-300 border-0 text-gray-500 cursor-not-allowed";
    }

    if (isSelected) {
      return "bg-[var(--primary)] border-0 text-white";
    }

    return "text-[var(--tertiary)]";
  };

  const getStatusText = () => {
    if (isBooked) return "BOOKED";
    if (!isAvailable) return "UNAVAILABLE";
    if (isSelected) return "SELECTED";
    return "AVAILABLE";
  };

  const handleClick = () => {
    if (isBooked || !isAvailable) return;
    onSelect(time);
  };

  return (
    <button
      type="button"
      disabled={isBooked || !isAvailable}
      onClick={handleClick}
      className={`w-full rounded-2xl py-2 flex flex-col items-center border
    ${
      isBooked
        ? "bg-red-700 border-0 text-white cursor-not-allowed"
        : !isAvailable
          ? "bg-gray-300 border-0 text-gray-500 cursor-not-allowed"
          : isSelected
            ? "bg-[var(--primary)] border-0 text-white"
            : "bg-[var(--tertiary-container)] border-[#daeae5] text-[var(--tertiary)]"
    }`}
    >
      <p className="[font-family:var(--font-inter)] text-sm sm:text-base font-semibold">
        {time}
      </p>

      <span className="[font-family:var(--font-inter)] text-[8px] sm:text-[10px] font-semibold opacity-60">
        {isBooked
          ? "BOOKED"
          : !isAvailable
            ? "UNAVAILABLE"
            : isSelected
              ? "SELECTED"
              : "AVAILABLE"}
      </span>
    </button>
  );
};

export default TimeSlots;

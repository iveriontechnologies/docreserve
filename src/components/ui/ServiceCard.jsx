import React from "react";
import { icons } from "../../assets/icons/icons";

const ServiceCard = ({ name, icon, description }) => {
  return (
    <div className="flex flex-col items-start gap-4 p-6 rounded-[var(--radius-xl)] bg-[var(--surface-container-lowest)]">
      {/* =================Icon=========== */}
      <div className="bg-[var(--surface-container-highest)] p-4 rounded-[var(--radius-lg)]">
        <img src={icon} alt={name} />
      </div>

      <h3 className="[font-family:var(--font-monrope)] text-2xl font-bold">
        {name || "Chronic Disease"}
      </h3>
      <p className="[font-family:var(--font-inter)]  text-[var(--on-surface-variant)] text-base">
        {description || "Comprehensive care for chronic conditions."}
      </p>
    </div>
  );
};

export default ServiceCard;

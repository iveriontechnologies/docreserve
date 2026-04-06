import { icons } from "../../../assets/icons/icons";

const OpeningHours = () => {
  return (
    <div className="bg-[var(--surface-container-lowest)] rounded-[var(--radius-lg)] px-8 py-8">
      <div className="flex  items-center gap-2">
        <img src={icons.clock_icon} alt="time" />
        <p>Opening Hours</p>
      </div>

      {/* =============Content=============== */}
      <div className="flex flex-col gap-3 mt-4">
        <div className="flex justify-between items-center">
          <p className="[font-family:var(--font-inter)] font-medium text-base text-[var(--on-surface-variant)]">
            Monday-Friday
          </p>
          <p className="[font-family:var(--font-inter)] font-base font-medium">
            08:00 AM — 06:00 PM
          </p>
        </div>
        <div className="flex justify-between items-center">
          <p className="[font-family:var(--font-inter)] font-medium text-base text-[var(--on-surface-variant)]">
            Saturday
          </p>
          <p className="[font-family:var(--font-inter)] text-sm lg:text-base font-medium">
            09:00 AM — 02:00 PM
          </p>
        </div>
        <div className="flex justify-between items-center">
          <p className="[font-family:var(--font-inter)] font-medium text-base text-[var(--on-surface-variant)]">
            Sunday
          </p>
          <p className="[font-family:var(--font-inter)] font-base font-medium text-[#BA1A1A]">
            Closed
          </p>
        </div>
      </div>
    </div>
  );
};

export default OpeningHours;

const ContactInfo = ({ icon, title, text }) => {
  return (
    <div className="flex gap-4 items-center w-full">
      <div className="bg-[var(--primary-container)]/20 p-2 rounded-bl-lg">
        <img src={icon} alt={title} />
      </div>
      <div>
        <p className="[font-famly:var(--font-monrope)] font-medium text-base lg:text-[18px]">
          {title}
        </p>
        <p className="[font-family:var(--font-inter)] text-sm lg:text-base text-[var(--on-surface-variant)] max-w-sm">
          {text}
        </p>
      </div>
    </div>
  );
};

export default ContactInfo;


const Input = ({ name, placeholder, type }) => {
  return (
    <div className="flex flex-col gap-2 w-full">
      <p className="text-body-lg">{name}</p>
      <input
        text={type}
        placeholder={placeholder}
        className="rounded-full bg-[var(--surface-container-highest)] w-full px-4 py-2 outline-none border-none text-[var(--text-display-lg)]"
      />
    </div>
  );
};

export default Input;

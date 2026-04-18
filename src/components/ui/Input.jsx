const Input = ({
  name,
  placeholder,
  type = "text",
  value,
  onChange,
  inputName,
}) => {
  return (
    <div className="flex flex-col gap-2 w-full">
      <p className="text-body-lg">{name}</p>
      <input
        onChange={onChange}
        name={inputName}
        value={value}
        text={type}
        placeholder={placeholder}
        className="rounded-full bg-[var(--surface-container-highest)] w-full px-4 py-2 outline-none border-none text-[var(--text-display-lg)]"
      />
    </div>
  );
};

export default Input;

const Button = ({ name, size = "md", onClick }) => {
  const sizes = {
    sm: "px-3 py-1 text-sm",
    md: "px-4 py-2 text-sm",
    lg: "px-6 py-3 text-base",
  };
  return (
    <button
      className={`btn-primary ${sizes[size]} text-sm font-semibold cursor-pointer transition-transform duration-200 hover:scale-105`}
      onClick={onClick}
    >
      {name}
    </button>
  );
};

export default Button;

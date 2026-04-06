
const Button = ({ name, px = 4, py = 2 }) => {
  return (
    <button
      className={`btn-primary px-${px} py-${py} text-sm font-semibold cursor-pointer transition-transform duration-200 hover:scale-105`}
    >
      {name}
    </button>
  );
};

export default Button;

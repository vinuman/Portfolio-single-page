const Button = ({ text }) => {
  return (
    <button
      className=" w-full h-16 sm:w-50 sm:h-16 mx-auto bg-dark text-secondary
     sm:text-white hover:text-secondary font-bold text-2xl sm:text-4xl uppercase border-secondary border-b-4 tracking-widest"
    >
      {text}
    </button>
  );
};

export default Button;

type ButtonProps = {
  children: React.ReactNode;
};

const Button = ({ children }: ButtonProps) => {
  return (
    <button
      type="submit"
      className="body-m-bold w-full rounded-lg bg-primary-600 px-500 py-200 text-white transition hover:bg-button-hover"
    >
      {children}
    </button>
  );
};
export default Button;

import { cn } from "@/utils/utils";
import { ButtonHTMLAttributes } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
}

const Button = ({ children, className, ...rest }: ButtonProps) => {
  return (
    <button
      type="submit"
      className={cn(
        "body-m-bold w-full rounded-lg bg-primary-600 px-500 py-200 text-white transition hover:bg-button-hover",
        className,
      )}
      {...rest}
    >
      {children}
    </button>
  );
};
export default Button;

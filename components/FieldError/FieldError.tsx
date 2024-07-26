import { cn } from "@/utils/utils";

interface FieldErrorProps {
  message?: string;
  className?: string;
}

const FieldError = ({ className, message }: FieldErrorProps) => {
  if (!message) return null;

  return (
    <em
      className={cn(
        "body-sm absolute -bottom-[22px] left-0 not-italic text-error",
        className,
      )}
    >
      {message}
    </em>
  );
};
export default FieldError;

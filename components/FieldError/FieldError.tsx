interface FieldErrorProps {
  message?: string;
}

const FieldError = ({ message }: FieldErrorProps) => {
  console.log(message);

  if (!message) return null;

  return (
    <em className="body-sm absolute -bottom-[22px] left-0 not-italic text-error">
      {message}
    </em>
  );
};
export default FieldError;

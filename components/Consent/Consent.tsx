import { forwardRef, InputHTMLAttributes, Ref } from "react";
import FieldError from "@/components/FieldError";

interface ConsentProps
  extends Omit<InputHTMLAttributes<HTMLInputElement>, "className"> {
  label?: string;
  error?: string;
}

const Consent = forwardRef(function Consent(
  { label, error, ...rest }: ConsentProps,
  inputRef: Ref<HTMLInputElement>,
) {
  return (
    <div className="relative my-200 flex flex-row items-center gap-200">
      <input type="checkbox" id="consent" ref={inputRef} {...rest} />
      <label htmlFor="consent" className="required">
        {label}
      </label>
      <FieldError message={error} />
    </div>
  );
});
export default Consent;

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
    <div className="relative mb-300 mt-200 flex flex-row items-center gap-200 sm:my-200">
      <input type="checkbox" id="consent" ref={inputRef} {...rest} />
      <label htmlFor="consent" className="required">
        {label}
      </label>
      <FieldError
        message={error}
        className="leading-none max-[483px]:-bottom-[36px]"
      />
    </div>
  );
});
export default Consent;

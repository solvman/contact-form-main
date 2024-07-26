import { cn } from "@/utils/utils";
import React, { InputHTMLAttributes, useId, forwardRef, Ref } from "react";

interface InputProps
  extends Omit<InputHTMLAttributes<HTMLInputElement>, "className"> {
  label?: string;
  error?: string;
}

const Input = forwardRef(function Input(
  { label, error, ...props }: InputProps,
  ref: Ref<HTMLInputElement>,
) {
  const id = useId();
  const inputId = `input-${id}`;

  return (
    <div className="relative flex flex-1 flex-col gap-100">
      <label htmlFor={inputId} className="required">
        {label}
      </label>
      <input
        type="text"
        id={inputId}
        ref={ref}
        {...props}
        className={cn({
          "border-error hover:border-error focus:border-error focus:ring-error active:border-error":
            error,
        })}
      />
      {error && (
        <em className="body-sm absolute -bottom-[22px] left-0 not-italic text-error">
          {error}
        </em>
      )}
    </div>
  );
});

export default Input;

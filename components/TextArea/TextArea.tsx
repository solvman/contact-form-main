import { forwardRef, InputHTMLAttributes, Ref, useId } from "react";
import { cn } from "@/utils/utils";
import FieldError from "@/components/FieldError";

interface TextAreaProps
  extends Omit<InputHTMLAttributes<HTMLTextAreaElement>, "className"> {
  label?: string;
  error?: string;
}

const TextArea = forwardRef(function TextArea(
  { label, error, ...rest }: TextAreaProps,
  inputRef: Ref<HTMLTextAreaElement>,
) {
  const id = useId();
  const elementId = `message-${id}`;

  return (
    <div className="relative flex flex-1 flex-col gap-100">
      <label htmlFor={elementId} className="required">
        {label}
      </label>
      <textarea
        id={elementId}
        ref={inputRef}
        {...rest}
        className={cn(
          "h-[240px] resize-none px-300 py-150 sm:h-[132px] md:h-[105px]",
          {
            "border-error hover:border-error focus:border-error focus:ring-error active:border-error":
              error,
          },
        )}
      />
      <FieldError message={error} />
    </div>
  );
});

export default TextArea;

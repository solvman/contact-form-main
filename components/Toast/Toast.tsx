import { cn } from "@/utils/utils";

type ToastProps = {
  isShown?: boolean;
};

const Toast = ({ isShown = false }: ToastProps) => {
  return (
    <div className="fixed left-1/2 top-0 z-50 -translate-x-1/2">
      <article
        className={cn(
          "duration-250 relative -top-[110px] rounded-lg bg-secondary-900 p-300 text-white opacity-0 transition-all",
          { "translate-y-[140px] opacity-100": isShown },
        )}
      >
        <header className="flex flex-row gap-100">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="21"
            fill="none"
            viewBox="0 0 20 21"
            className="h-6 w-6"
          >
            <path
              fill="#fff"
              d="M14.28 7.72a.748.748 0 0 1 0 1.06l-5.25 5.25a.748.748 0 0 1-1.06 0l-2.25-2.25a.75.75 0 1 1 1.06-1.06l1.72 1.72 4.72-4.72a.75.75 0 0 1 1.06 0Zm5.47 2.78A9.75 9.75 0 1 1 10 .75a9.76 9.76 0 0 1 9.75 9.75Zm-1.5 0A8.25 8.25 0 1 0 10 18.75a8.26 8.26 0 0 0 8.25-8.25Z"
            />
          </svg>
          <h2 className="body-md-bold">Message sent!</h2>
        </header>
        <p className="mt-100">
          Thanks for completing the form. We will be in touch soon!
        </p>
      </article>
    </div>
  );
};
export default Toast;

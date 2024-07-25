"use client";
import Toast from "@/components/Toast";
import { useEffect, useState } from "react";
import { useForm, type SubmitHandler } from "react-hook-form";

type FormData = {
  firstName: string;
  lastName: string;
  email: string;
  queryType: "general" | "support";
  message: string;
  consent: boolean;
};

export default function Home() {
  const [isShown, setIsShown] = useState(false);
  const {
    register,
    setFocus,
    formState: { errors },
    handleSubmit,
  } = useForm<FormData>({
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      queryType: "general",
      message: "",
      consent: false,
    },
  });

  useEffect(() => {
    const timerId = setTimeout(() => {
      setIsShown(false);
    }, 2500);

    return () => {
      clearTimeout(timerId);
    };
  }, [isShown]);

  return (
    <main className="bg-primary-200 px-200 py-400 min-h-screen sm:flex items-center justify-center">
      <h1 className="sr-only">
        Frontend Mentor project submission - Contact Form
      </h1>
      <Toast isShown={isShown} />
      <article className="bg-white p-300 rounded-2xl sm:p-500 w-full sm:max-w-[690px] md:max-w-[736]">
        <h2 className="heading mb-400">Contact Us</h2>
        <form
          className="flex flex-col gap-300"
          onSubmit={handleSubmit((data) => {
            setIsShown(true);
            console.log(data);
          })}
        >
          <div className="flex flex-col gap-300 sm:flex-row sm:gap-200">
            <div className="flex flex-col flex-1 gap-100">
              <label htmlFor="first-name" className="required">
                First Name
              </label>
              <input
                type="text"
                id="first-name"
                {...register("firstName", { required: true })}
              />
              <em className="hidden">Error</em>
            </div>
            <div className="flex flex-col flex-1 gap-100">
              <label htmlFor="last-name" className="required">
                Last Name
              </label>
              <input
                type="text"
                id="last-name"
                {...register("lastName", { required: true })}
              />
              <em className="hidden">Error</em>
            </div>
          </div>
          <div className="flex flex-col flex-1 gap-100">
            <label htmlFor="email" className="required">
              Email
            </label>
            <input type="email" id="email" {...register("email")} />
            <em className="hidden">Error</em>
          </div>
          <fieldset className="flex flex-col gap-200">
            <legend className="required mb-200">Query Type</legend>
            <div className="flex flex-col gap-200 sm:flex-row">
              <label className="radio-btn flex flex-row gap-150">
                <input type="radio" name="query-type" value="general" />
                General Enquiry
              </label>
              <label className="radio-btn flex flex-row gap-150">
                <input type="radio" name="query-type" value="support" />
                Support Request
              </label>
            </div>
          </fieldset>
          <div className="flex flex-col flex-1 gap-100">
            <label htmlFor="message" className="required">
              Message
            </label>
            <textarea
              id="message"
              className="resize-none px-300 py-150 h-[240px] sm:h-[132px] md:h-[105px]"
            />
            <em className="hidden">Error</em>
          </div>
          <div className="flex flex-row items-center gap-200 my-200">
            <input type="checkbox" name="consent" id="consent" />
            <label htmlFor="consent" className="required">
              I consent to being contacted by the team
            </label>
            <em className="hidden">Error</em>
          </div>
          <button
            type="submit"
            className="w-full py-200 px-500 rounded-lg body-m-bold text-white bg-primary-600 hover:bg-button-hover transition"
          >
            Submit
          </button>
        </form>
      </article>
    </main>
  );
}

"use client";
import Input from "@/components/Input";
import Toast from "@/components/Toast";
import { useEffect, useState } from "react";
import { useForm, type SubmitHandler } from "react-hook-form";

const ERROR_FIELD_REQUIRED = "This field is required";

type FormData = {
  firstName: string;
  lastName: string;
  email: string;
  queryType: "general" | "support" | "";
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
    reset,
  } = useForm<FormData>({
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      queryType: "",
      message: "",
      consent: false,
    },
  });

  useEffect(() => {
    setFocus("firstName");
  }, [setFocus]);

  useEffect(() => {
    const timerId = setTimeout(() => {
      setIsShown(false);
      reset();
      setFocus("firstName");
    }, 2500);

    return () => {
      clearTimeout(timerId);
    };
  }, [isShown, reset, setFocus]);

  return (
    <main className="min-h-screen items-center justify-center bg-primary-200 px-200 py-400 sm:flex">
      <h1 className="sr-only">
        Frontend Mentor project submission - Contact Form
      </h1>
      <Toast isShown={isShown} />
      <article className="w-full rounded-2xl bg-white p-300 sm:max-w-[690px] sm:p-500 md:max-w-[736]">
        <h2 className="heading mb-400">Contact Us</h2>
        <form
          className="flex flex-col gap-300"
          onSubmit={handleSubmit((data) => {
            setIsShown(true);
            console.log(data);
          })}
        >
          <div className="flex flex-col gap-300 sm:flex-row sm:gap-200">
            <Input
              label="First Name"
              autoComplete="given-name"
              {...register("firstName", {
                required: ERROR_FIELD_REQUIRED,
                minLength: {
                  value: 2,
                  message: "At least 2 letters are required",
                },
              })}
              error={errors.firstName?.message}
            />
            <Input
              label="Last Name"
              autoComplete="family-name"
              {...register("lastName", {
                required: ERROR_FIELD_REQUIRED,
                minLength: {
                  value: 2,
                  message: "At least 2 letters are required",
                },
              })}
              error={errors.lastName?.message}
            />
          </div>
          <div className="flex flex-1 flex-col gap-100">
            <Input
              label="Email"
              autoComplete="email"
              {...register("email", {
                required: ERROR_FIELD_REQUIRED,
                pattern: {
                  value: /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/,
                  message: "Invalid email address",
                },
              })}
              error={errors.email?.message}
            />
          </div>
          <fieldset className="flex flex-col gap-200">
            <legend className="required mb-200">Query Type</legend>
            <div className="flex flex-col gap-200 sm:flex-row">
              <label className="radio-btn flex flex-row gap-150">
                <input
                  type="radio"
                  {...register("queryType", { required: ERROR_FIELD_REQUIRED })}
                  value="general"
                />
                General Enquiry
              </label>
              <label className="radio-btn flex flex-row gap-150">
                <input
                  type="radio"
                  {...register("queryType", { required: ERROR_FIELD_REQUIRED })}
                  value="support"
                />
                Support Request
              </label>
            </div>
          </fieldset>
          <div className="flex flex-1 flex-col gap-100">
            <label htmlFor="message" className="required">
              Message
            </label>
            <textarea
              id="message"
              className="h-[240px] resize-none px-300 py-150 sm:h-[132px] md:h-[105px]"
            />
            <em className="hidden">Error</em>
          </div>
          <div className="my-200 flex flex-row items-center gap-200">
            <input type="checkbox" name="consent" id="consent" />
            <label htmlFor="consent" className="required">
              I consent to being contacted by the team
            </label>
            <em className="hidden">Error</em>
          </div>
          <button
            type="submit"
            className="body-m-bold w-full rounded-lg bg-primary-600 px-500 py-200 text-white transition hover:bg-button-hover"
          >
            Submit
          </button>
        </form>
      </article>
    </main>
  );
}

"use client";

import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";

import Button from "@/components/Button";
import Consent from "@/components/Consent";
import FieldError from "@/components/FieldError";
import Input from "@/components/Input";
import TextArea from "@/components/TextArea";
import Toast from "@/components/Toast";

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
    formState: { errors, isDirty, isSubmitting },
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
    if (!isDirty) {
      setFocus("firstName");
    }
  }, [setFocus, isDirty]);

  useEffect(() => {
    const timerId = setTimeout(() => {
      setIsShown(false);
      reset();
    }, 2500);

    return () => {
      clearTimeout(timerId);
    };
  }, [isShown, reset, setFocus]);

  function submitHandler(data: FormData) {
    setIsShown(true);
    console.log(data);
  }

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
          onSubmit={handleSubmit(submitHandler)}
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
            <div className="relative flex flex-col gap-200 sm:flex-row">
              <label className="radio-btn flex flex-row gap-150">
                <input
                  type="radio"
                  {...register("queryType", {
                    required: "Please select a query type",
                  })}
                  value="general"
                />
                General Enquiry
              </label>
              <label className="radio-btn flex flex-row gap-150">
                <input
                  type="radio"
                  {...register("queryType", {
                    required: "Please select a query type",
                  })}
                  value="support"
                />
                Support Request
              </label>
              <FieldError message={errors.queryType?.message} />
            </div>
          </fieldset>
          <TextArea
            label="Message"
            {...register("message", { required: ERROR_FIELD_REQUIRED })}
            error={errors.message?.message}
          />
          <Consent
            {...register("consent", {
              required:
                "To submit this form, please consent to being contacted",
            })}
            label="I agree to the Privacy Policy"
            error={errors.consent?.message}
          />
          <Button disabled={isSubmitting}>Submit</Button>
        </form>
      </article>
    </main>
  );
}

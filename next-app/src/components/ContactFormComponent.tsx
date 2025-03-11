"use client";

import { ChangeEvent, ReactElement, useState } from "react";
import React from "react";
import ReCAPTCHA from "react-google-recaptcha";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

export default function ContactFormComponent(): ReactElement {
  const [inputFields, setInputFields] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [errors, setErrors] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [recaptchaPassed, setRecaptchaPassed] = useState(false);

  const messageCharLimit = 1000;

  function checkFormFilled(): boolean {
    let key: keyof typeof inputFields;
    for (key in inputFields) {
      if (!inputFields[key]) {
        return false;
      }
    }
    return true;
  }

  function checkValidForm(): boolean {
    let key: keyof typeof errors;
    for (key in errors) {
      if (errors[key]) {
        return false;
      }
    }
    return true;
  }

  function handleChange(
    e: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLTextAreaElement>
  ) {
    setInputFields({ ...inputFields, [e.target.name]: e.target.value });
  }

  function onChangeRecaptcha() {
    setRecaptchaPassed(true);
  }

  React.useEffect(() => {
    // form validation
    const errors_tmp = {
      name: "",
      email: "",
      message: "",
    };
    if (
      !inputFields.name.match(/^[A-Za-zŽžÀ-ÿ\s\-]+$/) &&
      inputFields.name.length > 0
    ) {
      errors_tmp.name = "Invalid character in name.";
    }

    if (
      !inputFields.email.match(
        /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      ) &&
      inputFields.email.length > 0
    ) {
      errors_tmp.email = "Invalid E-Mail adress.";
    }

    if (
      inputFields.message.length > messageCharLimit &&
      inputFields.message.length > 0
    ) {
      errors_tmp.message = "Message exceeds limit.";
    }
    setErrors({
      name: errors_tmp.name,
      email: errors_tmp.email,
      message: errors_tmp.message,
    });
  }, [inputFields]);

  return (
    <div className="bg-white bg-opacity-95 rounded-[10px] shadow border-2 border-neutral">
      <form
        action="https://forms.dc.scilifelab.se/api/v1/form/VLtfHqlxZxY84EM7/incoming"
        method="POST"
        accept-charset="utf-8"
      >
        <div className="flex flex-col p-6 gap-6">
          <div className="grid w-full max-w-sm items-center gap-1.5">
            <Label htmlFor="name">Name</Label>
            <Input
              type="text"
              id="name"
              name="name"
              placeholder="Type here"
              defaultValue={inputFields.name}
              onChange={handleChange}
              required
            />
            {errors.name ? <p className="text-error">{errors.name}</p> : null}
          </div>
          <div className="grid w-full max-w-sm items-center gap-1.5">
            <Label htmlFor="email">Email</Label>
            <Input
              type="email"
              id="email"
              name="email"
              placeholder="Type here"
              defaultValue={inputFields.email}
              onChange={handleChange}
              required
            />
            {errors.email ? <p className="text-error">{errors.name}</p> : null}
          </div>
          <input
            type="hidden"
            name="origin"
            value="precision-medicine-portal-contact"
            hidden
            aria-labelledby="precision-medicine-portal-contact"
          ></input>

          <div className="grid w-full gap-1.5">
            <Label htmlFor="message">Your message</Label>
            <Textarea
              placeholder={
                "Type your message here. Max length " +
                +messageCharLimit +
                " characters."
              }
              id="message"
              name="message"
              defaultValue={inputFields.message}
              onChange={handleChange}
              required
            />
            {inputFields.message.length <= messageCharLimit ? (
              <p className="text-sm text-muted-foreground">
                {messageCharLimit -
                  inputFields.message.length +
                  " characters left"}{" "}
              </p>
            ) : (
              <p className="text-error">{errors.message}</p>
            )}
          </div>
          <div className="">
            <ReCAPTCHA
              sitekey="6Lcf2Z0pAAAAADHiZZR3snpGetHNmO0TLvdBgfEU"
              onChange={onChangeRecaptcha}
              size="compact"
            />
          </div>
          <div className="flex flex-col items-center">
            {checkFormFilled() && checkValidForm() && false ? (
              recaptchaPassed ? (
                <Button
                  type="submit"
                  className="w-full lg:w-auto lg:min-w-48 bg-fuchsia-950 hover:bg-fuchsia-800 focus:ring focus:ring-fuchsia-300"
                >
                  Submit
                </Button>
              ) : (
                <>
                  <p className="text-error">
                    Please tick &apos;I&apos;m not a robot&apos; above the
                    &apos;Submit&apos; button.
                  </p>
                  <Button disabled className="w-full lg:w-auto lg:min-w-48">
                    Submit
                  </Button>
                </>
              )
            ) : (
              <Button
                disabled
                variant="outline"
                className="w-full lg:w-auto lg:min-w-48 bg-neutral text-gray-500"
              >
                Submit
              </Button>
            )}
          </div>
        </div>
      </form>
    </div>
  );
}

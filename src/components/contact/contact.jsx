import React from "react";
import { useForm, FormProvider } from "react-hook-form";
import { Fade } from "react-reveal";
import Test from "./Test";
import "./contact.css";

const Contact = () => {
  const methods = useForm();
  const { register, handleSubmit } = methods;
  return (
    <FormProvider {...methods}>
      <h1 className="contact-heading" id="contact">
        Contact
      </h1>
      <Fade bottom duration={1000} distance="40px">
        <form onSubmit={handleSubmit((data) => console.log(data))}>
          <label>Full Name</label>
          <input {...register("test", { required: true })} />
          <label>E-mail Address</label>
          <input {...register("test", { required: true })} />
          <label>Message</label>
          <Test />
          <input type="submit" />
        </form>
      </Fade>
    </FormProvider>
  );
};

export default Contact;

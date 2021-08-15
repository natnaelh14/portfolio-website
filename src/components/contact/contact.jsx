import React from "react";
import { useForm, FormProvider } from "react-hook-form";
import Test from "./Test";
import "./contact.css";

const Contact = () => {
  const methods = useForm();
  const { register, handleSubmit } = methods;
  return (
    <FormProvider {...methods}>
      <form onSubmit={handleSubmit((data) => console.log(data))}>
        <label>Full Name</label>
        <input {...register("test", { required: true })} />
        <label>E-mail Address</label>
        <input {...register("test", { required: true })} />
        <label>Message</label>
        <Test />
        <input type="submit" />
      </form>
    </FormProvider>
  );
}

export default Contact;
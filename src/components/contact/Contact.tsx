import React from "react";
import { Fade } from "react-reveal";
import emailjs from "emailjs-com";
import "./Contact.css";
import { useForm } from "react-hook-form";

interface IContactProps {
	firstName: string;
	lastName: string;
	email: string;
	subject: string;
	message: string;
}
const Contact = () => {
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm();

	const onSubmit = (data: IContactProps) => {
		console.log("🚀 ~ file: Contact.jsx:19 ~ onSubmit ~ data:", data);

		const templateParams = {
			from_name: data.firstName + " " + data.lastName,
			from_email: data.email,
			to_name: "Natnael Haile",
			subject: data.subject,
			message: data.message,
		};
		// eslint-disable-next-line @typescript-eslint/no-floating-promises
		emailjs.send("service_a7u63za", "template_18f6zsf", templateParams, "user_eZV3e0rLSAkwzx3Pvay2V");
		console.log(templateParams);
	};

	return (
		<div>
			<h1 className="contact-heading" id="contact">
				Contact
			</h1>
			<Fade bottom duration={1000} distance="40px">
				<form onSubmit={handleSubmit(onSubmit)}>
					<label htmlFor="firstName" className="required">
						First Name
					</label>
					<input {...register("firstName")} />
					<label htmlFor="lastName" className="required">
						Last Name
					</label>
					<input {...register("lastName")} />
					<label htmlFor="email" className="required">
						Email
					</label>
					<input {...register("email")} />
					<label htmlFor="subject" className="required">
						Subject
					</label>
					<input {...register("subject")} />
					<label htmlFor="message" className="required">
						Message
					</label>
					<input {...register("message")} />
					<button type="submit">SEND</button>
					{errors.exampleRequired && <span>This field is required</span>}
				</form>
			</Fade>
		</div>
	);
};

export default Contact;

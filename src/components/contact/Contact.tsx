import { Fade } from "react-reveal";
import emailjs from "emailjs-com";
import "./contact.css";
import { useForm } from "react-hook-form";
import { z, ZodType } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

interface IContactForm {
	firstName: string;
	lastName: string;
	email: string;
	subject: string;
	message: string;
	serverError: () => void;
}

const schema: ZodType = z.object({
	firstName: z.string(),
	lastName: z.string(),
	email: z.string().email({ message: "Invalid email address" }),
	subject: z.string(),
	message: z.string().min(10, { message: "Must be 10 or more characters long" }),
	serverError: z.void(),
});

const Contact = () => {
	const {
		register,
		handleSubmit,
		setError,
		formState: { errors },
	} = useForm<IContactForm>({
		// eslint-disable-next-line @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-unsafe-call
		resolver: zodResolver(schema),
		mode: "onSubmit",
	});

	const onSubmit = (data: IContactForm) => {
		const templateParams = {
			from_name: data.firstName + " " + data.lastName,
			from_email: data.email,
			to_name: "Natnael Haile",
			subject: data.subject,
			message: data.message,
		};
		emailjs.send("service_a7u63za", "template_18f6zsf", templateParams, "user_eZV3e0rLSAkwzx3Pvay2V").catch((err) => {
			console.error("🚀 ~ file: Contact.tsx:47 ~ onSubmit ~ err:", err);
			setError("serverError", {
				type: "server",
				message: "Unable to send message. Please try again.",
			});
		});
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
					{errors.firstName && <span style={{ color: "red" }}>{errors.firstName.message}</span>}
					<label htmlFor="lastName" className="required">
						Last Name
					</label>
					<input {...register("lastName")} />
					{errors.lastName && <span style={{ color: "red" }}>{errors.lastName.message}</span>}
					<label htmlFor="email" className="required">
						Email
					</label>
					<input {...register("email")} />
					{errors.email && <span style={{ color: "red" }}>{errors.email.message}</span>}
					<label htmlFor="subject" className="required">
						Subject
					</label>
					<input {...register("subject")} />{" "}
					{errors.subject && <span style={{ color: "red" }}>{errors.subject.message}</span>}
					<label htmlFor="message" className="required">
						Message
					</label>
					<input {...register("message")} />
					{errors.message && <span style={{ color: "red" }}>{errors.message.message}</span>}
					<button type="submit">SEND</button>
					{errors.serverError && (
						<div className="mt-5 text-center text-red-500">{errors.serverError?.message}</div>
					)}{" "}
				</form>
			</Fade>
		</div>
	);
};

export default Contact;

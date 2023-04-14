import { Fade } from "react-reveal";
import emailjs from "emailjs-com";
import "./contact.css";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import toast, { Toaster } from "react-hot-toast";

const userSchema = z.object({
	firstName: z.string().nonempty({ message: "Please enter a first name" }),
	lastName: z.string().nonempty({ message: "Please enter a last name" }),
	email: z.string().nonempty({ message: "Please enter an email address" }).email({ message: "Invalid email address" }),
	subject: z.string().nonempty({ message: "Please enter a subject" }),
	message: z.string().nonempty({ message: "Please enter a message" }),
	serverError: z.void(),
});

type User = z.infer<typeof userSchema>;

const Contact = () => {
	const successNotify = () =>
		toast("Your message has been sent!", {
			icon: "🔥",
			style: {
				borderRadius: "10px",
				background: "#333",
				color: "#fff",
			},
		});
	const {
		register,
		handleSubmit,
		setError,
		formState: { errors, isSubmitting },
		reset,
	} = useForm<User>({
		resolver: zodResolver(userSchema),
		mode: "onSubmit",
	});

	const onSubmit = (data: User) => {
		const templateParams = {
			from_name: `${data.firstName}&nbsp;${data.lastName}`,
			from_email: data.email,
			to_name: "Natnael Haile",
			subject: data.subject,
			message: data.message,
		};
		emailjs
			.send("service_a7u63za", "template_18f6zsf", templateParams, "user_eZV3e0rLSAkwzx3Pvay2V")
			.then(() => {
				reset();
				successNotify();
			})
			.catch((err) => {
				console.error("🚀 ~ file: Contact.tsx:47 ~ onSubmit ~ err:", err);
				setError("serverError", {
					type: "server",
					message: "Unable to send message. Please try again.",
				});
			});
		console.log(templateParams);
	};

	return (
		<div className="contact" id="contact">
			<h1 className="contact-heading">Contact</h1>
			<Toaster position="top-center" reverseOrder={false} />
			<Fade bottom duration={1000} distance="40px">
				<form onSubmit={handleSubmit(onSubmit)}>
					<label htmlFor="firstName" className="required">
						First Name
					</label>
					<input {...register("firstName")} style={errors.firstName ? { border: "1px solid red" } : {}} />
					{errors.firstName && <span style={{ color: "red" }}>{errors.firstName.message}</span>}
					<label htmlFor="lastName" className="required">
						Last Name
					</label>
					<input {...register("lastName")} style={errors.lastName ? { border: "1px solid red" } : {}} />
					{errors.lastName && <span style={{ color: "red" }}>{errors.lastName.message}</span>}
					<label htmlFor="email" className="required">
						Email
					</label>
					<input {...register("email")} style={errors.email ? { border: "1px solid red" } : {}} />
					{errors.email && <span style={{ color: "red" }}>{errors.email.message}</span>}
					<label htmlFor="subject" className="required">
						Subject
					</label>
					<input {...register("subject")} style={errors.subject ? { border: "1px solid red" } : {}} />
					{errors.subject && <span style={{ color: "red" }}>{errors.subject.message}</span>}
					<label htmlFor="message" className="required">
						Message
					</label>
					<textarea {...register("message")} style={errors.message ? { border: "1px solid red" } : {}} />
					{errors.message && <span style={{ color: "red" }}>{errors.message.message}</span>}
					<button type="submit">{isSubmitting ? "SENDING" : "SEND"}</button>
					{errors.serverError && <div className="mt-5 text-center text-red-500">{errors.serverError?.message}</div>}
				</form>
			</Fade>
		</div>
	);
};

export default Contact;

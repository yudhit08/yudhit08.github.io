import { useRef } from "react";
import { useForm } from "react-hook-form";
import emailjs from "@emailjs/browser";
import Swal from "sweetalert2";
import ErrorMessages from "../components/ErrorMessages";
import { useElementVisible } from "../hooks/useElementVisible";

function Contact() {
    const ref = useRef(null);
    const isShown = useElementVisible(ref)
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm({ criteriaMode: "all" });

	const saveMessage = async (e) => {
		// e.preventDefault();
		// console.log(e);
		try {
			emailjs
				.send(
					"service_h117od3",
					"template_y22u1bd",
					e,
					"EJ-uRBzOKaoqnK-Ve"
				)
				.then(
					(result) => {
						console.log("success");
					},
					(error) => {
						console.log("error");
					}
				);
			Swal.fire({
				title: "Success",
				text: "Your message has been sent",
				icon: "success",
				confirmButtonText: "Ok",
			});
		} catch (error) {
			console.log(error);
            Swal.fire({
				title: "Failed",
				text: "Your message failed to be sent. Please try again.",
				icon: "error",
				confirmButtonText: "Ok",
			});
		}
	};

	return (
		<div
			className={
				isShown ? "contact-container active" : "contact-container"
			}
			id="contact"
			ref={ref}
		>
			<p className="tag top">&#60;contact&#62;</p>
			<h1 className="title">Contact</h1>
			<form className="contact-form" onSubmit={handleSubmit(saveMessage)}>
				<div className="email">
					<label htmlFor="email">Email Address</label>
					<input
						name="email"
						id="email"
						autoComplete="off"
						spellCheck="false"
						{...register("email", {
							required: "Please enter your email!",
							pattern: {
								value: /\S+@\S+\.\S+/,
								message:
									"Please enter your email in format: youremail@mail.com",
							},
						})}
					/>
                    <ErrorMessages errors={errors} input="email" />
				</div>
				<div className="subject">
					<label htmlFor="subject">Subject</label>
					<input
						type="text"
						name="subject"
						id="subject"
						autoCorrect="false"
						spellCheck="false"
						autoComplete="off"
						{...register("subject", {
							required: "Please enter your subject!",
						})}
					/>
                    <ErrorMessages errors={errors} input="subject" />
				</div>
				<div className="message">
					<label htmlFor="message">Message</label>
					<textarea
						name="message"
						id="message"
						cols="30"
						rows="5"
						spellCheck="false"
						{...register("message", {
							required: "Please enter your message!",
						})}
					></textarea>
                    <ErrorMessages errors={errors} input="message" />
				</div>
				<button className="send-message" type="submit">
					Send message
				</button>
			</form>
			<p className="tag bottom">&#60;/contact&#62;</p>
		</div>
	);
}

export default Contact;

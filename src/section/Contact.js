import { useState, useEffect, useRef } from "react";
import { useForm } from "react-hook-form";
import emailjs from "@emailjs/browser";
import Swal from "sweetalert2";
import ErrorMessages from "../components/ErrorMessages";

function Contact() {
	const [isShown, setIsShown] = useState(false);
	const ref = useRef(null);
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm({ criteriaMode: "all" });

	const handleScroll = () => {
		if (!ref.current) return;
		let windowHeight = window.innerHeight;
		let elementTop = ref.current.getBoundingClientRect().y;
		let elementVisible = 50;
		if (elementTop < windowHeight - elementVisible) {
			setIsShown(true);
		} else {
			setIsShown(false);
		}
	};

	const saveMessage = async (e) => {
		e.preventDefault();
		console.log(e.target);
		try {
			emailjs
				.sendForm(
					"service_h117od3",
					"template_y22u1bd",
					e.target,
					"EJ-uRBzOKaoqnK-Ve"
				)
				.then(
					(result) => {
						console.log(result.text);
					},
					(error) => {
						console.log(error.text);
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
		}
	};

	useEffect(() => {
		window.addEventListener("scroll", handleScroll);

		return () => {
			window.removeEventListener("scroll", () => handleScroll);
		};
	}, []);

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
							required: "Subject is required!",
						})}
					/>
                    <ErrorMessages errors={errors} input="subject" />
				</div>
				<div className="email">
					<label htmlFor="email">Email</label>
					<input
						type="email"
						name="email"
						id="email"
						autoComplete="off"
						spellCheck="false"
						{...register("email", {
							required: "Email is required!",
							pattern: {
								value: /\S+@\S+\.\S+/,
								message:
									"Enter email in format:username@mail.com",
							},
						})}
					/>
                    <ErrorMessages errors={errors} input="email" />
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
							required: "Message is required!",
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

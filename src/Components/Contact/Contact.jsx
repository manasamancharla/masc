import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import "./Contact.css";
import { AiOutlineMail } from "react-icons/ai";
import { BsLinkedin } from "react-icons/bs";
import { BsWhatsapp } from "react-icons/bs";

function Contact() {
	const form = useRef();

	const sendEmail = (e) => {
		e.preventDefault();

		emailjs.sendForm(
			import.meta.env.VITE_SERVICE_ID,
			import.meta.env.VITE_TEMPLATE_ID,
			form.current,
			import.meta.env.VITE_PUBLIC_KEY
		);

		e.target.reset();
	};
	return (
		<section id="contact">
			<h5>Get In Touch</h5>
			<h2>Contact Me</h2>

			<div className="container contact_container">
				<div className="contact_options">
					<article className="contact_option">
						<AiOutlineMail className="contact_option-icon" />
						<h4>Email</h4>
						<a href="mailto:amancharlamanas@gmail.com" target="__blank">
							Send a message
						</a>
					</article>

					<article className="contact_option">
						<BsLinkedin className="contact_option-icon" />
						<h4>Linkedin</h4>
						<a
							href="https://www.linkedin.com/in/manas-amancharla-08b844240/"
							target="__blank"
						>
							Send a message
						</a>
					</article>

					<article className="contact_option">
						<BsWhatsapp className="contact_option-icon" />
						<h4>Whatsapp</h4>
						<a
							href={`https://api.whatsapp.com/send?phone=${
								import.meta.env.VITE_WHATSAPP_PHONE
							}`}
							target="__blank"
						>
							Send a message
						</a>
					</article>
				</div>

				<form ref={form} onSubmit={sendEmail}>
					<input type="text" name="name" placeholder="Your Name" required />
					<input type="email" name="email" placeholder="Your Email" required />
					<textarea
						name="message"
						rows="7"
						placeholder="Your Message"
						required
					></textarea>
					<button type="submit" className="btn btn-primary">
						Send Message
					</button>
				</form>
			</div>
		</section>
	);
}

export default Contact;

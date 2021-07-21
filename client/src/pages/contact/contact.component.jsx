import React, { useEffect, useState } from "react";
import axios from "axios";

import FormInput from "../../components/form-input/form-input.component";
import CustomButton from "../../components/custom-button/custom-button.component";

import {
	ContactContainer,
	ContactForm,
	ContactFormHeader,
	ContactTitle,
	ContactSubtitle,
	LogoContainer,
	CrwnLogo,
} from "./contact.styles";

const ContactPage = () => {
	const [formData, setFormData] = useState({
		email: "",
		name: "",
		message: "",
	});

	const handleFormChange = (e) =>
		setFormData({ ...formData, [e.target.name]: e.target.value });

	const handleFormSubmission = async (e) => {
		e.preventDefault();

		axios({
			url: "contact",
			method: "POST",
			data: formData,
		})
			.then((res) => {
				alert("Your message was sent successfully!");
				setFormData({
					email: "",
					name: "",
					message: "",
				});
			})
			.catch((err) => {
				alert(
					"There was an issue with your submission.\nPlease check your fields and try again."
				);
				console.log(err);
			});
	};

	useEffect(() => {
		document.title = "Contact Us | CRWN Clothing";
	}, []);

	return (
		<ContactContainer>
			<ContactForm onSubmit={handleFormSubmission}>
				<ContactFormHeader>
					<LogoContainer>
						<CrwnLogo />
					</LogoContainer>
					<ContactTitle>Have a question?</ContactTitle>
				</ContactFormHeader>
				<ContactSubtitle>Please fill out the following fields.</ContactSubtitle>
				{/* Name */}
				<FormInput
					name="name"
					type="text"
					label="Name"
					maxLength={20}
					value={formData.name}
					handleChange={handleFormChange}
					required
				/>
				{/* Email */}
				<FormInput
					name="email"
					type="email"
					label="Email"
					value={formData.email}
					handleChange={handleFormChange}
					required
				/>
				{/* Message */}
				<FormInput
					name="message"
					isTextarea={true}
					label="Your message"
					rows={4}
					maxLength={250}
					value={formData.message}
					handleChange={handleFormChange}
					required
				/>
				<CustomButton type="submit">Send</CustomButton>
			</ContactForm>
		</ContactContainer>
	);
};

export default ContactPage;

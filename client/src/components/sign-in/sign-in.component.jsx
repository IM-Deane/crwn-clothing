import React, { useState } from "react";
import { connect } from "react-redux";

import "./sign-in.styles.scss";

import FormInput from "../form-input/form-input.component";
import CustomButton from "../custom-button/custom-button.component";

import {
	googleSignInStart,
	emailSignInStart,
} from "../../redux/user/user.actions";

const SignIn = ({ googleSignInStart, emailSignInStart }) => {
	const [userCredentials, setUserCredentials] = useState({
		email: "",
		password: "",
	});
	const { email, password } = userCredentials;

	const handleSubmit = async (e) => {
		e.preventDefault();

		emailSignInStart(email, password);
	};

	const handleChange = (e) => {
		const { value, name } = e.target;

		// Dynamically sets state
		setUserCredentials({ ...userCredentials, [name]: value });
	};
	return (
		<div className="sign-in">
			<h2>I already have an account</h2>
			<span>Sign in with your email and password</span>

			<form onSubmit={handleSubmit}>
				<FormInput
					name="email"
					type="email"
					label="Email"
					value={email}
					handleChange={handleChange}
					required
				/>
				<FormInput
					name="password"
					type="password"
					label="Password"
					value={password}
					required
					handleChange={handleChange}
				/>
				<div className="buttons">
					<CustomButton type="submit">Sign In</CustomButton>
					<CustomButton
						type="button"
						onClick={googleSignInStart}
						isGoogleSignIn
					>
						Sign In With Google
					</CustomButton>
				</div>
			</form>
		</div>
	);
};

const mapDispatchToProps = (dispatch) => ({
	googleSignInStart: () => dispatch(googleSignInStart()),
	emailSignInStart: (email, password) =>
		dispatch(emailSignInStart({ email, password })),
});

export default connect(null, mapDispatchToProps)(SignIn);

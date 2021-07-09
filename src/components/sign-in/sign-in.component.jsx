import React, { Component } from "react";

import "./sign-in.styles.scss";

import FormInput from "../form-input/form-input.component";
import CustomButton from "../custom-button/custom-button.component";

// Google Signin
import { auth, signInWithGoogle } from "../../firebase/firebase.utils";

class SignIn extends Component {
	constructor(props) {
		super(props);

		this.state = {
			email: "",
			password: "",
		};
	}

	handleSubmit = async (e) => {
		e.preventDefault();

		const { email, password } = this.state;

		try {
			await auth.signInWithEmailAndPassword(email, password);

			this.setState({ email: "", password: "" });
		} catch (error) {
			console.log(error);
		}

		// Reset fields
		this.setState({ email: "", password: "" });
	};

	handleChange = (e) => {
		const { value, name } = e.target;

		// Dynamically sets state
		this.setState({ [name]: value });
	};

	render() {
		return (
			<div className="sign-in">
				<h2>I already have an account</h2>
				<span>Sign in with your email and password</span>

				<form onSubmit={this.handleSubmit}>
					<FormInput
						name="email"
						type="email"
						label="Email"
						value={this.state.email}
						handleChange={this.handleChange}
						required
					/>
					<FormInput
						name="password"
						type="password"
						label="Password"
						value={this.state.password}
						required
						handleChange={this.handleChange}
					/>
					<div className="buttons">
						<CustomButton type="submit">Sign In</CustomButton>
						<CustomButton
							type="button"
							onClick={signInWithGoogle}
							isGoogleSignIn
						>
							Sign In With Google
						</CustomButton>
					</div>
				</form>
			</div>
		);
	}
}

export default SignIn;

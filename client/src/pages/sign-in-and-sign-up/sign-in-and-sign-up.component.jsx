import React, { useEffect } from "react";

import { CollectionSignInAndSignUp } from "./sign-in-and-sign-up.styles";

import SignIn from "../../components/sign-in/sign-in.component";
import SignUp from "../../components/sign-up/sign-up.component";

const SignInAndSignUpPage = () => {
	useEffect(() => {
		document.title = "Please Sign In or Sign Up | CRWN Clothing";
	}, []);

	return (
		<CollectionSignInAndSignUp>
			<SignIn />
			<SignUp />
		</CollectionSignInAndSignUp>
	);
};

export default SignInAndSignUpPage;

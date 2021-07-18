import React from "react";

import { CollectionSignInAndSignUp } from "./sign-in-and-sign-up.styles";

import SignIn from "../../components/sign-in/sign-in.component";
import SignUp from "../../components/sign-up/sign-up.component";

const SignInAndSignUpPage = () => (
	<CollectionSignInAndSignUp>
		<SignIn />
		<SignUp />
	</CollectionSignInAndSignUp>
);

export default SignInAndSignUpPage;

import UserActionTypes from "./user.types";

// GOOGLE
export const googleSignInStart = () => ({
	type: UserActionTypes.GOOGLE_SIGN_IN_START,
});

export const signInSuccess = (user) => ({
	type: UserActionTypes.SIGN_IN_SUCCESS,
	payload: user,
});

export const signInFailure = (error) => ({
	type: UserActionTypes.SIGN_IN_FAILURE,
	payload: error,
});

// EMAIL
export const emailSignInStart = (emailAndPassword) => ({
	type: UserActionTypes.EMAIL_SIGN_IN_START,
	payload: emailAndPassword,
});

// Check if user is logged
export const checkUserSession = () => ({
	type: UserActionTypes.CHECK_USER_SESSION,
});

// SIGN OUT
export const signOutStart = () => ({
	type: UserActionTypes.SIGN_OUT_START,
});

export const signOutSuccess = () => ({
	type: UserActionTypes.SIGN_OUT_SUCCCESS,
});
export const signOutFailure = (error) => ({
	type: UserActionTypes.SIGN_OUT_FAILURE,
	payload: error,
});

// SIGN UP
export const signUpStart = (userCredentials) => ({
	type: UserActionTypes.SIGN_UP_START,
	payload: userCredentials,
});

export const signUpSuccess = ({ user, additionalData }) => ({
	type: UserActionTypes.SIGN_UP_SUCCESS,
	payload: { user, additionalData },
});
export const signUpFailure = (error) => ({
	type: UserActionTypes.SIGN_UP_FAILURE,
	payload: error,
});

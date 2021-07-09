import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
	apiKey: "AIzaSyD8sF2okleKCakSwwS9eEwbRSsvXpM52eE",
	authDomain: "crwn-db-6e1e9.firebaseapp.com",
	projectId: "crwn-db-6e1e9",
	storageBucket: "crwn-db-6e1e9.appspot.com",
	messagingSenderId: "413794881529",
	appId: "1:413794881529:web:c28cb147a2da6ce068b728",
};

// Add User to database
export const createUserProfileDocument = async (userAuth, additionalData) => {
	// Handle logged out users
	if (!userAuth) return;
	const userRef = firestore.doc(`users/${userAuth.uid}`);

	// Get user object from DB
	const snapshot = await userRef.get();

	// Create new user if they don't exist
	if (!snapshot.exists) {
		const { displayName, email } = userAuth;
		const createdAt = new Date();

		// Create new user
		try {
			await userRef.set({
				displayName,
				email,
				createdAt,
				...additionalData,
			});
		} catch (error) {
			console.log("Error creating user!", error);
		}
	}

	return userRef;
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;

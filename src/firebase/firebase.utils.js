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

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;

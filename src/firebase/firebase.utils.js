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

// This function was created to avoid manually adding
// the shop data to the firestore
// However, now that this is complete, we still have
// a function that can add new collections whenever
// we choose
export const addCollectionAndDocuments = async (
	collectionKey,
	objectsToAdd
) => {
	const collectionRef = firestore.collection(collectionKey);

	// Batch == transaction statement.
	// If any of the calls in the batch fail, the method will throw an error
	// This ensures that either all of the operations succeed or they all fail
	const batch = firestore.batch();
	objectsToAdd.forEach((obj) => {
		// Generate new ref obj with unique id
		const newDocRef = collectionRef.doc();
		batch.set(newDocRef, obj);
	});

	// Returns promise
	return await batch.commit();
};

export const convertCollectionsSnapshotToMap = (collections) => {
	const transformedCollection = collections.docs.map((doc) => {
		// Get collection props from fetched data
		const { title, items } = doc.data();

		return {
			routeName: encodeURI(title.toLowerCase()), //convert to useable url
			id: doc.id,
			title,
			items,
		};
	});
	// Convert the fetched data into a mapped collection
	return transformedCollection.reduce((accumulator, collection) => {
		// title = key; collection object = value
		// To access the collection we'll call the key
		// "hats" = hats collection
		accumulator[collection.title.toLowerCase()] = collection;
		return accumulator;
	}, {});
};

export const getCurrentUser = () => {
	return new Promise((resolve, reject) => {
		const unsubscribe = auth.onAuthStateChanged((userAuth) => {
			unsubscribe();
			// Promise success
			resolve(userAuth);
		}, reject); // promise error
	});
};

export const auth = firebase.auth();
export const firestore = firebase.firestore();

export const googleProvider = new firebase.auth.GoogleAuthProvider();
googleProvider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(googleProvider);

export default firebase;

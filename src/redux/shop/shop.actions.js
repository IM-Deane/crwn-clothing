import ShopActionTypes from "./shop.types";

// Firestore
import {
	firestore,
	convertCollectionsSnapshotToMap,
} from "../../firebase/firebase.utils";

export const fetchCollectionsStart = () => ({
	type: ShopActionTypes.FETCH_COLLECTIONS_START,
});

export const fetchCollectionsSuccess = (collectionsMap) => ({
	type: ShopActionTypes.FETCH_COLLECTIONS_SUCCESS,
	payload: collectionsMap,
});

export const fetchCollectionsFailure = (errorMessage) => ({
	type: ShopActionTypes.FETCH_COLLECTIONS_FAILURE,
	payload: errorMessage,
});

// Initializes async get request
export const fetchCollectionsStartAsync = () => {
	return (dispatch) => {
		const collectionRef = firestore.collection("collections");
		// Initialize fetch request (sets loading state to true)
		dispatch(fetchCollectionsStart());

		// Promise-based fetch pattern
		collectionRef
			.get()
			.then((snapshot) => {
				// Returns an array of objects as a map
				const collectionsMap = convertCollectionsSnapshotToMap(snapshot);
				// Add collections to redux
				dispatch(fetchCollectionsSuccess(collectionsMap));
			})
			.catch((error) => dispatch(fetchCollectionsFailure(error.message)));
	};
};

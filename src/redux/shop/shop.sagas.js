import { takeLatest, call, put, all } from "redux-saga/effects";

import {
	firestore,
	convertCollectionsSnapshotToMap,
} from "../../firebase/firebase.utils";

import {
	fetchCollectionsSuccess,
	fetchCollectionsFailure,
} from "./shop.actions";

import ShopActionTypes from "./shop.types";

export function* fetchCollectionsAsync() {
	try {
		const collectionRef = firestore.collection("collections");

		const snapshot = yield collectionRef.get();
		// Call = effect that invokes the generator method
		// allows us to defer control back to saga middlware
		const collectionsMap = yield call(
			convertCollectionsSnapshotToMap,
			snapshot
		);
		// put == dispatch for creating actions
		yield put(fetchCollectionsSuccess(collectionsMap));
	} catch (error) {
		yield put(fetchCollectionsFailure(error.message));
	}
}

export function* fetchCollectionsStart() {
	// non-blocking call
	yield takeLatest(
		ShopActionTypes.FETCH_COLLECTIONS_START,
		fetchCollectionsAsync
	);
}

export function* shopSagas() {
	yield all([call(fetchCollectionsStart)]);
}

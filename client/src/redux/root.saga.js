import { all, call } from "redux-saga/effects";

// Sagas
import { shopSagas } from "./shop/shop.sagas";
import { userSagas } from "./user/user.sagas";
import { cartSagas } from "./cart/cart.sagas";

export default function* rootSaga() {
	// "all" effect calls every saga in the arrary at once
	yield all([call(shopSagas), call(userSagas), call(cartSagas)]);
}

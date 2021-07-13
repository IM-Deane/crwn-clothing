import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";

// local storage
import storage from "redux-persist/lib/storage";

import userReducer from "./user/user.reducer";
import cartReducer from "./cart/cart.reducer";
import directoryReducer from "./directory/directory.reducer";
import shopReducer from "./shop/shop.reducer";

// JSON storage config
const persistConfig = {
	key: "root",
	storage,
	whiteList: ["cart"], // informs redux to persist cart
};

const rootReducer = combineReducers({
	user: userReducer,
	cart: cartReducer,
	directory: directoryReducer,
	shop: shopReducer,
});

// Returns modified root reducer with persistent capabilities
export default persistReducer(persistConfig, rootReducer);

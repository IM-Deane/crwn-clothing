import { createStore, applyMiddleware } from "redux";
// Allows browser to cache store
import { persistStore } from "redux-persist";
import logger from "redux-logger";

import rootReducer from "./root-reducer";

const middlewares = [];

// Add logger functionality if app is in development mode
if (process.env.NODE_ENV === "development") {
	middlewares.push(logger);
}

export const store = createStore(rootReducer, applyMiddleware(...middlewares));

// Persisted version of Redux store
export const persistor = persistStore(store);

export default { store, persistor };

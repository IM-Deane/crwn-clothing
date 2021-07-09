import { combineReducers } from "redux";

import userReducer from "./user/user.reducer";

// root reducer state
export default combineReducers({
	user: userReducer,
});

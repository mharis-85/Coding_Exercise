import { combineReducers } from "redux";

import userDataReducer from "./mainReducers";

const rootReducer = combineReducers({
  //session: sessionReducer,
  userData: userDataReducer
});

export default rootReducer;

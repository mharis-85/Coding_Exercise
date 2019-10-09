import { createStore, applyMiddleware } from "redux";
import asyncReducer from "./reducers";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";

const store = createStore(
  asyncReducer,
  composeWithDevTools(applyMiddleware(thunk))
);

export default store;

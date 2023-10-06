import { applyMiddleware, createStore } from "redux";

import thunk from "redux-thunk";

import trackingReducer from "./trackingReducer";

const store = createStore(trackingReducer, applyMiddleware(thunk));

export default store;

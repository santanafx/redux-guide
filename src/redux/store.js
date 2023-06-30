import { createStore, applyMiddleware } from "redux";
import { combineReducers } from "redux";
import logger from "redux-logger";
import userReducer from "./user/reducer";

const rootReducer = combineReducers({ userReducer });

export const store = createStore(rootReducer, applyMiddleware(logger));

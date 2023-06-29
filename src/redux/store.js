import { createStore } from "redux";
import { combineReducers } from "redux";
import userReducer from "./user/reducer";

const rootReducer = combineReducers({ userReducer });

export const store = createStore(rootReducer);

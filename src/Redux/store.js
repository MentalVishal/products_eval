import { reducer as productReducer } from "./productReducer/reducer";
import { legacy_createStore, applyMiddleware, combineReducers } from "redux";
import thunk from "redux-thunk";

const rootReducer = combineReducers({
  productReducer,
});

export const store = legacy_createStore(rootReducer, applyMiddleware(thunk));

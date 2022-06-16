import { applyMiddleware, legacy_createStore } from "redux";
import { cartReducer } from "./Cart/cart.reducer";
import thunk from "redux-thunk";
export const store = legacy_createStore(cartReducer, applyMiddleware(thunk));

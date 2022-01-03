import counterReducer from "./counter";
import shopListReducer from "./shopList";
import cartReducer from "./cart";
import cartCost from "./cartCost";
import { combineReducers } from "redux";
import { applyMiddleware } from "redux";
export const myLogger = (store) => (next) => (action) => {
  // console.log("hello");
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();

  console.log("Logged Action:", action);
  next(action);
};
const allReducers = combineReducers({
  counter: counterReducer,
  list: shopListReducer,
  cart: cartReducer,
  cartCost,
});
export default allReducers;

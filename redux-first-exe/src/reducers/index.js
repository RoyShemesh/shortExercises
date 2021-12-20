import counterReducer from "./counter";
import shopListReducer from "./shopList";
import cartReducer from "./cart";
import cartCost from "./cartCost";
import { combineReducers } from "redux";
const allReducers = combineReducers({
  counter: counterReducer,
  list: shopListReducer,
  cart: cartReducer,
  cartCost,
});
export default allReducers;

import { act } from "react-dom/cjs/react-dom-test-utils.production.min";

const cart = (state = [], action) => {
  switch (action.type) {
    case "ADD_ITEM": {
      const item = state.find(
        (item) => item.product === action.payload.product
      );
      if (item) {
        item.quantity += 1;
        item.totalPrice += action.payload.cost;
      } else {
        state.push({
          product: action.payload.product,
          quantity: 1,
          totalPrice: action.payload.cost,
        });
      }
      return [...state];
    }
    case "BUY_ALL": {
      state = [];
      return state;
    }
    default:
      return state;
  }
};
export default cart;

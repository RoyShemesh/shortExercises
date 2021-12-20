const cartCost = (state = 0, action) => {
  switch (action.type) {
    case "ADD_ITEM_IPAD_TO_CART": {
      return state + action.payload.cost;
    }
    case "ADD_ITEM_PC_TO_CART": {
      return state + action.payload.cost;
    }
    case "ADD_ITEM_MOBILE_TO_CART": {
      return state + action.payload.cost;
    }
    case "BUY_ALL": {
      state = 0;
      return state;
    }
    default:
      return state;
  }
};
export default cartCost;

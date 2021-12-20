const cartCost = (state = 0, action) => {
  switch (action.type) {
    case "ADD_ITEM": {
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

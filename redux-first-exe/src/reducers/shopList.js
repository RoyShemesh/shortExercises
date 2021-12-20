const list = [
  {
    product: "IPad",
    cost: "100",
    quantity: 2,
  },
  {
    product: "PC",
    cost: "200",
    quantity: 5,
  },
  {
    product: "mobile phone",
    cost: "50",
    quantity: 4,
  },
];
const shopList = (state = list, action) => {
  switch (action.type) {
    case "ADD_ITEM": {
      const item = state.find(
        (item) => item.product === action.payload.product
      );
      item.quantity -= 1;
      return [...state];
    }
    default:
      return state;
  }
};
export default shopList;

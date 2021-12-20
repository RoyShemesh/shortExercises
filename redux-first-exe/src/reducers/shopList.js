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
    case "ADD_ITEM_IPAD": {
      state[0].quantity -= 1;
      return [...state];
    }
    case "ADD_ITEM_PC": {
      state[1].quantity -= 1;
      return [...state];
    }
    case "ADD_ITEM_MOBILE": {
      state[2].quantity -= 1;
      return [...state];
    }
    default:
      return state;
  }
};
export default shopList;

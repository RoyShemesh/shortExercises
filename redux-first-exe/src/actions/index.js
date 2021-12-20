export const increment = (num) => {
  return {
    type: "INCREMENT",
    payload: num,
  };
};
export const decrement = () => {
  return {
    type: "DECREMENT",
  };
};
export const addIpad = () => {
  return {
    type: "ADD_ITEM_IPAD",
  };
};
export const addPc = () => {
  return {
    type: "ADD_ITEM_PC",
  };
};
export const addMobile = () => {
  return {
    type: "ADD_ITEM_MOBILE",
  };
};
export const addIpadToCart = () => {
  return {
    type: "ADD_ITEM_IPAD_TO_CART",
    payload: { product: "IPad", cost: 100 },
  };
};
export const addPcToCart = () => {
  return {
    type: "ADD_ITEM_PC_TO_CART",
    payload: { product: "PC", cost: 200 },
  };
};
export const addMobileToCart = () => {
  return {
    type: "ADD_ITEM_MOBILE_TO_CART",
    payload: { product: "mobile phone", cost: 50 },
  };
};

export const buyAll = () => {
  return {
    type: "BUY_ALL",
  };
};

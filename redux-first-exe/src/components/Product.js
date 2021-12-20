import React from "react";
import { useDispatch } from "react-redux";
import { addToCartGeneric } from "../actions";
import "../app.css";
const Product = ({ item, addToCart }) => {
  const dispatch = useDispatch();
  const click = () => {
    const func = addToCartGeneric();
    func.payload = { product: item.product, cost: parseInt(item.cost) };
    dispatch(func);
  };
  return (
    <div className="product">
      <h4>{item.product}</h4>
      <p>
        price:{item.cost}$ quantity:{item.quantity}
      </p>
      {item.quantity > 0 ? (
        <button onClick={click}>add to cart</button>
      ) : (
        <button disabled onClick={click}>
          add to cart
        </button>
      )}
    </div>
  );
};
export default Product;

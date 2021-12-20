import React from "react";
import { useDispatch } from "react-redux";
import "../app.css";
const Product = ({ item, removeFunc, addToCart }) => {
  const dispatch = useDispatch();
  const click = () => {
    dispatch(removeFunc());
    dispatch(addToCart());
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

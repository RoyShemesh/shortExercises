import React from "react";
import { useDispatch } from "react-redux";
import "../app.css";
const ProductCart = ({ item, removeFunc, addToCart }) => {
  const dispatch = useDispatch();
  return (
    <div className="product">
      <h4>{item.product}</h4>
      <p>
        price:{item.totalPrice}$ quantity:{item.quantity}
      </p>
    </div>
  );
};
export default ProductCart;

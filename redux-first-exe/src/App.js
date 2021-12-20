import React from "react";
import { useSelector, useDispatch, connect } from "react-redux";
import { buyAll } from "./actions";
import Product from "./components/Product";
import "./app.css";
import ProductCart from "./components/ProductCart";
function App() {
  const dispatch = useDispatch();
  const list = useSelector((state) => state.list);
  const cart = useSelector((state) => state.cart);
  const cartCost = useSelector((state) => state.cartCost);
  return (
    <div className="App">
      <h1>Product List </h1>
      <div className="shoplist">
        <Product item={list[0]} />
        <Product item={list[1]} />
        <Product item={list[2]} />
      </div>
      <h1>Cart : {cartCost}$</h1>
      <div className="shoplist">
        {cart.map((item, i) => {
          return <ProductCart key={i} item={item} />;
        })}
      </div>
      {cart[0] ? (
        <button onClick={() => dispatch(buyAll())}>Buy all</button>
      ) : (
        <button disabled>Buy all</button>
      )}
    </div>
  );
}

export default App;

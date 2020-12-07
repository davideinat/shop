import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
// import productPage from "./../pages/productPage.js";
import "./CartProduct.css";

const CartProduct = (props) => {
  return (
    <Router>
      <div className="CartProduct">
        <Link to={"/product/" + props.id}>
          <img className="CartImg" src={props.img} alt="" />
        </Link>
        <div>Count: {props.count}</div>
        <div>Name: {props.name}</div>
        {/* <div>Price: {props.price}</div> */}

        <div>
          <button onClick={props.cartCountDown}>-</button>
          <button onClick={props.cartCountUp}>+</button>
        </div>
      </div>
    </Router>
  );
};
export default CartProduct;

import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
// import productPage from "./../pages/productPage.js";
import "./Product.css";

const Product = (props) => {
  return (
    <Router>
      <div className="Product">
        <Link to={"/product/" + props.id}>
          <img className="img" src={props.img} alt="" />
        </Link>
        <div>Count: {props.count}</div>
        <div>Name: {props.name}</div>
        <div>Price: {props.price}</div>
        <div>
          <button onClick={props.cartCountDown}>הוצא מהעגלה</button>
          <button onClick={props.cartCountUp}>הוסף לעגלה</button>
        </div>
      </div>
    </Router>
  );
};
export default Product;

import React from "react";
import { useState } from "react";
import CartProduct from "../CartProduct/CartProduct";
import "./cart.css";

const Cart = (props) => {
  return (
    <div className="Cart">
      <img
        className="cartImg"
        src="https://previews.123rf.com/images/val2014/val20141603/val2014160300006/54302308-shopping-cart-icon.jpg"
        alt=""
      />
      {props.cartProducts.map((product) => (
        <CartProduct
          key={product.id}
          name={product.title}
          count={product.count}
          img={product.image}
          price={product.price}
          cartCountDown={() => props.cartCountDown(product)}
          cartCountUp={() => props.cartCountUp(product)}
        />
      ))}
    </div>
  );
};

export default Cart;

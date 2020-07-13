import React from "react";
import "./cart.css";

class Cart extends React.Component {
  state = {
    count: this.props.count,
  };
  render() {
    return (
      <div className="Cart">
        <img
          className="img"
          src="https://previews.123rf.com/images/val2014/val20141603/val2014160300006/54302308-shopping-cart-icon.jpg"
          alt=""
        />
        <div className="count">{this.props.count}</div>
      </div>
    );
  }
}
export default Cart;

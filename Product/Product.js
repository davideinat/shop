import React from "react";
import "./Product.css";

class Product extends React.Component {
  state = {
    count: this.props.amount,
  };
  addToCart = () => {
    if (this.state.count > 0) {
      this.setState(({ count }) => ({ count: count - 1 }));
    }
  };
  removeFromCart = () => {
    if (this.state.count < this.props.amount)
      this.setState(({ count }) => ({ count: count + 1 }));
  };
  render() {
    return (
      <div className="Product">
        <img className="img" src={this.props.img} alt="" />
        <div>Count: {this.state.count}</div>
        <div>
          <div></div>
          <div onClick={() => this.props.cartCountDown()}>
            <button onClick={this.removeFromCart}>הוצא מהעגלה</button>
          </div>
          <div onClick={() => this.props.cartCountUp()}>
            <button onClick={this.addToCart}>הוסף לעגלה</button>
          </div>
        </div>
      </div>
    );
  }
}
export default Product;

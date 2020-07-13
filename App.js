import React from "react";
import Header from "./Header/Header.js";
import Cart from "./Cart/Cart.js";
import Product from "./Product/Product.js";
import "./App.css";
// import { render } from "@testing-library/react";

class App extends React.Component {
  state = {
    count: 0,
    Products: [
      {
        key: 11,
        name: "bike",
        amount: 2,
        img:
          "https://www.ashops.co.il/Shops/shop_1337/products/538/picture_74.jpg",
        count: 0,
      },
      {
        key: 12,
        name: "basket_ball",
        amount: 5,
        img: "https://shop.maccabi.co.il/wp-content/uploads/2019/11/760.jpg",
        count: 0,
      },
      {
        key: 13,
        name: "corkinet",
        amount: 5,
        img:
          "https://cdn.azrieli.com/Images/79d2c612-f27a-4e4f-9f30-b014201c42cc/Normal/852c1327.jpg",
        count: 0,
      },
      {
        key: 14,
        name: "doll",
        amount: 5,
        img:
          "https://cdn.azrieli.com/Images/74606822-133b-4eb9-aec5-edbe4191e21f/Normal/ab3e5618.jpg",
        count: 0,
      },
      {
        key: 15,
        name: "baloon",
        amount: 5,
        img:
          "https://www.partyinabox.co.il/media/catalog/product/cache/1/thumbnail/600x600/9df78eab33525d08d6e5fb8d27136e95/b/l/blue-metallic-balloons.jpg",
        count: 0,
      },
      {
        key: 16,
        name: "tennis_ball",
        amount: 5,
        img:
          "https://www.pandapets.co.il/images/shop/product/tennis%20ball.jpg",
        count: 0,
      },
    ],
  };

  render() {
    const { Products } = this.state;
    return (
      <div>
        <div className="App">
          <Header />
          <Cart count={this.state.count} />
          {Products.map((product) => (
            <Product
              key={product.key}
              name={product.name}
              amount={product.amount}
              img={product.img}
              cartCountDown={() =>
                this.setState(({ count }) => ({ count: count - 1 }))
              }
              cartCountUp={() =>
                this.setState(({ count }) => ({ count: count + 1 }))
              }
            />
          ))}
        </div>
      </div>
    );
  }
}
export default App;

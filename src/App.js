import React, { useState, useEffect } from "react";
import Header from "./Header/Header.js";
import Cart from "./Cart/Cart.js";
import Product from "./Product/Product.js";
import axios from "axios";
// import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
// import productPage from "./pages/productPage.js";
import "./App.css";

const App = (props) => {
  const [productData, setProductData] = useState([]); // סטייט רשימת מוצרים
  const [cartProducts, setCartProducts] = useState([]); //סטייט המוצרים בעגלה
  const [priceRange, setPriceRange] = useState([0, 0]); //סטייט טווח המחירים
  const [MinMax, setMinMax] = useState([]); //סטייט המוצר הזול והמוצר היקר

  const addToCart = (product) => {
    //פונקציה להוספת מוצר לעגלה
    if (product.count === 0) return;
    setProductData(
      productData.map((p) =>
        p.id === product.id ? { ...p, count: p.count - 1 } : p
      )
    );
    if (cartProducts.some((p) => p.id === product.id)) {
      setCartProducts(
        cartProducts.map((p) =>
          p.id === product.id ? { ...p, count: p.count + 1 } : p
        )
      );
    } else {
      setCartProducts([...cartProducts, { ...product, count: 1 }]);
    }
  };

  const removeFromCart = (product) => {
    //פונקציה להסרת מוצר מהעגלה
    if (product.count === product.quantity) return;
    setProductData(
      productData.map((p) =>
        p.id === product.id ? { ...p, count: p.count + 1 } : p
      )
    );
    if (cartProducts.some((p) => p.id === product.id && p.count > 1)) {
      setCartProducts(
        cartProducts.map((p) =>
          p.id === product.id ? { ...p, count: p.count - 1 } : p
        )
      );
    } else {
      if (cartProducts.some((p) => p.id === product.id)) {
        setCartProducts(cartProducts.filter((p) => p.id !== product.id));
      }
    }
  };

  useEffect(() => {
    //הורדת רשימת המוצרים
    const fetchData = async () => {
      const result = await axios(
        "https://handsomely-maze-stoat.glitch.me/products"
      );
      setProductData(result.data.map((p) => ({ ...p, count: p.quantity })));
      let priceList = result.data.map((a) => a.price);
      const minMaxArr = [Math.min(...priceList), Math.max(...priceList)];
      setMinMax([...minMaxArr]);
      setPriceRange([...minMaxArr]);
    };
    fetchData();
  }, []);

  return (
    <div>
      <div className="App">
        <Header
          min={MinMax[0]}
          max={MinMax[1]}
          defaultValue={[...MinMax]}
          onChange={setPriceRange}
        />

        <Cart
          cartProducts={cartProducts}
          cartCountDown={(product) => removeFromCart(product)}
          cartCountUp={(product) => addToCart(product)}
        />

        {productData
          .filter(
            (product) =>
              product.price >= priceRange[0] && product.price <= priceRange[1]
          )
          .map((product) => (
            <Product
              key={product.id}
              name={product.title}
              count={product.count}
              img={product.image}
              price={product.price}
              cartCountDown={() => removeFromCart(product)}
              cartCountUp={() => addToCart(product)}
            />
          ))}
      </div>
    </div>
  );
};
export default App;

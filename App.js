import React from "react";
import Header from "./components/Header";
import Productlist from "./components/Productlist";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Cart from "./components/Cart";
import Footer from "./components/Footer";
import "./DarkMode.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import SingleProduct from "./components/SingleProduct";

function App() {
  const [Theme, setTheme] = useState("light");
  const toggleTheme = () => {
    if (Theme == "light") {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  };

  useEffect(() => {
    document.body.className = Theme;
  }, [Theme]);

  const [products, setproducts] = useState([]);
  const data = async () => {
    const res = await fetch("https://fakestoreapi.com/products");
    const da_ta = await res.json();
    console.log('below  is data:')
    console.log(da_ta);
    setproducts( da_ta);
  };

  useEffect(() => {
    data();
  }, []);

  const [cart, setcart] = useState([]);
  console.log('this is cart')
  console.log(cart);
  const AddToCartHandler = (data) => {
    console.log('items in cart')
    console.log(data);
    setcart([...cart, { ...data, quantity: 1 }]);
  };

  
  

   
  return (
    <>
      <Router>
        <Header count={cart.length} toggleTheme={toggleTheme} />
        <Routes>
          <Route
            exact
            path="/"
            element={
              <Productlist
                products={products}
                AddToCartHandler={AddToCartHandler}
                // SingleProductHandler={SingleProductHandler}
              />
            }
          />
          <Route path="/cart" element={<Cart cart={cart} />} />
          <Route
            path="/singleproductpage"
            element={<SingleProduct/>}
          />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;

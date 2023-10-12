import React, { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Products from "./pages/Products";
import Login from "./pages/Login";
import PageNotFound from "./pages/PageNotFound";
import Header from "./components/Header";
import Foter from "./components/Foter";
import Cart from "./pages/Cart";
import MainStore from "./context/MainStore";
import axios from "axios";

const App = () => {
  const [products, setProducts] = useState([]);
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    axios({
      method: "get",
      url: "https://dataapi-tygq.onrender.com/products",
    }).then((data) => setProducts(data.data));
  }, []);

  return (
    <MainStore.Provider value={{ products, cartItems }}>
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/about" element={<About />} />
        <Route path="/login" element={<Login />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>

      <Foter />
    </MainStore.Provider>
  );
};

export default App;

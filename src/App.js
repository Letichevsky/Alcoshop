import React, { useState } from "react";
import Header from "./components/Header";
import BeerCider from "./components/BeerCider";
import Wine from "./components/Wine";
import Champagne from "./components/Champagne";
import WhiskeySpirits from "./components/WhiskeySpirits";
import Drinks from "./components/Drinks";
import Footer from "./components/Footer";
import Terms from "./components/Terms";
import Privacy from "./components/Privacy";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";

import Home from "./components/Home";

function App() {
  const [cartItems, setCartItems] = useState([]);

  // Предотвращение добавление дублирующихся товаров в корзину
  // И изменение количества одинаковых товаров
  const updateItemCount = (items, newItem) => {
    const updatedItems = [...items];
    let found = false;

    updatedItems.forEach((item) => {
      if (item.name === newItem.name) {
        item.count += 1;
        found = true;
      }
    });

    if (!found) {
      updatedItems.push({ ...newItem, count: 1 });
    }

    return updatedItems;
  };

  // Добавление товара в корзину
  const handleAddToCart = (item) => {
    const updatedCart = updateItemCount(cartItems, item);
    setCartItems(updatedCart);
  };

  // Удаление товара из корзины
  const handleRemoveFromCart = (index) => {
    const updatedCart = [...cartItems];
    const item = updatedCart[index];

    if (item.count > 1) {
      item.count -= 1;
    } else {
      updatedCart.splice(index, 1);
    }

    setCartItems(updatedCart);
  };

  return (
    <div className="App">
      <Router>
        <Header
          cartItems={cartItems}
          onRemoveFromCart={handleRemoveFromCart}
          onAddToCart={handleAddToCart}
        />

        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route
            path="/BeerCider"
            element={<BeerCider onAddToCart={handleAddToCart} />}
          />
          <Route
            path="/Wine"
            element={<Wine onAddToCart={handleAddToCart} />}
          />
          <Route
            path="/Champagne"
            element={<Champagne onAddToCart={handleAddToCart} />}
          />
          <Route
            path="/WhiskeySpirits"
            element={<WhiskeySpirits onAddToCart={handleAddToCart} />}
          />
          <Route
            path="/Drinks"
            element={<Drinks onAddToCart={handleAddToCart} />}
          />
          <Route path="/Terms" element={<Terms />} />
          <Route path="/Privacy" element={<Privacy />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;

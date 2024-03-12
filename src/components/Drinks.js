import React, { useEffect } from "react";
import "./ProductsSection.css";
import "./Drinks.css";
import ProductItem from "./ProductItem";

function Drinks({ onAddToCart }) {
  const products = [
    {
      img: "cola.jpg",
      name: "COCA-COLA 1l",
      price: 10.0,
    },
    {
      img: "colaZero.jpg",
      name: "COCA-COLA ZERO 1l",
      price: 10.0,
    },
    {
      img: "fanta.jpg",
      name: "FANTA 1l",
      price: 10.0,
    },
    {
      img: "sprite.jpg",
      name: "SPRITE 1l",
      price: 10.0,
    },
    {
      img: "shwps.jpg",
      name: "SCHWEPPES 1l",
      price: 10.0,
    },
    {
      img: "redbull.jpg",
      name: "RED BULL ENERGY DRINK 250ml Pack of 4",
      price: 49.0,
    },
  ];

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="drinks">
      <h1 className="products_section_title">Drinks</h1>
      <div className="products_section">
        {products.map((products, index) => (
          <ProductItem
            key={index}
            product={products}
            onAddToCart={onAddToCart}
          />
        ))}
      </div>
    </div>
  );
}

export default Drinks;

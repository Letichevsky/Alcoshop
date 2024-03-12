import React, { useEffect } from "react";
import "./ProductsSection.css";
import "./Champagne.css";
import ProductItem from "./ProductItem";

function Champagne({ onAddToCart }) {
  const products = [
    {
      img: "MUMMGRANDROSE75CL.png",
      name: "MUMM GRAND ROSÉ 75CL",
      price: 250.0,
    },
    {
      img: "11.png",
      name: "MOËT & CHANDON NECTAR IMPÉRIAL 75CL",
      price: 318.0,
    },
    {
      img: "22.png",
      name: "MOËT & CHANDON ROSÉ IMPÉRIAL 75CL",
      price: 320.0,
    },
    {
      img: "33.png",
      name: "MOËT & CHANDON ICE IMPÉRIAL 75CL",
      price: 320.0,
    },
    {
      img: "MUMMCORDONROUGE15L.png",
      name: "MUMM CORDON ROUGE 1.5L",
      price: 520.0,
    },
    {
      img: "ARMANDDEBRIGNACACEOFSPADESROSE75CL.png",
      name: "ARMAND DE BRIGNAC ACE OF SPADES ROSÉ 75CL",
      price: 1923.0,
    },
    {
      img: "ARMANDDEBRIGNACACEOFSPADESBRUTGOLD75CL.png",
      name: "ARMAND DE BRIGNAC ACE OF SPADES BRUT GOLD 75CL",
      price: 1900.0,
    },
  ];

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="champagne">
      <h1 className="products_section_title">Champagne</h1>
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

export default Champagne;

import React from "react";
import "./ProductItem.css";
function ProductItem({ onAddToCart, product }) {
  const handleAddToCart = () => {
    if (onAddToCart) {
      onAddToCart({ ...product });
    }
  };

  return (
    <div className="productItem">
      <img
        src={"./img/" + product.img}
        alt={product.name}
        className="item_img"
      />
      <h3 className="item_title">{product.name}</h3>
      <p className="item_price">
        AED <span>{product.price.toFixed(2)}</span>
      </p>
      <button className="item_button" onClick={handleAddToCart}>
        Add to cart
      </button>
    </div>
  );
}

export default ProductItem;

import React, { useState } from "react";
import CartIcon from "../assets/cart.svg";
import "./Cart.css";
import CountPoint from "./CountPoint";

function Cart({ onClick, isCartBoxOpen, cartItems }) {
  const [cartCheck, setCartCheck] = useState(false);

  const handleCartClick = () => {
    setCartCheck(!cartCheck);
    if (onClick) {
      onClick(!isCartBoxOpen);
    }
  };
  return (
    <div className="Cart" onClick={handleCartClick}>
      <img src={CartIcon} alt="" className="CartIcon" />
      <CountPoint count={cartItems.length} />
    </div>
  );
}

export default Cart;

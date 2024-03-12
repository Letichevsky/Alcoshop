import React from "react";
import "./Burger.css";

function Burger({ onClick, isBurgerMenuOpen }) {
  const handleBurgerClick = () => {
    if (onClick) {
      onClick(!isBurgerMenuOpen);
    }
  };

  return (
    <div className="burgerBox" onClick={handleBurgerClick}>
      {isBurgerMenuOpen ? (
        <>
          <div className="burgerLine burgerLine1"></div>
          <div className="burgerLine burgerLine2"></div>
        </>
      ) : (
        <>
          <div className="burgerLine"></div>
          <div className="burgerLine"></div>
          <div className="burgerLine"></div>
        </>
      )}
    </div>
  );
}

export default Burger;

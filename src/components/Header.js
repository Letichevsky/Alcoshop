import React, { useState } from "react";
import Burger from "./Burger";
import Cart from "./Cart";
import logo from "../assets/Logo.svg";
import delivery from "../assets/icon_clocktxt.svg";
import "./Header.css";
import BurgerMenu from "./BurgerMenu";
import CartBox from "./CartBox";
import { useNavigate } from "react-router-dom";
// import searchIcon from "../assets/search.svg";
import DeliveryInfo from "./DeliveryInfo";

function Header({ cartItems, onAddToCart, onRemoveFromCart }) {
  // Открытие/закрытие бургер меню
  const [isBurgerMenuOpen, setBurgerMenuOpen] = useState(false);
  const toggleBurgerMenu = () => {
    setBurgerMenuOpen(!isBurgerMenuOpen);

    // Предотвращение открытия бургер меню и корзины одновременно
    if (isCartBoxOpen) {
      setCartBoxOpen(false);
    }
  };

  // Открытие/закрытие корзины
  const [isCartBoxOpen, setCartBoxOpen] = useState(false);
  const toggleCartBox = () => {
    setCartBoxOpen(!isCartBoxOpen);

    // Предотвращение открытия бургер меню и корзины одновременно
    if (isBurgerMenuOpen) {
      setBurgerMenuOpen(false);
    }
  };

  const [isDeliveryInfoVisible, setDeliveryInfoVisible] = useState(false);
  // Показать DeliveryInfo
  const showDeliveryInfo = (total) => {
    setTotalToPay(total);
    setDeliveryInfoVisible(true);
  };
  const [totalToPay, setTotalToPay] = useState(0);
  // Скрыть DeliveryInfo
  const hideDeliveryInfo = () => {
    setDeliveryInfoVisible(false);
  };

  // Возвращение домой по клику на лого
  const navigate = useNavigate();

  const goHome = () => {
    navigate("/");
  };

  return (
    <>
      <div className="Header">
        <div className="burgerSearchBox">
          <Burger
            onClick={toggleBurgerMenu}
            isBurgerMenuOpen={isBurgerMenuOpen}
          />
          {/* <img src={searchIcon} alt="not found" className="searhIcon" /> */}
          {/* <input
            type="search"
            name="search"
            id="search"
            className="search"
            placeholder="search"
          /> */}
        </div>
        <div className="logo">
          <img src={logo} alt="no-found" onClick={goHome} />
        </div>
        <div className="deliveryCartBox">
          <img src={delivery} alt="" className="delivery" />
          <Cart
            onClick={toggleCartBox}
            isCartBoxOpen={isCartBoxOpen}
            cartItems={cartItems}
          />
        </div>
      </div>
      {isDeliveryInfoVisible && (
        <DeliveryInfo onClose={hideDeliveryInfo} totalToPay={totalToPay} />
      )}{" "}
      {/* Передаем функцию для скрытия DeliveryInfo */}
      <>
        {isBurgerMenuOpen && <BurgerMenu onMouseLeave={toggleBurgerMenu} />}
        {isCartBoxOpen && (
          <CartBox
            cartItems={cartItems}
            onRemoveFromCart={onRemoveFromCart}
            onAddToCart={onAddToCart}
            onMouseLeave={toggleCartBox}
            onPayButtonClick={showDeliveryInfo}
          />
        )}
      </>
    </>
  );
}

export default Header;

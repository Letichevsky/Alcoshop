import React from "react";
import "./BurgerMenu.css";
import { Link, useLocation } from "react-router-dom";

function BurgerMenu({ onMouseLeave }) {
  const location = useLocation();
  return (
    <div className="burgerMenu" onMouseLeave={onMouseLeave}>
      <Link
        className={location.pathname === "/" ? "navLink active" : "navLink"}
        to="/"
      >
        Home
      </Link>
      <Link
        className={
          location.pathname === "/BeerCider" ? "navLink active" : "navLink"
        }
        to="/BeerCider"
      >
        Beer & Cider
      </Link>
      <Link
        className={location.pathname === "/Wine" ? "navLink active" : "navLink"}
        to="/Wine"
      >
        Wine
      </Link>
      <Link
        className={
          location.pathname === "/Champagne" ? "navLink active" : "navLink"
        }
        to="/Champagne"
      >
        Champagne
      </Link>
      <Link
        className={
          location.pathname === "/WhiskeySpirits" ? "navLink active" : "navLink"
        }
        to="/WhiskeySpirits"
      >
        Whiskey & Spirits
      </Link>
      <Link
        className={
          location.pathname === "/Drinks" ? "navLink active" : "navLink"
        }
        to="/Drinks"
      >
        Drinks
      </Link>
    </div>
  );
}

export default BurgerMenu;

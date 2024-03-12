import React from "react";
import "./Footer.css";
import logo from "../assets/f_logo.svg";
import { useNavigate } from "react-router-dom";
import visa from "../assets/visa.png";
import mastercard from "../assets/mastercard.png";

function Footer() {
  // Возвращение домой по клику на лого
  const navigate = useNavigate();

  const goHome = () => {
    navigate("/");
  };

  const goTerms = () => {
    navigate("/Terms");
  };
  const goPrivacy = () => {
    navigate("/Privacy");
  };

  return (
    <div className="footer">
      <div className="leftBox">
        <div className="f_logo">
          <img src={logo} alt="no-found" onClick={goHome} />
        </div>
        <h4 className="f_link" onClick={goTerms}>
          TERMS & CONDITIONS
        </h4>
        <h4 className="f_link" onClick={goPrivacy}>
          PRIVACY POLICY
        </h4>
        <h4 className="f_link" onClick={goHome}>
          FAQS
        </h4>
      </div>
      <div className="rightBox">
        <p className="f_text">
          To confirm and process your order on Alcoline, you are required to pay
          online via credit/debit card. The site uses a secure Payment Gateway
          to process payments. No credit/debit card details are held by Alcoline
        </p>
        <p className="f_text">
          We accept payments online using Visa, MasterCard and American Express
          credit/debit card in AED.
        </p>
        <div className="paymentsBox">
          <img src={visa} alt="not found" className="paymentsLogo" />
          <img src={mastercard} alt="not found" className="paymentsLogo" />
        </div>
      </div>
      <div className="bottomBox">
        <p className="copyright">© Copyright 2024</p>
      </div>
    </div>
  );
}

export default Footer;

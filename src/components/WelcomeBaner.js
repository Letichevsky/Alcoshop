import React, { useState } from "react";
import "./WelcomeBaner.css";

function WelcomeBaner({ toggleWelcomeBaner }) {
  const [isAgeChecked, setIsAgeChecked] = useState(false);
  const [isAcceptChecked, setIsAcceptChecked] = useState(false);

  // Обработчики для изменения состояния чекбоксов
  const handleAgeCheckboxChange = () => {
    setIsAgeChecked(!isAgeChecked);
  };

  const handleAcceptCheckboxChange = () => {
    setIsAcceptChecked(!isAcceptChecked);
  };

  // Проверка, активна ли кнопка
  const isButtonActive = isAgeChecked && isAcceptChecked;

  return (
    <div className="welcomeBanerBg">
      <div className="welcomeBaner">
        <h2 className="welcomeBanerTitle">Disclaimer</h2>
        <p className="welcomeBanerDescription">
          We are pleased to offer you high-quality alcoholic beverages. However,
          we would like to remind you that certain restrictions on alcohol
          consumption are in place in Dubai. Public consumption of alcohol is
          illegal and can lead to serious consequences. Please consume alcohol
          responsibly and in a private setting.
        </p>
        <div className="checkboxBox">
          <input
            type="checkbox"
            name="age"
            id="checkboxAge"
            checked={isAgeChecked}
            onChange={handleAgeCheckboxChange}
          />
          <p className="checkboxDesc">* I am over 21 years old</p>
        </div>
        <div className="checkboxBox">
          <input
            type="checkbox"
            name="accept"
            id="checkboxAccept"
            checked={isAcceptChecked}
            onChange={handleAcceptCheckboxChange}
          />
          <p className="checkboxDesc">* I accept the terms of use</p>
        </div>
        <button
          className={`welcomeBanerButton ${isButtonActive ? "" : "disabled"}`}
          onClick={() => {
            if (isButtonActive) {
              toggleWelcomeBaner();
            }
          }}
          disabled={!isButtonActive}
        >
          shop now
        </button>
      </div>
    </div>
  );
}

export default WelcomeBaner;

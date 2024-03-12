import React from "react";
import "./DeliveryInfo.css";

function DeliveryInfo({ onClose, totalToPay }) {
  // Кнопка перехода к оплате
  const toPay = () => {
    const inputName = document.getElementById("name");
    const inputPhone = document.getElementById("tel");
    const inputAddress = document.getElementById("address");
    const inputComment = document.getElementById("comment");
    alert(
      `Name: ${inputName.value}, ` +
        `Phone: ${inputPhone.value}, ` +
        `Address: ${inputAddress.value}, ` +
        `Comment: ${inputComment.value}, ` +
        `Total to pay: ${totalToPay}`
    );
    return;
  };

  return (
    <div className="deliveryInfo">
      <form action="/pay" className="deliveryInfoBox" id="deliveryForm">
        <div className="closeButtonBox">
          <h2 className="deliveryInfoTitle">Delivery information</h2>
          <div className="closeButton" onClick={() => onClose()}></div>
        </div>
        <div className="inputArea">
          <div className="inputBox">
            <label htmlFor="name" className="inputLabel">
              Name *
            </label>
            <input
              type="text"
              name="name"
              id="name"
              placeholder="Enter your name here"
              className="delInput"
              required
            />
          </div>
          <div className="inputBox">
            <label htmlFor="tel" className="inputLabel">
              Phone *
            </label>
            <input
              type="tel"
              name="tel"
              id="tel"
              placeholder="+971 222-222-222"
              className="delInput"
              required
            />
          </div>
          <div className="inputBox">
            <label htmlFor="address" className="inputLabel">
              Delivery address *
            </label>
            <input
              type="text"
              name="address"
              id="address"
              placeholder="Ex. Dubai, 16 Street 441"
              className="delInput"
              required
            />
          </div>
          <div className="inputBox">
            <label htmlFor="comment" className="inputLabel">
              Note
            </label>
            <textarea
              type="text"
              name="comment"
              id="comment"
              placeholder="Additional note for the courier"
              className="delInput inputComment"
            />
          </div>
          <button
            type="submit"
            form="deliveryForm"
            className="item_button deliveryPayButton"
            onClick={toPay}
          >
            PAY
          </button>
        </div>
      </form>
    </div>
  );
}

export default DeliveryInfo;

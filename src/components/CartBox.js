import React from "react";
import "./CartBox.css";

function CartBox({
  cartItems,
  onAddToCart,
  onRemoveFromCart,
  onMouseLeave,
  onPayButtonClick,
}) {
  // Общая стоимость товаров в корзине
  const total = cartItems
    .reduce((sum, item) => sum + (item.price * item.count || 0), 0)
    .toFixed(2);

  // Увеличение количества уникального товара в корзине
  const handleAddToCart = (item) => {
    if (onAddToCart) {
      onAddToCart(item);
    }
  };

  return (
    <div className="cartBox" onMouseLeave={onMouseLeave}>
      <h2>Your Cart</h2>
      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <div className="cartItem">
          <>
            <div>
              {cartItems.map((item, index) => (
                <div className="item_body" key={index}>
                  <div className="item_half">
                    <img
                      src={"./img/" + item.img}
                      alt={item.id}
                      className="cartItemImg"
                    />
                  </div>
                  <div className="item_half">
                    <div key={index}>
                      <h4 className="itemTitle">{item.name}</h4>
                      <p className="itemPrice">
                        - AED {(item.price || 0).toFixed(2)}
                      </p>
                      <div className="itemButtonsBox">
                        <button
                          className="itemButton"
                          onClick={() => onRemoveFromCart(index)}
                        >
                          -
                        </button>
                        <div className="itemCount">{item.count}</div>
                        <button
                          className="itemButton"
                          onClick={() => handleAddToCart(item)}
                        >
                          +
                        </button>
                      </div>
                      <p className="itemPrice">
                        total: AED {(item.price * item.count || 0).toFixed(2)}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <p>
              Total: <span className="totalPrice">AED {total}</span>
            </p>
            <button
              className="payButton"
              onClick={() => onPayButtonClick(total)}
            >
              PAY
            </button>
          </>
        </div>
      )}
    </div>
  );
}

export default CartBox;

import React from "react";
import { Link } from "react-router-dom";

function Cart({ cart, removeFromCart }) {
  const total = cart.reduce((sum, item) => sum + item.price, 0);

  // Remove by index instead of id to remove only one instance
  const handleRemove = (index) => {
    removeFromCart(index);
  };

  return (
    <div className="cart-container">
      <h2>Your Cart</h2>
      {cart.length === 0 && <p>Your cart is empty.</p>}

      {cart.map((item, index) => (
        <div key={index} className="cart-item">
          <img src={item.image} alt={item.name} className="cart-item-img" />
          <div className="cart-item-info">
            <h3>{item.name}</h3>
            <p>₹{item.price}</p>
          </div>
          <button className="remove-btn" onClick={() => handleRemove(index)}>
            Remove
          </button>
        </div>
      ))}

      {cart.length > 0 && (
        <>
          <h3>Total: ₹{total}</h3>
          <Link to="/checkout">
            <button className="checkout-btn">Proceed to Checkout</button>
          </Link>
        </>
      )}
    </div>
  );
}

export default Cart;

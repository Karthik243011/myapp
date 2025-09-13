import React from "react";
import { useNavigate } from "react-router-dom";

function Transaction({ order }) {
  const navigate = useNavigate();
  const handlePayment = () => {
    alert("Payment Successful!");
    navigate("/order-placed");
  };

  return (
     <div className="transaction-container">
    <h2>Transaction</h2>
    <p>Name: {order?.name}</p>
    <p>Email: {order?.email}</p>
    <button onClick={handlePayment}>Pay Now</button>
  </div>
  );
}
export default Transaction;

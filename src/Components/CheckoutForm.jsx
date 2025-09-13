import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function CheckoutForm({ setOrder }) {
  const [form, setForm] = useState({ name: "", address: "", email: "" });
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    setOrder(form);
    navigate("/transaction");
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Checkout</h2>
      <input placeholder="Name" required onChange={(e) => setForm({ ...form, name: e.target.value })} />
      <input placeholder="Address" required onChange={(e) => setForm({ ...form, address: e.target.value })} />
      <input placeholder="Email" required type="email" onChange={(e) => setForm({ ...form, email: e.target.value })} />
      <button type="submit">Proceed to Transaction</button>
    </form>
  );
}
export default CheckoutForm;

import React, { useState } from "react";
import { Routes, Route, Link } from "react-router-dom";
import ProductList from "./Components/ProductList";
import Cart from "./components/Cart";
import CheckoutForm from "./components/CheckoutForm";
import OrderPlaced from "./components/OrderPlaced";
import Transaction from "./components/Transaction";
import productsData from "./Components/productsData.json";
import "./Components/style.css"
function App() {
  const [cart, setCart] = useState([]);
  const [order, setOrder] = useState(null);

  const addToCart = (product) => setCart([...cart, product]);
const removeFromCart = (index) => {
  setCart(prevCart => prevCart.filter((_, i) => i !== index));
};


  return (
    <>
      <nav>
        <Link to="/">Home</Link> |{" "}
        <Link to="/cart">Cart ({cart.length})</Link>
      </nav>

      <Routes>
        <Route
          path="/"
          element={<ProductList products={productsData} addToCart={addToCart} />}
        />
        <Route
          path="/cart"
          element={<Cart cart={cart} removeFromCart={removeFromCart} />}
        />
        <Route path="/checkout" element={<CheckoutForm setOrder={setOrder} />} />
        <Route path="/transaction" element={<Transaction order={order} />} />
        <Route path="/order-placed" element={<OrderPlaced order={order} />} />
      </Routes>
    </>
  );
}

export default App;

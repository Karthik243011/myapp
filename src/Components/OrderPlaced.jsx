import React from "react";

function OrderPlaced({ order }) {
  return (
    <div>
      <h2>Order Placed 🎉</h2>
      <p>Thanks {order?.name}! Your order will be delivered to {order?.address}</p>
    </div>
  );
}
export default OrderPlaced;

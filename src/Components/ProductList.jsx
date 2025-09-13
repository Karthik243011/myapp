import React, { useState } from "react";

function ProductList({ products, addToCart }) {
  const [search, setSearch] = useState("");
  const [sort, setSort] = useState("asc");
  const [filter, setFilter] = useState("All");

  // Filter + search + sort
  const filteredProducts = products
    .filter((p) => p.name.toLowerCase().includes(search.toLowerCase()))
    .filter((p) => {
      if (filter === "All") return true;
      if (filter === "Computing") return ["Laptop", "Keyboard", "Mouse"].includes(p.type);
      if (filter === "AudioWearable") return ["Headphones", "Earbuds", "Smartwatch", "Speaker", "Smartphone", "Power Bank"].includes(p.type);
      if (filter === "SmartHome") return ["Smart Home", "Camera", "Appliance", "Smart Device", "Charger", "Car Accessory"].includes(p.type);
      return true;
    })
    .sort((a, b) => (sort === "asc" ? a.price - b.price : b.price - a.price));

  return (
    <div className="product-list-container">
      <h2>NextGen Electronics</h2>

      <div className="product-controls">
        <input
          placeholder="Search..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <select onChange={(e) => setSort(e.target.value)} value={sort}>
          <option value="asc">Price: Low to High</option>
          <option value="desc">Price: High to Low</option>
        </select>
        <select onChange={(e) => setFilter(e.target.value)} value={filter}>
          <option value="All">All Electronics</option>
          <option value="Computing">Computing</option>
          <option value="AudioWearable">Audio & Wearables</option>
          <option value="SmartHome">Smart Home & Devices</option>
        </select>
      </div>

      <div className="product-cards">
        {filteredProducts.map((product) => (
          <div key={product.id} className="product-card">
            <img src={product.image} alt={product.name} />
            <h2>{product.name}</h2>
            <p>₹{product.price}</p>
            <button onClick={() => addToCart(product)}>Add to Cart</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProductList;

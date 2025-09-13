import React from 'react';

const products = [
  { id: 1, name: 'Laptop', price: 999, image: 'https://via.placeholder.com/150' },
  { id: 2, name: 'Smartphone', price: 699, image: 'https://via.placeholder.com/150' },
  { id: 3, name: 'Headphones', price: 199, image: 'https://via.placeholder.com/150' },
];

const ProductList = () => {
  return (
    <div style={styles.container}>
      {products.map(product => (
        <div key={product.id} style={styles.card}>
          <img src={product.image} alt={product.name} style={styles.image} />
          <h2>{product.name}</h2>
          <p>${product.price}</p>
        </div>
      ))}
    </div>
  );
};

const styles = {
  container: {
    display: 'flex',
    gap: '20px',
    flexWrap: 'wrap',
    padding: '20px',
    justifyContent: 'center'
  },
  card: {
    border: '1px solid #ddd',
    borderRadius: '8px',
    padding: '16px',
    textAlign: 'center',
    width: '200px',
    boxShadow: '0 0 10px rgba(0,0,0,0.1)'
  },
  image: {
    width: '100%',
    height: 'auto'
  }
};

export default ProductList;

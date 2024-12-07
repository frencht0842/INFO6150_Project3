import React from 'react';
import { useCart } from '../context/CartContext';

function ProductCard({ product }) {
  const { addToCart } = useCart();

  return (
    <div className="product-card card">
      <img 
        src={product.image} 
        alt={product.name}
        className="product-image"
      />
      <div className="product-info">
        <h2 className="product-title">{product.name}</h2>
        <p className="product-description">{product.description}</p>
        <p className="product-price">${product.price}</p>
        <button 
          className="button"
          onClick={() => addToCart(product)}
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
}

export default ProductCard;
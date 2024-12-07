import React, { useState } from 'react';
import ProductCard from '../components/ProductCard';
import { products } from '../data/products';

function Products() {
  const [filter, setFilter] = useState('all');

  const filteredProducts = filter === 'all' 
    ? products 
    : products.filter(product => product.category === filter);

  return (
    <div>
      <h1>Our Products</h1>
      <div className="filter-controls">
        <button 
          className={`button ${filter === 'all' ? 'button-active' : ''}`}
          onClick={() => setFilter('all')}
        >
          All
        </button>
        <button 
          className={`button ${filter === 'flowering' ? 'button-active' : ''}`}
          onClick={() => setFilter('flowering')}
        >
          Flowering
        </button>
        <button 
          className={`button ${filter === 'nonflowering' ? 'button-active' : ''}`}
          onClick={() => setFilter('nonflowering')}
        >
          Nonflowering
        </button>
      </div>
      <div className="products-grid">
        {filteredProducts.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}

export default Products;

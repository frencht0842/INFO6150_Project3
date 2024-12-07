import React from 'react';
import { useCart } from '../context/CartContext';

function CartIcon({ onClick }) {
  const { cart } = useCart();
  const itemCount = cart.reduce((total, item) => total + item.quantity, 0);

  return (
    <button 
      className="cart-icon" 
      onClick={onClick}
      aria-label="Shopping cart"
    >
      🛒
      {itemCount > 0 && <span className="cart-badge">{itemCount}</span>}
    </button>
  );
}

export default CartIcon;
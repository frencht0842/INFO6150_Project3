import React, { useEffect, useRef } from 'react';
import { useCart } from '../context/CartContext';

function Cart({ isOpen, onClose }) {
  const { cart, removeFromCart, updateQuantity, cartTotal } = useCart();
  const closeButtonRef = useRef(null);

  useEffect(() => {
    if (isOpen) {
      closeButtonRef.current?.focus();
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };

    document.addEventListener('keydown', handleEscape);
    return () => document.removeEventListener('keydown', handleEscape);
  }, [isOpen, onClose]);

  return (
    <>
      <div 
        className={`cart-backdrop ${isOpen ? 'active' : ''}`}
        onClick={onClose}
        aria-hidden="true"
      />
      <div 
        className={`cart-panel ${isOpen ? 'cart-panel-open' : ''}`}
        role="dialog"
        aria-modal="true"
        aria-label="Shopping cart"
      >
        <div className="cart-header">
          <h2>Shopping Cart</h2>
          <button 
            ref={closeButtonRef}
            className="cart-close" 
            onClick={onClose}
            aria-label="Close cart"
          >
            ×
          </button>
        </div>
        
        <div className="cart-content">
          {cart.length === 0 ? (
            <div className="cart-empty">
              <p>Your cart is empty</p>
            </div>
          ) : (
            <>
              {cart.map(item => (
                <div key={item.id} className="cart-item">
                  <img src={item.image} alt={item.name} className="cart-item-image" />
                  <div className="cart-item-details">
                    <h3>{item.name}</h3>
                    <p>${item.price}</p>
                    <div className="cart-item-controls">
                      <button
                        className="button"
                        onClick={() => updateQuantity(item.id, item.quantity - 1)}
                        aria-label={`Decrease quantity of ${item.name}`}
                      >
                        -
                      </button>
                      <span>{item.quantity}</span>
                      <button
                        className="button"
                        onClick={() => updateQuantity(item.id, item.quantity + 1)}
                        aria-label={`Increase quantity of ${item.name}`}
                      >
                        +
                      </button>
                      <button
                        className="button button-remove"
                        onClick={() => removeFromCart(item.id)}
                      >
                        Remove
                      </button>
                    </div>
                  </div>
                </div>
              ))}
              <div className="cart-total">
                <h3>Total: ${cartTotal.toFixed(2)}</h3>
              </div>
            </>
          )}
        </div>
      </div>
    </>
  );
}

export default Cart;
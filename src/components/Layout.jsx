import React, { useState } from 'react';
import { Link, NavLink, Outlet } from 'react-router-dom';
import CartIcon from './CartIcon';
import Cart from './Cart';

function Layout() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleCart = () => {
    setIsCartOpen(!isCartOpen);
  };

  return (
    <>
      <a href="#main-content" className="skip-link">
        Skip to main content
      </a>
      <header className="header">
        <div className="container header-content">
          <Link to="/" className="brand">The Tree Site</Link>
          <button 
            className="hamburger-menu"
            onClick={toggleMenu}
            aria-label="Toggle navigation menu"
          >
            ☰
          </button>
          <nav className={`main-nav ${isMenuOpen ? 'active' : ''}`}>
            <NavLink to="/" className="nav-link" end>Home</NavLink>
            <NavLink to="/products" className="nav-link">Products</NavLink>
            <NavLink to="/gallery" className="nav-link">Gallery</NavLink>
            <NavLink to="/contact" className="nav-link">Contact</NavLink>
            <CartIcon onClick={toggleCart} />
          </nav>
        </div>
      </header>
      <Cart isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} />
      <main id="main-content" className="main-content">
        <div className="container">
          <Outlet />
        </div>
      </main>
    </>
  );
}

export default Layout;
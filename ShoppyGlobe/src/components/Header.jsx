import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
  return (
    <header className="header">
      <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/cart">Cart</Link></li>
        </ul>
      </nav>
      <div className="cart-icon">
        <Link to="/cart">🛒</Link>
      </div>
    </header>
  );
};

export default Header;
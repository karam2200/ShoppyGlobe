import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import CartItem from './CartItem';
import { clearCart } from '../redux/cartSlice';
import './Cart.css';

const Cart = () => {
  const cartItems = useSelector((state) => state.cart.items);
  const dispatch = useDispatch();

  const handleClearCart = () => {
    dispatch(clearCart());
  };

  return (
    <div className="cart">
      <h2>Shopping Cart</h2>
      {cartItems.length === 0 ? (
        <p>Your cart is empty!</p>
      ) : (
        <div>
          {cartItems.map((item) => (
            <CartItem key={item.id} item={item} />
          ))}
          <button onClick={handleClearCart}>Clear Cart</button>
        </div>
      )}
    </div>
  );
};

export default Cart;

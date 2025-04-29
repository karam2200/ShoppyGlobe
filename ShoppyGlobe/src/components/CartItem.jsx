import React from 'react';
import { useDispatch } from 'react-redux';
import { removeFromCart } from '../redux/cartSlice';
import './CartItem.css';

const CartItem = ({ item }) => {
  const dispatch = useDispatch();

  const handleRemove = () => {
    dispatch(removeFromCart(item.id));
  };

  return (
    <div className="cart-item">
      <img src={item.image} alt={item.title} />
      <div>
        <h4>{item.title}</h4>
        <p>Price: ${item.price}</p>
        <button onClick={handleRemove}>Remove</button>
      </div>
    </div>
  );
};

export default CartItem;

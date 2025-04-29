// src/redux/store.js

import { configureStore } from '@reduxjs/toolkit';
import cartReducer from './cartSlice';

const store = configureStore({
  reducer: {
    cart: cartReducer, // This defines the 'cart' slice of state
  },
});

export default store;

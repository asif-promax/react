import { configureStore } from '@reduxjs/toolkit';
// import counterReducer from './Counterslice'; 
import cartReducer from './Cartslice'
export const Store = configureStore({
  reducer: {
    // counter: counterReducer, // The key should match the slice name
    cart: cartReducer,
  },
});

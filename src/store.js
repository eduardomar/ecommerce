import { configureStore } from '@reduxjs/toolkit';
import shoppingCartsReducer from './views/shoppingCarts/shoppingCartsSlice';

export default configureStore({
  reducer: {
    shoppingCarts: shoppingCartsReducer,
  },
});

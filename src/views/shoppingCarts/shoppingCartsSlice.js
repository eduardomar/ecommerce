import { createSlice } from '@reduxjs/toolkit';

/* eslint-disable no-param-reassign */
const shoppingCartsSlice = createSlice({
  name: 'cart',
  initialState: {
    cartId: 1,
    products: [],
    subtotal: 0,
    open: true,
  },
  reducers: {
    toggle: (state) => {
      state.open = !state.open;
    },

    setProducts: (state, action) => {
      state.products = action.payload;

      state.subtotal = 0;
      if (Array.isArray(action.payload) && action.payload.length) {
        action.payload.forEach(({ quantity = 1, price = 0 }) => {
          state.subtotal += quantity * price;
        });
      }
    },
  },
});

export const { toggle, setProducts } = shoppingCartsSlice.actions;

export default shoppingCartsSlice.reducer;

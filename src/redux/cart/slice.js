import { createSlice, isAnyOf } from '@reduxjs/toolkit';
import { fetchCart, updateCart, checkoutCart } from './operations';

const INITIAL_STATE = {
  items: [],
  loading: false,
  error: null,
};

const handlePending = state => {
  state.loading = true;
  state.error = null;
};

const handleRejected = (state, action) => {
  state.loading = false;
  state.error = action.payload;
};

const cartSlice = createSlice({
  name: 'cart',
  initialState: INITIAL_STATE,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(fetchCart.fulfilled, (state, action) => {
        state.loading = false;
        state.items = action.payload.data;
      })
      .addCase(updateCart.fulfilled, (state, action) => {
        state.loading = false;
        state.items = action.payload.data;
      })
      .addCase(checkoutCart.fulfilled, state => {
        state.loading = false;
        state.items = [];
      })
      .addMatcher(
        isAnyOf(fetchCart.pending, updateCart.pending, checkoutCart.pending),
        handlePending
      )
      .addMatcher(
        isAnyOf(fetchCart.rejected, updateCart.rejected, checkoutCart.rejected),
        handleRejected
      );
  },
});

export const cartReducer = cartSlice.reducer;

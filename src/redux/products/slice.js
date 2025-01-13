import { createSlice, isAnyOf } from '@reduxjs/toolkit';
import { fetchCategories, fetchProducts, fetchProductsById } from './operations';

const INITIAL_STATE = {
  products: [],
  categories: [],
  selectedProduct: null,
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

const productsSlice = createSlice({
  name: 'products',
  initialState: INITIAL_STATE,

  extraReducers: builder => {
    builder
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.loading = false;
        state.products = action.payload.data.data;
      })
      .addCase(fetchProductsById.fulfilled, (state, action) => {
        state.loading = false;
        state.selectedProduct = action.payload.data.data;
      })
       .addCase(fetchCategories.fulfilled, (state, action) => {
        state.loading = false;
        state.categories = action.payload.data;
      })
      .addMatcher(
        isAnyOf(
          fetchProducts.pending,
          fetchProductsById.pending,
          fetchCategories.pending
        ),
        handlePending
      )
      .addMatcher(
         isAnyOf(
          fetchProducts.rejected,
          fetchProductsById.rejected,
          fetchCategories.rejected
        ),
        handleRejected
      );
  },
});

export const productsReducer = productsSlice.reducer;
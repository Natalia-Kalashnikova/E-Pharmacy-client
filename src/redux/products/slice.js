import { createSlice, isAnyOf } from '@reduxjs/toolkit';
import {
  fetchCategories,
  fetchProducts,
  fetchProductsById,
} from './operations';

const INITIAL_STATE = {
  products: [],
  categories: [],
  totalPages: 1,
  page: null,
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

  reducers: {
    changeProductsPage: (state, action) => {
      state.page = action.payload;
    },
  },

  extraReducers: builder => {
    builder
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.loading = false;
        state.products = action.payload.data.data;
        state.totalPages = action.payload.data.totalPages;
        state.page = action.payload.data.page;
      })
      .addCase(fetchProductsById.fulfilled, (state, action) => {
        state.loading = false;
        state.selectedProduct = action.payload.data;
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

export const { changeProductsPage } = productsSlice.actions;
export const productsReducer = productsSlice.reducer;

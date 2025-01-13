import { createSlice, isAnyOf } from '@reduxjs/toolkit';
import { fetchReviews } from './operations';

const INITIAL_STATE = {
  reviews: [],
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

const reviewsSlice = createSlice({
  name: 'reviews',
  initialState: INITIAL_STATE,
  extraReducers: builder => {
    builder
      .addCase(fetchReviews.fulfilled, (state, action) => {
        state.loading = false;
        state.reviews = action.payload.data.data;
      })
      .addMatcher(isAnyOf(fetchReviews.pending), handlePending)
      .addMatcher(isAnyOf(fetchReviews.rejected), handleRejected);
  },
});

export const reviewsReducer = reviewsSlice.reducer;
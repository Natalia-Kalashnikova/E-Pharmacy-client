import { createSlice, isAnyOf } from '@reduxjs/toolkit';
import { fetchStores, fetchNearestStores } from './operations';

const INITIAL_STATE = {
  stores: [],
  nearestStores: [],
  totalPages: 1,
  page: 1,
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

const storesSlice = createSlice({
  name: 'stores',
  initialState: INITIAL_STATE,
  reducers: {
    changePage: (state, action) => {
      state.page = action.payload;
    },
  },
  extraReducers: builder => {
    builder
      .addCase(fetchStores.fulfilled, (state, action) => {
        state.loading = false;
        state.stores = action.payload.data.data;
        state.totalPages = action.payload.totalPages;
        state.page = action.payload.page;
      })
      .addCase(fetchNearestStores.fulfilled, (state, action) => {
        state.loading = false;
        state.nearestStores = action.payload.data;
      })
      .addMatcher(
        isAnyOf(fetchStores.pending, fetchNearestStores.pending),
        handlePending
      )
      .addMatcher(
        isAnyOf(fetchStores.rejected, fetchNearestStores.rejected),
        handleRejected
      );
  },
});

export const { changePage } = storesSlice.actions;
export const storesReducer = storesSlice.reducer;
import { createAsyncThunk } from '@reduxjs/toolkit';
import { instance } from '../auth/operations';
import toast from 'react-hot-toast';

export const fetchReviews = createAsyncThunk(
  'reviews/fetchReviews',
  async (_, thunkApi) => {
    try {
      const response = await instance.get('/customer-reviews');
      return response.data;
    } catch (error) {
      toast.error(error.message);
      return thunkApi.rejectWithValue(error.message);
    }
  }
);
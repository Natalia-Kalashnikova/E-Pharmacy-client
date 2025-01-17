import { createAsyncThunk } from '@reduxjs/toolkit';
import { instance } from '../auth/operations';
import toast from 'react-hot-toast';

export const fetchStores = createAsyncThunk(
  'stores/fetchStores',
  async (filters, thunkApi) => {
    try {
      const { page, perPage, limit } = filters;
      const response = await instance.get('/stores', {
        params: { page, perPage, limit },
      });
      return response.data;
    } catch (error) {
      toast.error(error.message);
      return thunkApi.rejectWithValue(error.message);
    }
  }
);

export const fetchNearestStores = createAsyncThunk(
  'stores/fetchNearestStores',
  async (_, thunkApi) => {
    try {
      const response = await instance.get('/stores/nearest');
      return response.data;
    } catch (error) {
      toast.error(error.message);
      return thunkApi.rejectWithValue(error.message);
    }
  }
);

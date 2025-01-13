import { createAsyncThunk } from '@reduxjs/toolkit';
import { instance } from '../auth/operations';
import toast from 'react-hot-toast';

export const fetchProducts = createAsyncThunk(
  'products/fetchProducts',
  async (filters = {}, thunkApi) => {
    try {
      const {
        name = '',
        category = '',
        page = 1,
        perPage = 12,
        limit = 12,
      } = filters;
      const response = await instance.get('/products', {
        params: { name, category, page, perPage, limit },
      });
      return response.data;
    } catch (error) {
      toast.error(error.message);
      return thunkApi.rejectWithValue(error.message);
    }
  }
);

export const fetchProductsById = createAsyncThunk(
  'products/fetchProductsById',
  async (id, thunkApi) => {
    try {
      const response = await instance.get(`/products/${id}`);
      return response.data;
    } catch (error) {
      toast.error(error.message);
      return thunkApi.rejectWithValue(error.message);
    }
  }
);

export const fetchCategories = createAsyncThunk(
  'products/fetchCategories',
  async (_, thunkApi) => {
    try {
      const response = await instance.get(`/products/all/categories`);
      return response.data;
    } catch (error) {
      toast.error(error.message);
      return thunkApi.rejectWithValue(error.message);
    }
  }
);
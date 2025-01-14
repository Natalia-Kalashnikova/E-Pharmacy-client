import { createAsyncThunk } from '@reduxjs/toolkit';
import { instance, setToken  } from '../auth/operations';
import toast from 'react-hot-toast';

export const fetchCart = createAsyncThunk(
  'cart/fetchCart',
  async (_, thunkApi) => {
    try {
      const state = thunkApi.getState();
      const token = state.auth.token;

      if (!token) return thunkApi.rejectWithValue('Token is not valid');
      setToken(token);

      const response = await instance.get('/cart');
      return response.data;
    } catch (error) {
      toast.error(error.message);
      return thunkApi.rejectWithValue(error.message);
    }
  }
);

export const updateCart = createAsyncThunk(
  'cart/updateCart',
  async ({ productId, quantity }, thunkApi) => {
    try {
      const response = await instance.put('/cart/update', {
        productId,
        quantity,
      });
      toast.success('Added to cart successfully');
      return response.data;
    } catch (error) {
      toast.error(error.message);
      return thunkApi.rejectWithValue(error.message);
    }
  }
);

export const checkoutCart = createAsyncThunk(
  'cart/checkoutCart',
  async (_, thunkApi) => {
    try {
       const state = thunkApi.getState();
      const token = state.auth.token;

      if (!token) return thunkApi.rejectWithValue('Token is not valid');
      setToken(token);

      const response = await instance.post('/cart/checkout');
      toast.success('Order placed successfully');
      return response.data;
    } catch (error) {
      toast.error(error.message);
      return thunkApi.rejectWithValue(error.message);
    }
  }
);
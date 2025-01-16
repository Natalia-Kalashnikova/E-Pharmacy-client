import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import toast from 'react-hot-toast';

export const instance = axios.create({
  baseURL: 'https://e-pharmacy-backend-8qnu.onrender.com/',
  withCredentials: true,
});

export const setToken = token => {
  instance.defaults.headers.common.Authorization = `Bearer ${token}`;
};

export const clearToken = () => {
  instance.defaults.headers.common.Authorization = '';
};

export const registerAPI = createAsyncThunk(
  'auth/register',
  async (formData, thunkApi) => {
    try {
      const { data } = await instance.post('/user/register', formData);
      setToken(data.data.accessToken);      

      return data;
    } catch (e) {
      toast.error(e.message);
      return thunkApi.rejectWithValue(e.message);
    }
  }
);

export const loginAPI = createAsyncThunk(
  'auth/login',
  async (formData, thunkApi) => {
    try {
      const { data } = await instance.post('/user/login', formData);
      setToken(data.data.accessToken);
      return data;
    } catch (e) {
      toast.error(e.message);
      return thunkApi.rejectWithValue(e.message);
    }
  }
);

export const refreshUserAPI = createAsyncThunk(
  'auth/refresh',
  async (_, thunkApi) => {
    try {
      const state = thunkApi.getState();
        const token = state.auth.token;
        
      if (!token) return thunkApi.rejectWithValue('Token is not valid');
        setToken(token);
        
      const { data } = await instance.post('/user/refresh');
      return data;
    } catch (e) {
      if (e.response && e.response.status === 401) {
        return thunkApi.rejectWithValue('Unauthorized');
      }
      toast.error(e.message);
      return thunkApi.rejectWithValue(e.message);
    }
  }
);

export const logoutAPI = createAsyncThunk(
  'auth/logout',
  async (_, thunkApi) => {
    try {
      await instance.post('/user/logout');
      clearToken();
      return;
    } catch (e) {
      toast.error(e.message);
      return thunkApi.rejectWithValue(e.message);
    }
  }
);

export const getUserInfoAPI = createAsyncThunk(
  'auth/getUserInfo',
  async (_, thunkApi) => {
    try {
      const state = thunkApi.getState();
        const token = state.auth.token;
        
      if (!token) return thunkApi.rejectWithValue('Token is not valid');
        setToken(token);
        
      const { data } = await instance.get('/user/user-info');
      return data;
    } catch (e) {
      if (e.response && e.response.status === 401) {
        return thunkApi.rejectWithValue('Unauthorized');
      }
      toast.error(e.message);
      return thunkApi.rejectWithValue(e.message);
    }
  }
);
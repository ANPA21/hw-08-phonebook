import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

axios.defaults.baseURL = 'https://connections-api.herokuapp.com';

export const setAuthHeader = token => {
  axios.defaults.headers.common.Authorization = `Bearer ${token}`;
};
export const clearAuthHeader = () => {
  axios.defaults.headers.common.Authorization = '';
};

export const register = createAsyncThunk(
  `auth/register`,
  async (creds, thunkAPI) => {
    try {
      const r = await axios.post('/users/signup', creds);
      setAuthHeader(r.data.token);
      return r.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const logIn = createAsyncThunk('auth/login', async (creds, thunkAPI) => {
  try {
    const r = await axios.post('/users/login', creds);
    setAuthHeader(r.data.token);
    return r.data;
  } catch (e) {
    return thunkAPI.rejectWithValue(e.message);
  }
});

export const logOut = createAsyncThunk('auth/logout', async (_, thunkAPI) => {
  try {
    await axios.post('/users/logout');
    clearAuthHeader();
  } catch (e) {
    return thunkAPI.rejectWithValue(e.message);
  }
});

export const refresh = createAsyncThunk('auth/refresh', async (_, thunkAPI) => {
  const state = thunkAPI.getState();
  const activeToken = state.auth.token;

  if (activeToken === null) {
    return thunkAPI.rejectWithValue('Unable to refresh user');
  }
  try {
    setAuthHeader(activeToken);
    const r = await axios.get('/users/current');
    return r.data;
  } catch (e) {
    return thunkAPI.rejectWithValue(e.message);
  }
});

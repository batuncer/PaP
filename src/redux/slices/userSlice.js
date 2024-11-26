import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from '../../utils/utils';



export const loginUser = createAsyncThunk(
  'user/login',
  async (credentials, { rejectWithValue }) => {
    try {
      const { data } = await axios.post("login", credentials);

      localStorage.setItem('token', data.token);
  
 
      return { token: data.token, user: data.name };
    } catch (error) {
      return rejectWithValue(error.response?.data || 'Login failed');
    }
  }
);

export const registerUser = createAsyncThunk(
  'user/register',
  async (userInfo, { rejectWithValue }) => {
    try {
      await axios.post("/signup", userInfo);
      return 'Registration successful';
    } catch (error) {
      return rejectWithValue(error.response?.data || 'Registration failed');
    }
  }
);

const userSlice = createSlice({
  name: 'user',
  initialState: {
    token: localStorage.getItem('token') || null,
    currentUser: null,
    loading: false,
    error: null,
    isAuthenticated: !!localStorage.getItem('token')
  },
  reducers: {
    logout: (state) => {
      localStorage.removeItem('token');
      state.token = null;
      state.isAuthenticated = false;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(loginUser.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.loading = false;
        state.token = action.payload;
        state.currentUser = { name: action.payload.user }; 
        state.isAuthenticated = true;
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(registerUser.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(registerUser.fulfilled, (state) => {
        state.loading = false;
      })
      .addCase(registerUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export const { logout } = userSlice.actions;
export default userSlice.reducer;

import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from '../../utils/utils';

// Fetch Posts işlemi
export const fetchPosts = createAsyncThunk(
  'posts/fetchPosts',
  async (_, { rejectWithValue }) => {
    try {
      const { data } = await axios.get("/posts");
      return data;
    } catch (error) {
      return rejectWithValue(error.response?.data || 'Failed to fetch posts');
    }
  }
);

// Create Post işlemi
export const createPost = createAsyncThunk(
  'posts/createPost',
  async (post, { rejectWithValue }) => {
    try {
      const { data } = await axios.post("/posts", post, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
          'Content-Type': 'application/json'
        }
      });
      return data;
    } catch (error) {
      return rejectWithValue(error.response?.data || 'Failed to create post');
    }
  }
);

// Slice tanımlama
const postSlice = createSlice({
  name: 'posts',
  initialState: {
    posts: [],
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchPosts.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchPosts.fulfilled, (state, action) => {
        state.loading = false;
        state.posts = action.payload;
      })
      .addCase(fetchPosts.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(createPost.fulfilled, (state, action) => {
        state.posts.push(action.payload); 
      })
      .addCase(createPost.rejected, (state, action) => {
        state.error = action.error.message; 
      });
  },
});

export default postSlice.reducer;

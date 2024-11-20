import { createSlice } from "@reduxjs/toolkit";
import axios from 'axios';


const initialState = {
  posts: [],
  isLoading: false,
  error: null,
};

export const slice = createSlice({
  name: "posts",
  initialState,
  reducers: {
    startLoading(state) {
      state.isLoading = true;
      state.error = null;
    },
    error(state, action) {
      state.isLoading = false;
      state.error = action.payload;
    },
    successGetPost(state, action) {
      state.posts = action.payload;
      state.isLoading = false;
    },
    successCreatePost(state, action) {
      state.posts.push(action.payload);
      state.isLoading = false;
    },
    successUpdatePost(state, action) {
      const index = state.posts.findIndex(
        (post) => post.id === action.payload.id
      );
      if (index !== -1) {
        state.posts[index] = action.payload;
      }
      state.isLoading = false;
    },
    successDeletePost(state, action) {
      state.posts = state.posts.filter((post) => post.id !== action.payload);
      state.isLoading = false;
    },
  },
});

export default slice.reducer;
export const {
  startLoading,
  error,
  successGetPost,
  successCreatePost,
  successUpdatePost,
  successDeletePost,
} = slice.actions;

// export function getPosts() {
//     return async (dispatch) => {
//         dispatch(startLoading());
//         try {
//             const response = await axios.get('http://localhost:8080/api/posts');
//             dispatch(successGetPost(response.data));
//         } catch (err) {
//             dispatch(error(err.message));
//         }
//     };
// }

// export function createPost(newPost) {
//     return async (dispatch) => {
//         dispatch(startLoading());
//         try {
//             const response = await axios.post('http://localhost:8080/api/posts', newPost);
//             dispatch(successCreatePost(response.data));
//         } catch (err) {
//             dispatch(error(err.message));
//         }
//     };
// }

// export function updatePost(updatedPost) {
//     return async (dispatch) => {
//         dispatch(startLoading());
//         try {
//             const response = await axios.put(`http://localhost:8080/api/posts/${updatedPost.id}`, updatedPost);
//             dispatch(successUpdatePost(response.data));
//         } catch (err) {
//             dispatch(error(err.message));
//         }
//     };
// }

// export function deletePost(postId) {
//     return async (dispatch) => {
//         dispatch(startLoading());
//         try {
//             await axios.delete(`http://localhost:8080/api/posts/${postId}`);
//             dispatch(successDeletePost(postId));
//         } catch (err) {
//             dispatch(error(err.message));
//         }
//     };
// }
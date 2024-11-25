import { configureStore } from '@reduxjs/toolkit';
import postReducer from './slices/postSlice';
import userReducer from './slices/userSlice';
import { useSelector as useAppSelector, useDispatch as useAppDispatch } from 'react-redux';

const store = configureStore({
  reducer: {
    posts: postReducer,
    user: userReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
      immutableCheck: false,
    }),
});

// Directly export useAppSelector and useAppDispatch without re-declaring
const useDispatch = () => useAppDispatch();
const { dispatch } = store;

export { store, useAppSelector, dispatch, useDispatch };

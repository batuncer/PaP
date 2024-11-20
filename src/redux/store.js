import { configureStore } from '@reduxjs/toolkit';
import postReducer from './slices/postSlice';
import userReducer from './slices/userSlice';
import { useSelector as useAppSelector, useDispatch as useAppDispatch } from 'react-redux';

const store = configureStore({
    reducer: {
        posts: postReducer,
        users: userReducer
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: false,
            immutableCheck: false,
        }),
});

const useSelector = useAppSelector;
const useDispatch = () => useAppDispatch();
const {dispatch} = store;
export { store, useSelector,dispatch, useDispatch };

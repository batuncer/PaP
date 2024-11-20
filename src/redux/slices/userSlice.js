import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { dispatch } from "../store";

// Başlangıç durumu (initial state)
const initialState = {
  user: null, // Giriş yapan kullanıcı
  isLoading: true, // İlk yükleme durumu
  error: null, // Hata durumu
};

export const slice = createSlice({
  name: "auth",
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
    loginSuccess(state, action) {
      state.user = action.payload; // Giriş yapan kullanıcıyı store'a kaydet
      state.isLoading = false;
      state.error = null;
    },
    loginFailure(state, action) {
      state.isLoading = false;
      state.error = action.payload;
    },
    logout(state) {
      state.user = null; // Çıkış yapıldığında kullanıcıyı sıfırla
      state.error = null;
    },
    setUser(state, action) {
      state.user = action.payload; // Kullanıcı verisi güncelleme
    },
    setLoading(state, action) {
      state.isLoading = action.payload; // Yükleme durumu
    },
  },
});

export const {
  startLoading,
  error,
  loginSuccess,
  loginFailure,
  logout,
  setUser,
  setLoading,
} = slice.actions;

export default slice.reducer;

// API'den kullanıcı verisi almak için
export const getUserDetails = () => async (dispatch) => {
  const token = localStorage.getItem("token");
  if (token) {
    dispatch(startLoading());
    try {
      const response = await axios.get("http://localhost:8080/api/users/me", {
        headers: { Authorization: `Bearer ${token}` },
      });
      dispatch(setUser(response.data));
    } catch (err) {
      dispatch(error("User verification failed"));
    }
  } else {
    dispatch(setLoading(false));
  }
};

// Giriş işlemi için
export const loginUser = (username, password) => async () => {
  try {
    const response = await axios.post("http://localhost:8080/api/users/login", {
      username,
      password,
    });
    const token = response.data.token;
    localStorage.setItem("token", token);
    dispatch(loginSuccess({ username })); // Giriş yapan kullanıcıyı store'a kaydet
    return true;
  } catch (err) {
    dispatch(loginFailure("Invalid credentials"));
    return false;
  }
};

// Çıkış işlemi için
export const logoutUser = () => (dispatch) => {
  localStorage.removeItem("token");
  dispatch(logout());
};

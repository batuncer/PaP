import axios from "../utils/utils";

export const setSession = (accessToken) => {
  if (accessToken) {
    localStorage.setItem("accessToken", accessToken);

    axios.defaults.headers.common.Authorization = `Bearer ${accessToken}`;


  } else {
    localStorage.removeItem("accessToken");
    delete axios.defaults.headers.common.Authorization;
  }
};
import React, { useEffect, createContext, useContext } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loginUser, getUserDetails, logoutUser } from "../redux/slices/userSlice";

export const AuthContext = createContext();
export const AuthProvider = ({ children }) => {
    const dispatch = useDispatch();
    const { user, isLoading, error } = useSelector((state) => state.users); // <-- fix here
  
    useEffect(() => {
      dispatch(getUserDetails()); // Fetch user details if needed
    }, [dispatch]);
  
    const login = async (username, password) => {
      const success = await dispatch(loginUser(username, password));
      return success; 
    };
  
    const logout = () => {
      dispatch(logoutUser());
    };
  
    const value = {
      user,
      isLoading,
      error,
      login,
      logout,
    };
  
    return (
      <AuthContext.Provider value={value}>
        {children}
      </AuthContext.Provider>
    );
  };
export default AuthProvider;
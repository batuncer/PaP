import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import "./main.scss";
import { store } from "./redux/store";
import { Provider as ReduxProvider } from "react-redux";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Settings from "./pages/Settings";
import Userpage from "./pages/Userpage";
import { AuthProvider } from "./auth/jwt-context";

const Root = () => {
  return (
    <AuthProvider>
    <ReduxProvider store={store}>
      <BrowserRouter >
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/defaultsettings" element={<Settings />} />
          <Route path="/userpage" element={<Userpage />} />
        </Routes>
      </BrowserRouter>
    </ReduxProvider>
   </AuthProvider>
  );
};

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);
root.render(<Root />);

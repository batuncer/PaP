import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import "./main.scss";
import { AuthProvider } from "./auth/AuthProvider";
import { store } from "./redux/store";
import { Provider as ReduxProvider } from "react-redux";
import Login from "./pages/Login";

const Root = () => {
  return (
    <ReduxProvider store={store}>
      <AuthProvider >
        <BrowserRouter basename={"/"}>
          <Routes>
            <Route path="/home" element={<Home />} />
            <Route path="/" element={<Login />} />
          </Routes>
        </BrowserRouter>
      </AuthProvider>
    </ReduxProvider>
  );
};

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);
root.render(<Root />);

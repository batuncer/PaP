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
const Root = () => {
  return (
    <ReduxProvider store={store}>
      <BrowserRouter >
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/defaultsettings" element={<Settings />} />

        </Routes>
      </BrowserRouter>
    </ReduxProvider>
  );
};

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);
root.render(<Root />);

import React from "react";
import ReactDOM from "react-dom/client";
import { createRoot } from "react-dom/client";
import AppProvider from "./context/AppContext.jsx";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import "./index.css";
createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <AppProvider>
      <App />
    </AppProvider>
  </BrowserRouter>
);

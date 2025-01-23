import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Home from "./pages/Home";

function App() {
  return (
    <div className="flex items-center justify-center h-screen bg-gradient-to-r from-sky-600 to-gray-100 font-sans">
      <Home />
    </div>
  );
}

export default App;

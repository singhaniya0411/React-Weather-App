import { useContext, useState } from "react";
import "./App.css";
import Home from "./pages/Home";
import { AppContext } from "./context/AppContext";

function App() {
  const { darkMode, toggleDarkMode } = useContext(AppContext);
  return (
    <div
      className={`flex items-center justify-center h-auto ${
        darkMode
          ? "bg-gray-800"
          : "bg-gradient-to-r from-sky-600 to-gray-100 text-black"
      } font-sans px-4 transition-all duration-1000`}
    >
      <div className="absolute top-4 right-4 flex items-center gap-3">
        <span
          className={`text-sm ${darkMode ? "text-white" : "text-gray-700"}`}
        >
          {darkMode ? "Dark" : "Light"}
        </span>
        <label className="relative inline-flex items-center cursor-pointer">
          <input
            type="checkbox"
            value={darkMode}
            onChange={toggleDarkMode}
            className="sr-only"
          />
          <div className="w-10 h-6 bg-gray-300 rounded-full transition-colors duration-1000"></div>
          <div
            className={`${
              darkMode ? "translate-x-4" : "translate-x-0"
            } absolute left-1 top-1 w-4 h-4 bg-white rounded-full shadow-md transition-transform duration-1000`}
          ></div>
        </label>
      </div>
      <Home />
    </div>
  );
}

export default App;

import { useContext } from "react";
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
        <label className="relative inline-flex items-center cursor-pointer">
          <input
            type="checkbox"
            checked={darkMode} // Binding the checkbox to darkMode state
            onChange={toggleDarkMode} // Toggling darkMode when the checkbox is clicked
            className="sr-only"
          />
          <div
            className={`w-14 h-6 ${
              darkMode ? "bg-gray-300" : "bg-sky-200"
            }  rounded-full transition-colors duration-1000`}
          >
            <div
              className={`absolute  inset-0 flex items-center justify-end pr-2 transition-opacity duration-1000 ${
                darkMode ? "opacity-0" : "opacity-100"
              }`}
            >
              <span className=" text-sm text-black text-[10px]">Light</span>
            </div>
            <div
              className={`absolute inset-0 flex items-center justify-start pl-2 transition-opacity duration-1000 ${
                darkMode ? "opacity-100" : "opacity-0"
              }`}
            >
              <span className="text-sm text-black text-[10px]">Dark</span>
            </div>
            <div
              className={`${
                darkMode ? "translate-x-8" : "translate-x-0"
              } absolute left-1 top-1 w-4 h-4 bg-white rounded-full shadow-md transition-transform duration-1000`}
            ></div>
          </div>
        </label>
      </div>

      <Home />
    </div>
  );
}

export default App;

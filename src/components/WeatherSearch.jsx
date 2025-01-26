import React, { useContext, useState } from "react";
import { AppContext } from "../context/AppContext";

const WeatherSearch = () => {
  const [city, setCity] = useState("");
  const { handleSubmit } = useContext(AppContext);

  const onSubmit = (e) => {
    e.preventDefault();
    handleSubmit(city);
  };
  return (
    <form
      onSubmit={onSubmit}
      className="border-black border mb-6 mt-5 ml-3 mr-3 h-10 gap-1 p-2 justify-between flex bg-white rounded-lg"
    >
      <input
        type="text"
        value={city}
        onChange={(e) => setCity(e.target.value)} // Update state with input value
        placeholder="Enter City Name"
        className="focus:outline-none focus:border-none flex-grow"
      />
      <button type="submit">
        <img
          className="w-6"
          src="https://singhaniya0411.github.io/React-Weather-App/assets/search.png"
          alt="Search"
        />
      </button>
    </form>
  );
};

export default WeatherSearch;

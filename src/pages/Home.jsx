import React, { useContext, useEffect, useState } from "react";
import WeatherSearch from "../components/WeatherSearch";
import Details from "../components/Details";
import { assets } from "../../public/assets/assets";
import { AppContext } from "../context/AppContext";

const Home = () => {
  const {
    weather,
    sunsetTimestamps,
    current_Time,
    timezone,
    sunriseTimestamps,
    darkMode,
  } = useContext(AppContext);
  
  const weatherMap = {
    Clouds: assets.clouds,
    Drizzle: assets.drizzle,
    Mist: assets.mist,
    Clear: assets.sun,
    Thunderstorm: assets.storm,
    Rain: assets.rain,
    Snow: assets.snow,
    Moon: assets.moon,
    Smoke: assets.mist,
    Haze: assets.mist,
    Dust: assets.mist,
    Sand: assets.mist,
    Ash: assets.mist,
    Squall: assets.mist,
    Tornado: assets.mist,
    Fog: assets.mist,
    WeatherIcon: assets.weatherImg,
  };

  const isNight =
    sunsetTimestamps &&
    sunriseTimestamps &&
    (new Date(current_Time) > new Date(sunsetTimestamps) ||
      new Date(current_Time) < new Date(sunriseTimestamps));

  // console.log(isNight);

  if (isNight) {
    weatherMap["Clear"] = assets.moon;
  }
  const weatherImage = weatherMap[weather];
  const Weathorlogo = weatherMap["WeatherIcon"];
  return (
    <div className="flex flex-col gap-4">
      <div
        className={`top-4 flex gap-4 mb-2 mt-5 items-center ${
          darkMode
            ? "bg-gradient-to-r from-gray-500 to-gray-200 border-black border"
            : "bg-white "
        } pl-6 py-3 pr-6 rounded-xl justify-between`}
      >
        <div
          className={`text-2xl   ${
            darkMode
              ? "text-black text-shadow-lg"
              : "bg-gradient-to-r from-blue-500 to-blue-300 bg-clip-text text-transparent text-shadow-sm"
          }`}
        >
          WeatherSphere
        </div>
        <img className="w-10 mix-blend-multiply" src={Weathorlogo} alt="" />
      </div>

      <div
        className={`max-w-md mx-auto h-auto ${
          darkMode
            ? "bg-gradient-to-r from-gray-500 to-gray-300 border-gray-950"
            : " bg-white border-blue-300 "
        }  rounded-2xl border p-2 my-1 sm:h-[720px] md:max-w-lg lg:max-w-xl lg:h-auto mt-2 mb-24`}
      >
        <WeatherSearch />
        <div className="mt-8 flex justify-center">
          <div className="relative w-fit">
            <img className="w-32  mix-blend-multiply" src={weatherImage} />
          </div>
        </div>
        <div className="mt-4 text-center font-semibold text-lg sm:text-xl lg:text-2xl">
          {weather}
        </div>
        <div className="py-4">
          <Details />
        </div>
      </div>
    </div>
  );
};

export default Home;

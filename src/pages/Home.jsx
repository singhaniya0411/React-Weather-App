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
  return (
    <div className="w-[420px] h-[680px] bg-white rounded-2xl border-blue-300 border ">
      <WeatherSearch />
      <div className="mt-8 flex justify-center">
        <div className="relative w-fit">
          <img className="w-32  mix-blend-multiply" src={weatherImage} />
        </div>
      </div>
      <div className="justify-center flex font-semibold">{weather}</div>

      <Details />
    </div>
  );
};

export default Home;

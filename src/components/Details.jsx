import React, { useContext, useState } from "react";
import { AppContext } from "../context/AppContext";

const Details = () => {
  const {
    windSpeed,
    pressure,
    humidity,
    visibility,
    temperature,
    cityName,
    sunset,
    sunrise,
    country,
  } = useContext(AppContext);
  return (
    <div>
      <div className="flex flex-col items-center gap-4 mt-4">
        <h1 className="font-bold text-4xl">{temperature}°C</h1>
        <div className="relative left-1 flex gap-2">
          <h2 className="font-semibold text-3xl">{cityName}</h2>
          <h2 className="font-semibold text-[12px]">{country}</h2>
        </div>
      </div>
      <div className=" mt-6 flex justify-around items-center">
        <div className="flex items-center gap-2">
          <div>
            <img
              className="w-20 mix-blend-multiply"
              src="https://singhaniya0411.github.io/React-Weather-App/assets/wind.gif"
              alt=""
            />
          </div>
          <div>
            <div className="text-xl">{windSpeed} m/s</div>
            <div>Wind Speed</div>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <div>
            <img
              className="w-20 mix-blend-multiply"
              src="https://singhaniya0411.github.io/React-Weather-App/assets/humidity.gif"
              alt=""
            />
          </div>
          <div>
            <div className="text-xl">{humidity} %</div>
            <div>Humidity</div>
          </div>
        </div>
      </div>

      <div className="mt-4 flex justify-around items-center">
        <div className="flex items-center gap-2">
          <div>
            <img
              className="w-14 mix-blend-multiply"
              src="https://singhaniya0411.github.io/React-Weather-App/assets/pressure.gif"
              alt=""
            />
          </div>
          <div className="relative left-3">
            <div className="text-xl">{pressure} hPa</div>
            <div>Pressure</div>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <div>
            <img
              className="w-20 mix-blend-multiply relative left-1.5"
              src="https://singhaniya0411.github.io/React-Weather-App/assets/visibility.gif"
              alt=""
            />
          </div>
          <div className="relative left-3">
            <div className="text-xl">{visibility} m</div>
            <div>Visibilty</div>
          </div>
        </div>
      </div>
      <div className="mt-4 flex justify-around items-center">
        <div className="flex items-center gap-2">
          <div>
            <img
              className="w-12 mix-blend-multiply"
              src="https://singhaniya0411.github.io/React-Weather-App/assets/sunrise.gif"
              alt="sunrise"
            />
          </div>
          <div className="flex gap-5">
            <div className="relative">
              <div className="text-sm font-semibold">{sunrise}</div>
              <div className="text-sm font-semibold">Sunrise</div>
            </div>
            <div className="">
              <div className="text-sm font-semibold">{sunset}</div>
              <div className="text-sm font-semibold">Sunset</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Details;

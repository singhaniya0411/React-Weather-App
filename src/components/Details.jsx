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
    <div className="px-4">
      <div className="flex flex-col items-center gap-4 mt-2">
        <h1 className="font-bold text-2xl md:text-3xl lg:text-4xl">
          {temperature}°C
        </h1>
        <div className="flex flex-col items-center sm:flex-row gap-2">
          <h2 className="font-semibold text-2xl md:text-3xl">{cityName}</h2>
          <h2 className="font-semibold text-sm md:text-base text-gray-500">
            {country}
          </h2>
        </div>
      </div>

      <div className="sm:h-auto h-200px flex flex-col justify-center">
        <div className="mt-4 flex flex-col items-center sm:flex-row sm:justify-center gap-6">
          <div className="flex items-center gap-4">
            <div>
              <img
                className="w-20 md:w-20  mix-blend-multiply"
                src="https://singhaniya0411.github.io/React-Weather-App/assets/wind.gif"
                alt=""
              />
            </div>
            <div>
              <div className="text-lg md:text-xl font-medium">
                {windSpeed} m/s
              </div>
              <div className="text-sm text-gray-500">Wind Speed</div>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <div>
              <img
                className="w-20 md:w-20 mix-blend-multiply"
                src="https://singhaniya0411.github.io/React-Weather-App/assets/humidity.gif"
                alt=""
              />
            </div>
            <div>
              <div className="text-lg md:text-xl font-medium">{humidity} %</div>
              <div className="text-sm text-gray-500">Humidity</div>
            </div>
          </div>
        </div>

        <div className="mt-6 flex flex-col items-center sm:flex-row sm:justify-center gap-6">
          <div className="flex items-center gap-4">
            <div>
              <img
                className="w-20 md:w-20 mix-blend-multiply"
                src="https://singhaniya0411.github.io/React-Weather-App/assets/pressure.gif"
                alt=""
              />
            </div>
            <div>
              <div className="text-lg md:text-xl font-medium">
                {pressure} hPa
              </div>
              <div className="text-sm text-gray-500">Pressure</div>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <div>
              <img
                className="w-20 md:w-20 mix-blend-multiply"
                src="https://singhaniya0411.github.io/React-Weather-App/assets/visibility.gif"
                alt=""
              />
            </div>
            <div>
              <div className="text-lg md:text-xl font-medium">
                {visibility} m
              </div>
              <div className="text-sm text-gray-500">Visibilty</div>
            </div>
          </div>
        </div>

        <div className="mt-6 flex flex-col items-center sm:flex-row sm:justify-center gap-6">
          <div className="flex items-center gap-4">
            <img
              className="w-20 md:w-20 mix-blend-multiply"
              src="https://singhaniya0411.github.io/React-Weather-App/assets/sunrise.gif"
              alt="Sunrise"
            />
            <div>
              <div className="text-sm md:text-base font-medium">{sunrise}</div>
              <div className="text-sm text-gray-500">Sunrise</div>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <img
              className="w-20 md:w-20 mix-blend-multiply"
              src="https://singhaniya0411.github.io/React-Weather-App/assets/sunrise.gif"
              alt="Sunset"
            />
            <div>
              <div className="text-sm md:text-base font-medium">{sunset}</div>
              <div className="text-sm text-gray-500">Sunset</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Details;

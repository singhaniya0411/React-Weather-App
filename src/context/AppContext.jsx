import React, { createContext, useEffect, useState } from "react";
export const AppContext = createContext();

const AppProvider = (props) => {
  const apiKey = "958d9c65c6ee6313dab0ffecfee5286b";
  const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric";

  const [temperature, setTemperature] = useState("--");
  const [cityName, setCityName] = useState("--");
  const [windSpeed, setWindSpeed] = useState("--");
  const [humidity, setHumidity] = useState("--");
  const [pressure, setPressure] = useState("--");
  const [visibility, setVisibility] = useState("--");
  const [sunrise, setSunrise] = useState("--");
  const [sunset, setSunset] = useState("--");
  const [timezone, setTimezone] = useState("--");
  const [weather, setWeather] = useState("");
  const [sunsetTimestamps, setSunsetTimestamps] = useState("--");
  const [sunriseTimestamps, setSunriseTimestamps] = useState("--");
  const [current_Time, setCurrent_Time] = useState("--");
  const [country, setCountry] = useState("--");
  const [latitude, setLatitude] = useState("");
  const [longitude, setLongitude] = useState("");

  const [darkMode, setDarkMode] = useState(false);

  const handleSubmit = async (city) => {
    try {
      const response = await fetch(`${apiUrl}&q=${city}&appid=${apiKey}`);
      const data = await response.json();
      // console.log(data);

      const lat = data.coord.lat;
      const lon = data.coord.lon;
      setLatitude(lat);
      setLongitude(lon);

      const timeSunrise = new Date(
        (data.sys.sunrise + data.timezone - 19800) * 1000
      ).toLocaleTimeString();

      const timeSunset = new Date(
        (data.sys.sunset + data.timezone - 19800) * 1000
      ).toLocaleTimeString();

      const geocodeUrl = `https://nominatim.openstreetmap.org/reverse?format=json&lat=${lat}&lon=${lon}`;
      const geocodeResponse = await fetch(geocodeUrl);
      const geocodeData = await geocodeResponse.json();

      // console.log(geocodeData);

      setCountry(geocodeData.address.country || "--");
      setSunriseTimestamps(data.sys.sunrise);
      setSunsetTimestamps(data.sys.sunset);
      setCurrent_Time(data.dt);

      setPressure(data.main.pressure);
      setTemperature(data.main.temp);
      setCityName(data.name);
      setHumidity(data.main.humidity);
      setVisibility(data.visibility);
      setWindSpeed(data.wind.speed);
      setSunrise(timeSunrise);
      setSunset(timeSunset);
      setTimezone(data.timezone);
      setWeather(data.weather[0].main);

      // console.log(data.weather[0].main);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        async (position) => {
          const lat = position.coords.latitude;
          const lon = position.coords.longitude;

          const url = `https://nominatim.openstreetmap.org/reverse?format=json&lat=${lat}&lon=${lon}`;

          try {
            const response = await fetch(url);
            const responseData = await response.json();
            setCityName(responseData.address.city);
            // console.log("Location Data:", responseData);
          } catch (error) {
            console.error("Error accessing location:", error.message);
          }
        },
        (error) => {
          console.error("Error fetching location:", error.message);
        }
      );
    } else {
      console.log("Geolocation is not supported by this browser.");
    }
  }, []);

  useEffect(() => {
    if (cityName !== "--") {
      handleSubmit(cityName);
    }
  }, [cityName]);

  // useEffect(() => {
  //   // console.log(timezone);
  //   // console.log(sunrise);
  //   // console.log(sunset);
  //   // console.log(current_Time);
  // }, [sunrise, sunset, timezone]);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  const value = {
    sunsetTimestamps,
    sunriseTimestamps,
    temperature,
    cityName,
    windSpeed,
    humidity,
    pressure,
    visibility,
    sunrise,
    sunset,
    weather,
    current_Time,
    timezone,
    country,
    darkMode,
    handleSubmit,
    toggleDarkMode,
  };

  return (
    <AppContext.Provider value={value}>{props.children}</AppContext.Provider>
  );
};

export default AppProvider;

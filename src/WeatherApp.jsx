import { useState } from "react";
import InfoBox from "./InfoBox";
import SearchBox from "./SearchBox";
import "./WeatherApp.css";

export default function WeatherApp() {
  let [weatherInfo, setWeatherInfo] = useState({
    city: "Anand",
    temp: "42",
    tempMin: "42",
    tempMax: "42",
    fellsLike: "42",
    humidity: "55",
    weather: "Hot Temperature",
  });

  let updateInfo = (newInfo) => {
    setWeatherInfo(newInfo);
  };

  return (
    <div style={{ textAlign: "center" }}>
      <h3 style={{ fontStyle: "italic", textDecorationLine: "underline" }}>
        A Basic React Weather App
      </h3>
      <SearchBox updateInfo={updateInfo} />
      <InfoBox info={weatherInfo} />
    </div>
  );
}

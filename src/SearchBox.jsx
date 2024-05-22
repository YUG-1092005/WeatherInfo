import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import "./SearchBox.css";
import { useState } from "react";

export default function SearchBox({ updateInfo }) {
  let [city, setCity] = useState("");
  let [error, setError] = useState(false);

  const API_URL = import.meta.env.VITE_API_URL;
  const API_KEY = import.meta.env.VITE_API_KEY;

  let getWeatherInfo = async () => {
    try {
      let response = await fetch(
        `${API_URL}?q=${city}&appid=${API_KEY}&units=metric`
      );
      let jsonResponse = await response.json();
      console.log(`Jsonresponse=`, jsonResponse);

      let result = {
        city: city,
        temp: jsonResponse.main.temp,
        tempMin: jsonResponse.main.temp_min,
        tempMax: jsonResponse.main.temp_max,
        fellsLike: jsonResponse.main.feels_like,
        humidity: jsonResponse.main.humidity,
        weather: jsonResponse.weather[0].description,
      };
      console.log(result);
      return result;
    } catch (error) {
      throw error;
    }
  };

  let handleInputChange = (event) => {
    setCity(event.target.value);
  };

  let handleSubmit = async (event) => {
    try {
      event.preventDefault();
      console.log(city);
      setCity("");
      let newInfo = await getWeatherInfo();
      updateInfo(newInfo);
    } catch (error) {
      setError(true);
    }
  };

  return (
    <div className="SearchBox">
      <form onSubmit={handleSubmit}>
        <TextField
          required
          id="city"
          label="Cityname"
          variant="outlined"
          value={city}
          onChange={handleInputChange}
        />
        <br></br>
        <br></br>
        <Button
          variant="contained"
          type="submit"
          style={{ backgroundColor: "rgb(99, 93, 93)" }}
        >
          Search
        </Button>
        {error && <p style={{ color: "red" }}> OOPS!! No Such Place Found</p>}
        {error && <p style={{ color: "green" }}>Refresh Again to search</p>}
      </form>
    </div>
  );
}

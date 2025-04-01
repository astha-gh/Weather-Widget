import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import "./SearchBox.css";
import { useState } from "react";

export default function SearchBox({ updateInfo }) {
  const [city, setCity] = useState("");
  const [err, setErr] = useState(false);
  const Api_url = "https://api.openweathermap.org/data/2.5/weather";
  const Api_key = "651b66a4ee384fcad720ed2f9e8b65e9";

  let getWeaterInfo = async (city) => {
    try {
      let response = await fetch(
        `${Api_url}?q=${city}&appid=${Api_key}&units=metric`
      );
      let jsonResp = await response.json();
      let res = {
        city: city,
        temp: jsonResp.main.temp,
        tempMin: jsonResp.main.temp_min,
        tempMax: jsonResp.main.temp_max,
        humidity: jsonResp.main.humidity,
        feels_like: jsonResp.main.feels_like,
        weather: jsonResp.weather[0].description,
      };
      console.log(res);
      return res;
    } catch (err) {
      throw err;
    }
  };

  let handleChange = (event) => {
    setCity(event.target.value);
  };

  let handleSubmit = async (event) => {
    try {
      event.preventDefault();
      console.log(city);
      setCity("");
      let newinfo = await getWeaterInfo(city);
      updateInfo(newinfo);
    } catch (err) {
      setErr(true);
    }
  };

  return (
    <div className="SearchBox">
      <form onSubmit={handleSubmit}>
        <TextField
          id="city"
          label="City name"
          variant="outlined"
          required
          value={city}
          onChange={handleChange}
        />
        <br /> <br />
        <Button variant="contained" type="submit">
          Search
        </Button>
        {err && <p style={{color : "red"}}>No such place information available</p>}
      </form>
    </div>
  );
}

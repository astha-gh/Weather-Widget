import './WeatherApp.css'
import SearchBox from './SearchBox'
import InfoBox from './InfoBox'
import { useState } from 'react'

export default function WeatherApp(){
    const [weatherInfo, setWeatherInfo] = useState({
      city: "Pune",
      feels_like: 32.52,
      humidity: 23,
      temp: 34.22,
      tempMax: 34.22,
      tempMin: 34.22,
      weather: "broken clouds",
    });

    let updateInfo = (newinfo) => {
        setWeatherInfo(newinfo);
    }

    return(
        <div className="WeatherApp">
            <h2>Weather App</h2>
            <SearchBox updateInfo = {updateInfo}/>
            <InfoBox info = {weatherInfo}/>
        </div>
    )
}
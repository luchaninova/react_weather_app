import React, { useState } from "react";
import axios from "axios";
import WeatherInfo from "./WeatherInfo";
import WeatherForcast from "./WeatherForcast";
import "./Weather.css";

export default function Weather(props) {
  const [loaded, setLoaded] = useState(false);
  const [city, setCity] = useState(props.defaultCity);
  const [weather, setWeather] = useState([]);

  function getCurrentWeather(response) {
    setWeather({
      description: response.data.weather[0].main,
      icon: response.data.weather[0].icon,
      humidity: Math.round(response.data.main.humidity),
      temperature: Math.round(response.data.main.temp),
      time: new Date(response.data.dt * 1000),
      wind: Math.round(response.data.wind.speed),
      city: response.data.name,
    });
    setLoaded(true);
  }

  function search() {
    const apiKey = "b26c02eb24c77058192e800dec3f2e04";
    let apiLink = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiLink).then(getCurrentWeather);
  }

  function handleSubmit(event) {
    event.preventDefault();
    search();
  }

  function handleCityChange(event) {
    setCity(event.target.value);
  }

  if (loaded) {
    return (
      <div className="Weather">
        <div className="CitySearch mb-3">
          <form className="search" onSubmit={handleSubmit}>
            <div className="row">
              <div className="col-9">
                <input
                  type="text"
                  placeholder="Enter a city here"
                  className="formControl"
                  autoFocus="on"
                  onChange={handleCityChange}
                />
              </div>
              <div className="col-3">
                <button className="btn btn-primary w-100">Search</button>
              </div>
            </div>
          </form>
        </div>
        <WeatherInfo data={weather} />
        <WeatherForcast />
      </div>
    );
  } else {
    search();
    return "Loading...";
  }
}

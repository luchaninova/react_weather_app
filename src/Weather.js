import React, { useState } from "react";
import axios from "axios";
import "./Weather.css";

export default function Weather(props) {
  const [loaded, setLoaded] = useState(false);
  const [weather, setWeather] = useState([]);

  function getCurrentWeather(response) {
    setWeather({
      description: response.data.weather[0].main,
      icon: response.data.weather[0].icon,
      humidity: Math.round(response.data.main.humidity),
      temperature: Math.round(response.data.main.temp),
      //time: new DateUtil(new Date(response.data.dt * 1000)).dayTime(),
      wind: Math.round(response.data.wind.speed),
      city: response.data.name,
    });
    setLoaded(true);
  }

  if (loaded) {
    return (
      <div className="Weather">
        <div className="CitySearch">
          <div className="row">
            <div className="col-9">
              <form className="search">
                <input
                  type="text"
                  placeholder="Enter a city here"
                  autoFocus="on"
                />
              </form>
            </div>
            <div className="col-3">
              <button className="btn btn-primary w-100">Search</button>
            </div>
          </div>
        </div>
        <div className="CurrentWeather">
          <h1>{weather.city}</h1>
          <ul>
            <li>Monday, 15:20</li>
            <li>{weather.description}</li>
          </ul>
          <div className="row">
            <div className="col-8">
              <img src={weather.icon} alt={weather.description} />
              <span className="temperature">{weather.temperature}</span>
              <span className="unit">℃</span>
            </div>
            <div className="col-4">
              <ul>
                <li>Wind</li>
                <p className="wind">{weather.wind} m/h</p>
                <li>Humidity</li>
                <p className="humidity">{weather.humidity}%</p>
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    const apiKey = "b26c02eb24c77058192e800dec3f2e04";
    let apiLink = `https://api.openweathermap.org/data/2.5/weather?q=${props.defaultCity}&appid=${apiKey}&units=metric`;
    axios.get(apiLink).then(getCurrentWeather);
    return "Loading...";
  }
}

import React, { useState } from "react";
import WeatherIcon from "./WeatherIcon";
import WeatherForcastDay from "./WeatherForcastDay";
import axios from "axios";
import "./WeatherForcast.css";

export default function WeatherForcast(props) {
  let [loaded, setLoaded] = useState(false);
  let [forcast, setForcast] = useState(null);
  function handleResponse(response) {
    setForcast(response.data.daily);
    setLoaded(true);
  }

  if (loaded) {
    return (
      <div className="WeatherForcast">
        <WeatherForcastDay />
        <div className="row">
          <div className="col">
            <div className="WeatherForcast-day">{forcast[0].dt}</div>
            <WeatherIcon data={forcast[0].weather[0].icon} size={42} />
            <div className="WeatherForcast-temperature">
              <span className="WeatherForcast-temperature-max">
                {Math.round(forcast[0].temp.max)}°
              </span>
              <span className="WeatherForcast-temperature-min">
                {Math.round(forcast[0].temp.min)}°
              </span>
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    const apiKey = `b26c02eb24c77058192e800dec3f2e04`;
    const latitude = props.coordinates.lat;
    const longitude = props.coordinates.lon;
    const apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`;

    axios.get(apiUrl).then(handleResponse);
    return null;
  }
}

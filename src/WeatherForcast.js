import React, { useState, useEffect } from "react";
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

  useEffect(() => {
    setLoaded(false);
  }, [props.coordinates]);

  function load() {
    const apiKey = `b26c02eb24c77058192e800dec3f2e04`;
    const latitude = props.coordinates.lat;
    const longitude = props.coordinates.lon;
    const apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`;

    axios.get(apiUrl).then(handleResponse);
    return null;
  }

  if (loaded) {
    return (
      <div className="WeatherForcast">
        <div className="row row-cols-2 row-cols-sm-3 row-cols-md-5">
          {forcast.map(function (dailyForcast, index) {
            if (index < 5) {
              return (
                <div className="col" key={index}>
                  <WeatherForcastDay data={dailyForcast} />
                </div>
              );
            } else {
              return null;
            }
          })}
        </div>
      </div>
    );
  } else {
    load();
  }
}

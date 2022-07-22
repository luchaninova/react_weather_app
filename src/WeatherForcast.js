import React from "react";
import WeatherIcon from "./WeatherIcon";
import "./WeatherForcast.css";

export default function WeatherForcast() {
  return (
    <div className="WeatherForcast">
      <div className="row">
        <div className="col">
          <div className="WeatherForcast-day">Tue</div>
          <WeatherIcon data="01d" size={42} />
          <div className="WeatherForcast-temperature">
            <span className="WeatherForcast-temperature-max">20°</span>
            <span className="WeatherForcast-temperature-min">15°</span>
          </div>
        </div>
      </div>
    </div>
  );
}

import React from "react";
import WeatherIcon from "./WeatherIcon";
import "./WeatherForcastDay.css";

export default function WeatherForcastDay(props) {
  function day() {
    let date = new Date(props.data.dt * 1000);
    let day = date.getDay();
    let days = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];

    return days[day];
  }

  return (
    <div className="WeatherForcastDay">
      <div className="WeatherForcast-day">{day()}</div>
      <WeatherIcon data={props.data.weather[0].icon} size={42} />
      <div className="WeatherForcast-temperature">
        <span className="WeatherForcast-temperature-max">
          {Math.round(props.data.temp.max)}°
        </span>
        <span className="WeatherForcast-temperature-min">
          {Math.round(props.data.temp.min)}°
        </span>
      </div>
    </div>
  );
}

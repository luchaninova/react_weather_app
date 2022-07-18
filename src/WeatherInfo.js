import React from "react";
import FormatedDay from "./FormatedDay";
import WeatherIcon from "./WeatherIcon";
import "./WeatherInfo.css";

export default function WeatherInfo(props) {
  return (
    <div className="WeatherInfo">
      <h1>{props.data.city}</h1>
      <ul>
        <li>
          <FormatedDay date={props.data.time} />
        </li>
        <li>{props.data.description}</li>
      </ul>
      <div className="row mt-4">
        <div className="col-8 p-4">
          <WeatherIcon data={props.data.icon} />
          <strong className="temperature">{props.data.temperature}</strong>
          <span className="unit">℃</span>
        </div>
        <div className="col-4">
          <ul>
            <li>Wind</li>
            <p className="wind">{props.data.wind} m/h</p>
            <li>Humidity</li>
            <p className="humidity">{props.data.humidity}%</p>
          </ul>
        </div>
      </div>
    </div>
  );
}

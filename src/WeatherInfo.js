import React from "react";
import FormatedDay from "./FormatedDay";

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
      <div className="row">
        <div className="col-8">
          <img src={props.data.icon} alt={props.data.description} />
          <span className="temperature">{props.data.temperature}</span>
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

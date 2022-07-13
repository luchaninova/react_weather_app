import React from "react";
import "./Weather.css";

export default function Weather() {
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
        <h1>London</h1>
        <ul>
          <li>Monday, 15:20</li>
          <li>Scattered Clouds</li>
        </ul>
        <div className="row">
          <div className="col-8">
            <span className="temperature">6</span>
            <span className="unit">℃</span>
          </div>
          <div className="col-4">
            <ul>
              <li>Wind</li>
              <p className="wind">5.66 m/h</p>
              <li>Humidity</li>
              <p className="humidity">47%</p>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

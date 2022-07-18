import React, { useState } from "react";

export default function WeatherUnits(props) {
  const [unit, setUnit] = useState("celsius");

  function showFahrenhiet(event) {
    event.preventDefault();
    setUnit("fahrenhiet");
  }

  function showCelsius(event) {
    event.preventDefault();
    setUnit("celsius");
  }

  function convertToFahrenhiet() {
    return Math.round((props.celsius * 9) / 5 + 32);
  }

  if (unit === "celsius") {
    return (
      <div className="WeatherUnits">
        <strong className="temperature">{props.celsius}</strong>
        <span className="unit">
          ℃ |{" "}
          <a href="/" onClick={showFahrenhiet}>
            ℉
          </a>
        </span>
      </div>
    );
  } else {
    return (
      <div className="WeatherUnits">
        <strong className="temperature">{convertToFahrenhiet()}</strong>
        <span className="unit">
          <a href="/" onClick={showCelsius}>
            ℃
          </a>{" "}
          | ℉
        </span>
      </div>
    );
  }
}

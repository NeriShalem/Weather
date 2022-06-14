import React from "react";
import Input from "./Input";

function Container(props) {
  const { city, setCity, weatherData, getWeather } = props;
  return (
    <div className="container">
      <Input city={city} setCity={setCity} getWeather={getWeather} />
      <div className="weatherLocation">
        <h3>Weather in Tokyo</h3>
        {typeof weatherData.main === "undefined" ? (
          <div>
            <p>Welcome to weather app! Enter any city</p>
          </div>
        ) : (
          <div>
            <p>{weatherData.name}</p>
            <p>{weatherData.main.temp}</p>
            <p>{weatherData.weather[0].main}</p>
          </div>
        )}

        {weatherData.cod === "404" ? <p>City not found</p> : ""}
      </div>
    </div>
  );
}

export default Container;

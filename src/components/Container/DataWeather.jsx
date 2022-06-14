import React from "react";

function DataWether(props) {
  const { weatherData } = props;

  return (
    <div>
      <h3 className="weatherLocation">Weather in {weatherData.name}</h3>
      <div className="weatherDegrees">
        <h1>{weatherData.main.temp} º C </h1>
      </div>

      <div className="weatherDescription">
        <div>
          <div className="weatherDescriptionHead">
            <img
              src={`http://openweathermap.org/img/w/${weatherData.weather[0].icon}.png`}
              alt="weather icon"
            />
            <h3>{weatherData.weather[0].description} </h3>
          </div>
          <h3>Humidity: {weatherData.main.humidity}%</h3>
          <h3>Wind speed: {weatherData.wind.speed}m/s</h3>
        </div>
        <div className="w">
          <h3>{weatherData.sys.country}</h3>

          <h2 className="weatherDate"> {Date()}</h2>
        </div>
      </div>
    </div>
  );
}

export default DataWether;

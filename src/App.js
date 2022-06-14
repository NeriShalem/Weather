import "./App.css";
import React, { useState, useEffect } from "react";
import Input from "./components/Container/Input";

function App() {
  const [weatherData, setWaetherData] = useState([{}]);
  const [city, setCity] = useState("");

  const [degress, setDegrees] = useState(null);
  const [loaction, setLocation] = useState(null);
  const [description, setDescription] = useState(null);
  const [icon, setIcon] = useState(null);
  const [humidity, setHumidity] = useState(null);
  const [wind, setWind] = useState(null);
  const [country, setCountry] = useState(null);

  async function getWeather(event) {
    if (event.key == "Enter") {
      console.log(typeof weatherData.main);
      let data = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&APPID=${process.env.REACT_APP_API_KEY}`
      );
      data = await data.json();
      console.log(data);
      setDegrees(data.main.temp);
      setLocation(data.name);
      setDescription(data.weather[0].description);
      setIcon(data.weather[0].icon);
      setHumidity(data.main.humidity);
      setWind(data.wind.speed);
      setCountry(data.sys.country);
    }
  }

  return (
    <div className="app">
      <div className="weather">
        <Input city={city} setCity={setCity} getWeather={getWeather} />

        <div>
          <h3 className="weatherLocation">Weather in {loaction}</h3>
          <div className="weatherDegrees">
            <h1>{degress} º C </h1>
          </div>

          <div className="weatherDescription">
            <div>
              <div className="weatherDescriptionHead">
                <img
                  src={`http://openweathermap.org/img/w/${icon}.png`}
                  alt="weather icon"
                />
                <h3>{description} </h3>
              </div>
              <h3>Humidity: {humidity}%</h3>
              <h3>Wind speed: {wind}m/s</h3>
            </div>
            <div className="w">
              <h3>{country}</h3>
              <h2 className="weatherDate">4/30/2022, 2:05:24 PM</h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

{
  /* <span>🧊</span><span>❄</span><span>🌨</span><span>🌦</span><span>🌥</span><span>☀</span> */
}
export default App;

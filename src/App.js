import "./App.css";
import React, { useState } from "react";
import Input from "./components/Container/Input";
import DataWether from "./components/Container/DataWeather";

function App() {
  const [city, setCity] = useState("");
  const [weatherData, setWaetherData] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  async function getWeather(event) {
    event.preventDefault();
    setIsLoading(true);
    let data = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&APPID=${process.env.REACT_APP_API_KEY}`
    );
    data = await data.json();
    setWaetherData(data);
    setIsLoading(false);
  }

  return (
    <div className="app">
      <div className="weather">
        <Input city={city} setCity={setCity} getWeather={getWeather} />
        {isLoading ? (
          <div className="loader">loading</div>
        ) : weatherData.cod === 200 ? (
          <DataWether weatherData={weatherData} />
        ) : (
          weatherData.cod === "404" && <h3>city not found</h3>
        )}
      </div>
    </div>
  );
}

export default App;

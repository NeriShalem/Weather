import React, { useState } from "react";

import { getWeatherData } from "../api";
import Input from "../components/Container/Input";
import DataWeather from "../components/Container/DataWeather";
import Loader from "../components/Loader/Loader";
import "../App.css";

const HomePage = () => {
    const [city, setCity] = useState("");
    const [weatherData, setWeatherData] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const isSuccess = weatherData.cod === 200;

    const  getWeather = async(event) => {
        event.preventDefault();
        setIsLoading(true);
        const data = await getWeatherData(city);
        setWeatherData(data);
        setIsLoading(false);
    }

    return (
        <div className="weather">
            <Input city={city} setCity={setCity} getWeather={getWeather} />
            {isLoading &&  <Loader/>}
            {isSuccess ? <DataWeather weatherData={weatherData} /> : <h3>city not found</h3>}
        </div>
    )
}

export default HomePage;
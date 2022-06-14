import React from "react";
import { FcSearch } from "react-icons/fc";
import "./input.css";

const Input = (props) => {
  const { city, setCity, getWeather } = props;

  return (
    <form className="formInput" onSubmit={getWeather}>
      <input
        type="text"
        className="inputValue"
        placeholder="Enter City..."
        value={city}
        onChange={(e) => {
          setCity(e.target.value);
        }}
      />
      <span className="inputIcon" onClick={getWeather}>
        <FcSearch></FcSearch>
      </span>
    </form>
  );
};

export default Input;

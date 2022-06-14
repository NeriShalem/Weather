import React from "react";
import { FcSearch } from "react-icons/fc";
import "./input.css";
const Input = (props) => {
  const { city, setCity, getWeather } = props;

  return (
    <div className="formInput">
      <input
        type="text"
        className="inputValue"
        placeholder="Enter City..."
        value={city}
        onChange={(e) => {
          setCity(e.target.value);
        }}
        onKeyPress={getWeather}
      />
      <span className="inputIcon">
        <FcSearch></FcSearch>
      </span>
    </div>
  );
};

export default Input;

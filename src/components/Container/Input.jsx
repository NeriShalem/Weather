import React from "react";
import { FcSearch } from "react-icons/fc";

import "./input.css";

const Input = (props) => {
  const { city, setCity, getWeather } = props;
  const onChange = (event) =>  setCity(event.target.value);

  return (
    <form className="formInput" onSubmit={getWeather}>
      <input
        type="text"
        className="inputValue"
        placeholder="Enter City..."
        value={city}
        onChange={onChange}
      />
      <span className="inputIcon" onClick={getWeather}>
        <FcSearch/>
      </span>
    </form>
  );
};

export default Input;

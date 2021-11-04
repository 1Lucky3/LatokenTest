import React from 'react';
import FetchWeather from "../store/FetchWeather";
import {observer} from "mobx-react-lite";


const Input: React.FC = observer(() => {

  return (
    <div>
      <input
        className="input"
        placeholder="Enter city..."
        onChange={(event) => FetchWeather.onChange(event.target.value)}
        value={FetchWeather.inputValue}
      />
    </div>
  );
});

export default Input;
import React from 'react';
import {observer} from "mobx-react-lite";
import Recently from "../store/Recently";
import {IWeatherData} from "../Models/IWether";
import FetchWeather from "../store/FetchWeather";

const Recent: React.FC = observer(() => {

  const handleCurrent = (city: IWeatherData):void => {
    FetchWeather.Error = ""
    FetchWeather.weatherInfo = [city]
  }

  return (
    <div className="form__recent">
      {Recently.recentlyData.map(item => (
        <div
          className="form__recent_city"
          onClick={() => handleCurrent(item)}
        >
          {item.city} {item.temperature} °C
        </div>
      ))}
    </div>
  );
});

export default Recent;
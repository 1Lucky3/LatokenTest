import React, {useEffect} from 'react';
import {observer} from "mobx-react-lite";
import FetchWeather from "../store/FetchWeather";

const WeatherList: React.FC = observer(() => {

  return (
    <div className="form__weather_list">
      {FetchWeather.Error && <h4>{FetchWeather.Error}</h4>}
      {FetchWeather.isLoading && <h4>Loading...</h4>}
      {FetchWeather.weatherInfo.map((item) => (
        <div key={item.id}>In {item.city} temperature {item.temperature}°C, feels like {item.feels_like}°C</div>
      ))}
    </div>
  );
});

export default WeatherList;
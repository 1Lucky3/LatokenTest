import React, {useEffect} from 'react';
import Input from "../UI/Input";
import FetchWeather from "../store/FetchWeather";
import {observer} from "mobx-react-lite";
import WeatherList from "./WeatherList";
import Recent from "./Recent";
import Recently from "../store/Recently";

const Form: React.FC = observer(() => {

  useEffect( () => {
    let onWrite = FetchWeather.inputValue

    FetchWeather.inputValue.length > 0 && setTimeout(() => {
      if(onWrite === FetchWeather.inputValue) {
        FetchWeather.isLoading = true
        FetchWeather.Error = ""
        FetchWeather.fetchWeather(FetchWeather.inputValue)
      }
    },1000)

    if(FetchWeather.weatherInfo.length > 0 && !FetchWeather.isCityChanged) {
      FetchWeather.isCityChanged = true
      !Recently.recentlyData.find(item => item.id === FetchWeather.weatherInfo[0].id) && Recently.pushRecently(FetchWeather.weatherInfo[0])
    }

  },[FetchWeather.inputValue])

  return (
    <div className="form__wrapper">
      <Input/>
      <WeatherList/>
      <Recent/>
    </div>
  );
});

export default Form;
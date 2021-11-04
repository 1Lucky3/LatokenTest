import {makeAutoObservable} from "mobx";
import {IWeatherData} from "../Models/IWether";



class FetchWeather {
  inputValue = ""
  Api_key = "65275af497a32dee3f9f5f7978210ce9"
  weatherInfo: IWeatherData[] = []
  Error = ""
  isLoading = false
  isCityChanged = false

  constructor() {
    makeAutoObservable(this);
  }

  onChange(value: string): void {
    this.inputValue = value
  }

  fetchWeather(cityName: string) {
    this.weatherInfo = []
   fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${this.Api_key}&units=metric`)
    .then(response => {
      if (response.ok) {
        response.json()
        .then( data => {
          this.weatherInfo.push({
            id: data.id,
            city: data.name,
            temperature: data.main.temp,
            feels_like: data.main.feels_like
          })
          this.isCityChanged = false
          this.Error = ""
          this.isLoading = false
        })
      } else {
        this.isLoading = false
        this.Error = "City is not found"
      }
    })
  }
}

export default new FetchWeather()
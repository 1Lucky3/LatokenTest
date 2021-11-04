import {makeAutoObservable} from "mobx";
import {IWeatherData} from "../Models/IWether";


class Recently {
  recentlyData: IWeatherData[] = []

  constructor() {
    makeAutoObservable(this)
  }

  pushRecently(data: IWeatherData): void {
    this.recentlyData.push(data)
  }

}

export default new Recently();
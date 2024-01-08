import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  private readonly url = environment.routerPath;
  constructor(private http: HttpClient) { }

  currentWeatherCondition(cityId: number){
    return this.http.get(`${this.url}Weather/WeatherInfo?city=${cityId}`);
  }

  saveWeatherInformation(data: any){
    return this.http.post(this.url + "Weather/SaveWeatherInformation", data);
  }

  getWeatherLogs(cityId: number){
    return this.http.get(`${this.url}Weather/WeatherLogs?city=${cityId}`);
  }
}

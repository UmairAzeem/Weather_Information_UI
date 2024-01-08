import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { CityInfo } from '../Models/CityInfo.Model';

@Injectable({
  providedIn: 'root'
})
export class CityService {

  private readonly url = environment.routerPath;
  constructor(private http: HttpClient) { }

  postcity(data: any){
    return this.http.post(this.url + "CityInfo/SaveCityData", data);
  }

  putcity(data: any){
    return this.http.put(this.url + "CityInfo/UpdateCityData", data);
  }

  cityList(countryId: number){
    return this.http.get(`${this.url}CityInfo/GetCity?country=${countryId}`);
  }

  getCityById(cityId: number){
    return this.http.get(`${this.url}CityInfo/GetCityById?city=${cityId}`);
  }
}

import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class CountryService {

  private readonly url = environment.routerPath;
  constructor(private http: HttpClient) { }

  countryList(){
    return this.http.get(this.url + "CountryInfo/CountryList");
  }

  countryDropdown(){
    return this.http.get(this.url + "CountryInfo/CountryDropdown");
  }

}

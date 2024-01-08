import { Component, OnDestroy, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Subscription } from 'rxjs';
import { CityInfo, CityList } from 'src/app/Models/CityInfo.Model';
import { CountryDropdown } from 'src/app/Models/CountryInfo.Model';
import { WeatherInfo } from 'src/app/Models/WeatherInfo.Model';
import { CityService } from 'src/app/Services/city.service';
import { CountryService } from 'src/app/Services/country.service';
import { DataServiceService } from 'src/app/Services/data-service.service';
import { WeatherService } from 'src/app/Services/weather.service';
//import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-city',
  templateUrl: './city.component.html',
  styleUrls: ['./city.component.css']
})
export class CityComponent implements OnInit, OnDestroy {

  countryName: string = "";
  countryId: number = 0;
  countryDropdown: CountryDropdown[] = [];
  cityInfo: CityInfo = new CityInfo();
  cityList: CityList[] = [];
  isSaveButtonDisabled: boolean = false;
  weatherInfo: WeatherInfo = new WeatherInfo(); 
  weatherLogsList: WeatherInfo[] = [];

  private dataSubscription: Subscription;
  //
  constructor(private dataSer: DataServiceService, private modalService: NgbModal, private countrySer: CountryService, private citySer: CityService, private weatherSer: WeatherService) { 
    this.dataSubscription = this.dataSer.countryName.subscribe((data) => {
      this.countryName = data;
    });

    this.dataSubscription = this.dataSer.countryID.subscribe((data) => {
      this.countryId = data;
    });

    this.countrySer.countryDropdown().subscribe(res => {
      var response = res as any;
      this.countryDropdown = response.data;
    });
  }

  ngOnInit(): void {
    this.getCityList();
  }

  ngOnDestroy() {
    this.dataSubscription.unsubscribe();
  }

  openCityModal(cityModal: any){
    this.cityInfo = new CityInfo();

    if(this.countryId != 0){
      this.cityInfo.countryId = this.countryId.toString();
    }

    this.modalService.open(cityModal, {backdrop: false});
  }

  saveCityInfo(){
    this.isSaveButtonDisabled = true;

    if(this.cityInfo.cityId == 0){
      this.postCityInfo(this.cityInfo);
    }
    else{
      this.putCityInfo(this.cityInfo);
    }
  }

  postCityInfo(cityInfo: CityInfo){
    this.citySer.postcity(cityInfo).subscribe(res => {
      var response = res as any;
      if(response.success){
        this.getCityList();
        this.isSaveButtonDisabled = false;
        this.modalService.dismissAll();
        alert("City data has been saved successfully!!!");
      }
    });
  }

  putCityInfo(cityInfo: CityInfo){
    this.citySer.putcity(cityInfo).subscribe(res => {
      var response = res as any;
      if(response.success){
        this.getCityList();
        this.isSaveButtonDisabled = false;
        this.modalService.dismissAll();
        alert("City data has been update successfully!!!");
      }
    });
  }


  getCityList(){
    this.citySer.cityList(this.countryId).subscribe(res => {
      var response = res as any;
      this.cityList = response.data;
    });
  }

  getCityDataById(cityId: number, cityModal: any){
    this.citySer.getCityById(cityId).subscribe(res => {
      var response = res as any;
      this.cityInfo = response.data;
      this.modalService.open(cityModal, {backdrop: false});
    });
  }

  getWeatherCondition(cityId: number, weatherConditionModal: any){
     this.weatherSer.currentWeatherCondition(cityId).subscribe(res => {
       var response = res as any;
       this.weatherInfo = response.data;
       this.modalService.open(weatherConditionModal, {backdrop: false, keyboard: false, size: 'lg', centered: true});
     });
  }

  saveWeatherInfo(){
    this.isSaveButtonDisabled = true;
    this.weatherSer.saveWeatherInformation(this.weatherInfo).subscribe(res => {
      var response = res as any;
      if(response.success){
        this.isSaveButtonDisabled = false;
        this.modalService.dismissAll();
        alert("Weather Information has been saved successfully!!!");
      }
    });
  }

  getWeatherHistory(cityId: number, weatherLogsModal: any){
    this.weatherSer.getWeatherLogs(cityId).subscribe(res => {
      var response = res as any;
      this.weatherLogsList = response.data;
      this.modalService.open(weatherLogsModal, {backdrop: false, keyboard: false, size: 'lg'});
    });
  }
}

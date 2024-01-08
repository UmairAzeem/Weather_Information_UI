import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CountryInfo } from 'src/app/Models/CountryInfo.Model';
import { CountryService } from 'src/app/Services/country.service';
import { CityComponent } from '../city/city.component';
import { DataServiceService } from 'src/app/Services/data-service.service';

@Component({
  selector: 'app-country',
  templateUrl: './country.component.html',
  styleUrls: ['./country.component.css']
})
export class CountryComponent implements OnInit {

  countryInfo: CountryInfo[] = [];

  constructor(private countrySer: CountryService, private router: Router, private dataSer: DataServiceService) { }

  ngOnInit(): void {
    this.getCountryList();
  }

  getCountryList(){
    this.countrySer.countryList().subscribe(res => {
      var response = res as any;
      this.countryInfo = response.data;
    });
  }

  navigateTocity(countryName: string, countryId: number){
    this.dataSer.setCountryName(countryName);
    this.dataSer.setCountryID(countryId);
    
    this.router.navigate(['/city']);
  }
}

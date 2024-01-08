import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataServiceService {

  private CountrySubject = new BehaviorSubject<string>(""); // Initialize with an 0 country ID
  countryName: Observable<string> = this.CountrySubject.asObservable();

  private CountryIDSubject = new BehaviorSubject<number>(0); // Initialize with an 0 country ID
  countryID: Observable<number> = this.CountryIDSubject.asObservable();

  constructor() { }
  
  setCountryName(countryName: string) {
    this.CountrySubject.next(countryName);
  }

  setCountryID(countryId: number) {
    this.CountryIDSubject.next(countryId);
  }
  
}

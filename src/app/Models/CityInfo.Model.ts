export class CityInfo{
    cityId: number;
    cityName: string;
    countryId: string;

    constructor(){
        this.cityId = 0;
        this.cityName = "";
        this.countryId = "";
    }
}


export class CityList{
    cityId: number;
    cityName: string;
    countryId: string;
    countryName: string;
    iso2: string;
    iso3: string;
    countryCode: string;
    capitalCity: string;
    countryPopulation: number;
    continent: string;

    constructor(){
        this.cityId = 0;
        this.cityName = "";
        this.countryId = "";
        this.countryName = "";
        this.iso2 = "";
        this.iso3 = "";
        this.countryCode = "";
        this.capitalCity = "";
        this.countryPopulation = 0;
        this.continent= "";
    }
}
export class WeatherInfo{
    tempC: number;
    tempF: number;
    windKph: number;
    windDir: number;
    humidity: number;
    cityId: number;
    cityName: string;
    icon: string;
    lastUpdate: string;

    constructor(){
        this.tempC = 0;
        this.tempF = 0;
        this.windKph = 0;
        this.windDir = 0;
        this.humidity = 0;
        this.cityId = 0;
        this.cityName = "";
        this.icon = "";
        this.lastUpdate = "";
    }
}
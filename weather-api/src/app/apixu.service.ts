import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApixuService {
  constructor(private http: HttpClient) { }

  getWeather(location: string) {
    return this.http.get('http://api.weatherstack.com/current?access_key=ddbfacf46865e6c8f35302d453e35a33&query=' + location);
  }
}

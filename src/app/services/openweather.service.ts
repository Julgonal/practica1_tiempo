import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OpenweatherService {

  private apiKey='d8bce8a5b9745fa25781213a625d604c';
  private apiUrl='https://api.openweathermap.org/data/2.5/weather';
  constructor(private http: HttpClient) { }

  getWeatherByCity(city: string): Observable<any>{
    const url = `${this.apiUrl}?q=${city}&appid=${this.apiKey}&units=metric`;
    return this.http.get(url);
  }
}

import { Component, OnInit} from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponent } from '../../card/card.component';
import { OpenweatherService } from '../../services/openweather.service';

@Component({
  selector: 'app-galeria',
  standalone: true,
  imports: [CommonModule, CardComponent],
  templateUrl: './galeria.component.html',
  styleUrl: './galeria.component.css'
})

export class GaleriaComponent implements OnInit {
  constructor(private weatherService: OpenweatherService) {}

  tarjetas = [
    { foto: 'imagenes/barcelona.jpg', titulo: 'Barcelona', descripcion: 'Descripción de Barcelona', city: 'Barcelona', weather: null },
    { foto: "imagenes/granada.jpg", titulo: 'Granada', descripcion: 'Descripción de Granada', city: 'Granada', weather: null },
    { foto: "imagenes/madrid.jpg", titulo: 'Madrid', descripcion: 'Descripción de Madrid', city: 'Madrid', weather: null },
    { foto: "imagenes/salamanca.jpg", titulo: 'Salamanca', descripcion: 'Descripción de Salamanca', city: 'Salamanca', weather: null },
    { foto: "imagenes/san-sebastian.jpg", titulo: 'San Sebastián', descripcion: 'Descripción de San Sebastián', city: 'San Sebastián', weather: null },
    { foto: "imagenes/sevilla.jpg", titulo: 'Sevilla', descripcion: 'Descripción de Sevilla', city: 'Sevilla', weather: null },
  ];

    weatherData: any;

    ngOnInit(){
      this.getWeather();
    }

  getWeather() {
    // Recorremos las tarjetas y obtenemos el clima para cada ciudad
    for (let tarjeta of this.tarjetas) {
      this.weatherService.getWeatherByCity(tarjeta.city).subscribe(data => {
        tarjeta.weather = data.main.temp; // Asignamos la temperatura a cada ciudad
        console.log(tarjeta.city, tarjeta.weather); 
      });
    }
  }
}


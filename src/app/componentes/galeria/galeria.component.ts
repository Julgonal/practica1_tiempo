import { Component} from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponent } from '../../card/card.component';

@Component({
  selector: 'app-galeria',
  standalone: true,
  imports: [CommonModule, CardComponent],
  templateUrl: './galeria.component.html',
  styleUrl: './galeria.component.css'
})

export class GaleriaComponent{

  tarjetas = [
    { foto: 'imagenes/barcelona.jpg',
      titulo: 'Barcelona', 
      descripcion: 'Es una metrópoli costera famosa por la arquitectura modernista de Antoni Gaudí, como la Sagrada Familia y el Park Güell. Su vibrante vida urbana incluye el Barrio Gótico, las Ramblas y playas mediterráneas. Es un epicentro cultural, deportivo y gastronómico, con una cocina que fusiona tradición y vanguardia. Su arte y diseño la convierten en una ciudad única.' },
    { foto: "imagenes/granada.jpg",
      titulo: 'Granada', 
      descripcion: 'En el sur de España, es célebre por su impresionante Alhambra, un palacio y fortaleza de la época nazarí. La ciudad combina historia árabe, renacentista y moderna, con barrios pintorescos como el Albaicín y el Sacromonte. Su gastronomía destaca por las tapas gratuitas y el tradicional pionono. A los pies de Sierra Nevada, es un lugar ideal para esquiar en invierno y disfrutar de la naturaleza.' },
    { foto: "imagenes/madrid.jpg",
      titulo: 'Madrid', 
      descripcion: 'La capital de España, es una ciudad vibrante conocida por su rica historia, arquitectura monumental y vida cultural. Alberga iconos como el Palacio Real, la Puerta del Sol y el Museo del Prado, que exhibe obras maestras del arte. Su vida nocturna y gastronomía, desde tapas hasta cocido madrileño, atraen a visitantes de todo el mundo. Además, sus extensos parques, como El Retiro, ofrecen espacios verdes en pleno corazón urbano' },
    { foto: "imagenes/salamanca.jpg",
      titulo: 'Salamanca', 
      descripcion: 'En Castilla y León, es conocida como la "Ciudad Dorada" por sus edificios de arenisca iluminados por el sol. Es hogar de la Universidad de Salamanca, una de las más antiguas del mundo. Destacan su Plaza Mayor, las catedrales y la Casa de las Conchas. Su ambiente estudiantil y su rico patrimonio histórico la hacen vibrante y acogedora.' },
    { foto: "imagenes/san-sebastian.jpg",
      titulo: 'San Sebastian', 
      descripcion: 'En el País Vasco, combina elegancia y belleza natural con su bahía de La Concha y playas icónicas. Reconocida por su alta gastronomía, especialmente los pintxos, también alberga el famoso Festival Internacional de Cine. Su casco antiguo y el Monte Igueldo ofrecen una experiencia cultural y paisajística incomparable.' },
    { foto: "imagenes/sevilla.jpg",
      titulo: 'Sevilla', 
      descripcion: 'La joya de Andalucía, es famosa por su flamenco, ferias y monumentos como la Giralda, la Catedral y el Real Alcázar. Sus calles empedradas, el barrio de Triana y la orilla del Guadalquivir rebosan encanto. La Semana Santa y la Feria de Abril son eventos únicos que muestran la tradición y alegría de la ciudad' },
    ];
}

import { Component} from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Router } from '@angular/router';{}
import Swal from 'sweetalert2';
import { FormsModule } from '@angular/forms';
import { GaleriaComponent } from './componentes/galeria/galeria.component';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [FormsModule, RouterOutlet, CommonModule, GaleriaComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',

})
export class AppComponent  {
  title = 'practica1';
  constructor(private router: Router) {}

   user: string = '';
   pass: string = '';
   usuario = "admin";
   password = "admin"; 
   isLogeado = false;

  Validar(){
    if( this.usuario === this.user  && this.password === this.pass){
      this.isLogeado = true;
      return this.router.navigate(['/galeria']);
    }
    else 
      return this.showAlert();
  }

  showAlert() {
    Swal.fire({
      title: '¡Error!',
      text: 'Usuario o contraseña erroneo',
      icon: 'warning',
      confirmButtonText: 'Aceptar'
    });
  }
}

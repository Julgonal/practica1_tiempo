import { Routes } from '@angular/router';
import { GaleriaComponent } from './componentes/galeria/galeria.component';
import { AppComponent } from './app.component';

export const routes: Routes = [
  { path: '', component: AppComponent }, 
  { path: 'galeria', component: GaleriaComponent }, 
  // { path: '**', redirectTo: '' }, 
];

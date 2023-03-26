import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContenidoRoutingModule } from './contenido-routing.module';
import { ContenidoComponent } from './contenido.component';
import { ContregistroantComponent } from './contregistroant/contregistroant.component';
import { ContenidoheaderComponent } from './contenidoheader/contenidoheader.component';
import { ContenidosliderComponent } from './contenidoslider/contenidoslider.component';
import { HomefooterComponent } from '../home/homefooter/homefooter.component';
import { HomeModule } from '../home/home.module';
import { ContenidoanteproyectoComponent } from './contenidoanteproyecto/contenidoanteproyecto.component';
import { ContenidoanteproyectodescripcionComponent } from './contenidoanteproyectodescripcion/contenidoanteproyectodescripcion.component';
import { ContenidoanteproyectoplanteamientoComponent } from './contenidoanteproyectoplanteamiento/contenidoanteproyectoplanteamiento.component';


@NgModule({
  declarations: [
    ContenidoComponent,
    ContregistroantComponent,
    ContenidosliderComponent,
    ContenidoheaderComponent,
    ContenidoanteproyectoComponent,
    ContenidoanteproyectodescripcionComponent,
    ContenidoanteproyectoplanteamientoComponent,
    
    

  ],
  imports: [
    CommonModule,
    ContenidoRoutingModule,
    HomeModule
   
  ]
})
export class ContenidoModule { }

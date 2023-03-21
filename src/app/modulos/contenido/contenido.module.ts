import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContenidoRoutingModule } from './contenido-routing.module';
import { ContenidoComponent } from './contenido.component';


@NgModule({
  declarations: [
    ContenidoComponent
  ],
  imports: [
    CommonModule,
    ContenidoRoutingModule
  ]
})
export class ContenidoModule { }

import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-contenidoanteproyecto',
  templateUrl: './contenidoanteproyecto.component.html',
  styleUrls: ['./contenidoanteproyecto.component.sass']
})
export class ContenidoanteproyectoComponent {
  @Output() mensajeDelHijo = new EventEmitter();

  cargarPersonas(){
    this.mensajeDelHijo.emit('personas');
  }
}
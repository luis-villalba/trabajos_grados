import { Component, OnInit } from '@angular/core';
import { PersonaService } from './persona.service';

@Component({
  selector: 'app-persona',
  templateUrl: './persona.component.html',
  styleUrls: ['./persona.component.sass']
})
export class PersonaComponent implements OnInit{
  title = 'Funcionando'; 

  constructor(private PersonaService: PersonaService){

  }

  personas: any[] = [];

  ngOnInit() {
    this.PersonaService.getPersona().subscribe((response) => {
      console.log(response)
  })
  }
}


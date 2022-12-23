import { Component, OnInit } from '@angular/core';
import { LoggingService } from './LoggingService.service';
import { Persona } from './persona.model';
import { PersonasService } from './personas.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  titulo = 'Listado de Personas';

  personas: Persona[];

  constructor(private loggin: LoggingService, 
              private personaService: PersonasService){}

  ngOnInit(): void {
    this.personas = this.personaService.personas;
  } 
}

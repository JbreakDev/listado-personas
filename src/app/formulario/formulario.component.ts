import { Component, ElementRef, EventEmitter, Output, ViewChild } from '@angular/core';
import { LoggingService } from '../LoggingService.service';
import { Persona } from '../persona.model';
import { PersonasService } from '../personas.service';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css'],
})
export class FormularioComponent {

  //@Output() personaCreada = new EventEmitter<Persona>();

  /*nombreInput = '';
  apellidoInput = '';*/

  nombre: string; 
  apellido: string; 

  constructor(private loggingService: LoggingService,
    private personaService: PersonasService){
      this.personaService.saludar.subscribe(
        (indice: number) => {
          indice++;
          alert("El indice es: " + indice)
        }
      );
    }

  agregarPersona() {
    let persona = new Persona(
      this.nombre, 
      this.apellido);
    //this.loggingService.enviaMensajeaConsola(`Enviamos persona: ${persona.nombre} ${persona.apellido}`);
    /**
     * con emit mandamos el objeto persona al objeto padre
     */
    //this.personaCreada.emit(persona);
    this.personaService.agregarPersona(persona);
    this.nombre = '';
    this.apellido = '';
  }

}

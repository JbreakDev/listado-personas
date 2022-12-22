import { EventEmitter, Injectable } from "@angular/core";
import { LoggingService } from "./LoggingService.service";
import { Persona } from "./persona.model";

@Injectable()
export class PersonasService{
    personas: Persona[] = [
        new Persona('Jesus', 'Garcia'),
        new Persona('Laura', 'Juarez'),
        new Persona('Karla', 'Lara'),
      ];

      saludar = new EventEmitter<number>();

      constructor(private loggin: LoggingService){}

      agregarPersona(persona: Persona) {
        this.loggin.enviaMensajeaConsola(`Se añadio ${persona.nombre}`);
        this.personas.push(persona);
      }
}
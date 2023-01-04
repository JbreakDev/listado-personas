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

      encontrarPersona(indice: number) {
        let persona: Persona = this.personas[indice];
        return persona;
      }

      modificarPersona(indice: number, persona: Persona) {
        let persona1 = this.personas[indice];
        persona1.apellido = persona.apellido;
        persona1.nombre = persona.nombre;
      }

      eliminarPersona(indice: number) {
        this.personas.splice(indice, 1);
      }
}
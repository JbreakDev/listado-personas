import { EventEmitter, Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { DataServices } from "./data.services";
import { LoggingService } from "./LoggingService.service";
import { Persona } from "./persona.model";

@Injectable()
export class PersonasService{
    /*personas: Persona[] = [
        new Persona('Jesus', 'Garcia'),
        new Persona('Laura', 'Juarez'),
        new Persona('Karla', 'Lara'),
      ];*/
      personas: Persona[] = [];

      saludar = new EventEmitter<number>();

      constructor(private loggin: LoggingService,
        private dataService: DataServices){}

      setPersonas(personas: Persona[]){
        this.personas = personas;
      }

      obtenerPersonas(): Observable<Persona[]>{
        return this.dataService.cargarPersonas();
      }

      agregarPersona(persona: Persona) {
        this.loggin.enviaMensajeaConsola(`Se añadio ${persona.nombre}`);
        if(this.personas === null){
          this.personas = [];
        }
        this.personas.push(persona);
        this.dataService.guardarPersonas(this.personas);
      }

      encontrarPersona(indice: number) {
        let persona: Persona = this.personas[indice];
        return persona;
      }

      modificarPersona(indice: number, persona: Persona) {
        let persona1 = this.personas[indice];
        persona1.apellido = persona.apellido;
        persona1.nombre = persona.nombre;
        this.dataService.modificarPersona(indice, persona1);
      }

      eliminarPersona(indice: number) {
        this.personas.splice(indice, 1);
      }
}
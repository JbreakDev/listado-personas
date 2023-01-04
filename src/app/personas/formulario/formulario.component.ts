import { Component, ElementRef, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { LoggingService } from '../../LoggingService.service';
import { Persona } from '../../persona.model';
import { PersonasService } from '../../personas.service';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css'],
})
export class FormularioComponent implements OnInit{

  //@Output() personaCreada = new EventEmitter<Persona>();

  /*nombreInput = '';
  apellidoInput = '';*/

  nombre: string; 
  apellido: string; 
  index: number;
  modoEdicion: number;

  constructor(private loggingService: LoggingService,
    private personaService: PersonasService, private router: Router, private route: ActivatedRoute){
      this.personaService.saludar.subscribe(
        (indice: number) => {
          indice++;
          alert("El indice es: " + indice)
        }
      );
    }

  ngOnInit() {
    this.index = this.route.snapshot.params['id'];
    this.modoEdicion = +this.route.snapshot.queryParams['modoEdicion'];

    if(this.modoEdicion !== null && this.modoEdicion === 1){
      let persona: Persona = this.personaService.encontrarPersona(this.index);
      this.nombre = persona.nombre;
      this.apellido = persona.apellido;
    }
  }

  onGuardarPersona() {
    let persona = new Persona(
      this.nombre, 
      this.apellido);

    if(this.modoEdicion === 1){
      this.personaService.modificarPersona(this.index, persona);
    } else {
      this.personaService.agregarPersona(persona);
    }

    this.router.navigate(['personas']);
    //this.loggingService.enviaMensajeaConsola(`Enviamos persona: ${persona.nombre} ${persona.apellido}`);
    /**
     * con emit mandamos el objeto persona al objeto padre
     */
    //this.personaCreada.emit(persona);
    
  }

  eliminarPersona() {
    if(this.index !== null){
      this.personaService.eliminarPersona(this.index);
      this.router.navigate(['personas']);
    }
  }

}

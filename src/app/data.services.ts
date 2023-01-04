import { Injectable } from "@angular/core";
import { HttpClient} from "@angular/common/http";
import { PersonasComponent } from "./personas/personas.component";
import { Persona } from "./persona.model";

@Injectable()
export class DataServices {
    constructor(private httpClient: HttpClient){}

    cargarPersonas(){
        return this.httpClient.get<Persona[]>('https://listado-personas-f02a3-default-rtdb.firebaseio.com/datos.json');
    }

    //guardar personas
    guardarPersonas(personas: Persona[]){
        this.httpClient.put('https://listado-personas-f02a3-default-rtdb.firebaseio.com/datos.json', 
        personas). subscribe(
            response => console.log("Guardado correcto: " + response),
            error => console.log("Error al guardar personas: " + error)
        );
    }

    modificarPersona(index: number, persona: Persona){
        let url: string;
        url = 'https://listado-personas-f02a3-default-rtdb.firebaseio.com/datos/' + index + '.json';
        this.httpClient.put(url, persona)
        .subscribe(
            response => console.log('resultado de modificar persona: ' + response),
            error => console.log("Error: " + error)
        )
        
    }

}
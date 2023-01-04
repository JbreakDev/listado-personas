import { Injectable } from "@angular/core";
import { HttpClient} from "@angular/common/http";
import { PersonasComponent } from "./personas/personas.component";
import { Persona } from "./persona.model";

@Injectable()
export class DataServices {
    constructor(private httpClient: HttpClient){}

    //guardar personas
    guardarPersonas(personas: Persona[]){
        this.httpClient.post('https://listado-personas-f02a3-default-rtdb.firebaseio.com/datos.json', 
        personas). subscribe(
            response => console.log("Guardado correcto: " + response),
            error => console.log("Error al guardar personas: " + error)
        );
    }

}
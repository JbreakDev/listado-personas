import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { PersonaComponent } from './personas/persona/persona.component';
import { FormularioComponent } from './personas/formulario/formulario.component';
import { LoggingService } from './LoggingService.service';
import { PersonasService } from './personas.service';
import { AppRoutingModule } from './app-routing.module';
import { PersonasComponent } from './personas/personas.component';
<<<<<<< HEAD
import { DataServices } from './data.services';
=======
import { ErrorComponent } from './error/error.component';
>>>>>>> e18fdabfddd0bc3882ed9c7644eabe1a41b950d0

@NgModule({
  declarations: [
    AppComponent,
    PersonaComponent,
    FormularioComponent,
    PersonasComponent,
    ErrorComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [LoggingService, PersonasService, DataServices],
  bootstrap: [AppComponent]
})
export class AppModule { }

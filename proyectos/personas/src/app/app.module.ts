import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms'
import { AppRoutingModule } from './app-routing.module';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { PersonaComponent } from './personas/persona/persona.component';
import { FormularioComponent } from './personas/formulario/formulario.component';
import { LoggingService } from './LoggingService.service';
import { PersonasService } from './PersonasService.service';
import { PersonasComponent } from './personas/personas.component';
import { ErrorComponent } from './error/error.component';
import { DataServices } from './data.service';
import { LoginComponent } from './login/login.component';
import { LoginService } from './login/login.service';
import { LoginGuardian } from './login/login-guardian';

@NgModule({
  declarations: [
    AppComponent,
    PersonaComponent,
    FormularioComponent,
    PersonasComponent,
    ErrorComponent,
    LoginComponent,
  ],
  imports: [
    BrowserModule, FormsModule, AppRoutingModule,RouterModule,HttpClientModule
  ],
  providers: [LoggingService,PersonasService, DataServices, LoginService, LoginGuardian],
  bootstrap: [AppComponent]
})
export class AppModule { }

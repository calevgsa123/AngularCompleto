import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FormComponent } from './form/form.component';
import { IngresosComponent } from './ingresos/ingresos.component';
import { EgresosComponent } from './egresos/egresos.component';
import { ModuloServicio } from './ModuloServicio.service';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FormComponent,
    IngresosComponent,
    EgresosComponent
  ],
  imports: [
    BrowserModule, FormsModule
  ],
  providers: [ModuloServicio],
  bootstrap: [AppComponent]
})
export class AppModule { }

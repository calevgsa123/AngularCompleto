import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FormComponent } from './form/form.component';
import { IngresosComponent } from './ingresos/ingresos.component';
import { EgresosComponent } from './egresos/egresos.component';
import { ingreso } from './ingreso/ingreso.component';
import { ModuloService } from './ModuloService.service';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FormComponent,
    IngresosComponent,
    EgresosComponent,
    ingreso
  ],
  imports: [
    BrowserModule, FormsModule,CommonModule
  ],
  providers: [ModuloService],
  bootstrap: [AppComponent]
})
export class AppModule { }

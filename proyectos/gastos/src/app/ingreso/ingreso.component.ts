import { Component, Input } from '@angular/core';
import { ingresosModel } from '../ingresos.model';

@Component({
    selector: 'app-ingreso',
    templateUrl: './ingreso.component.html',
  })

export class ingreso{
@Input()ingresoP:ingresosModel;
}
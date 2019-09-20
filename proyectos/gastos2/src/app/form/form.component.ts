import { Component, OnInit } from '@angular/core';
import { ModuloServicio } from '../ModuloServicio.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  conseptoInput:string;
  montoInput:number;

  slectChoose:string;

  constructor(private ModuloServicio:ModuloServicio) { }

  ngOnInit() {
  }
  agregarIngreso() {
    if (this.slectChoose == "egreso") {
      this.ModuloServicio.onAgregarEgreso(this.conseptoInput, this.montoInput);
      this.ModuloServicio.ingresoTotalEmit.emit(this.montoInput);
    } else if (this.slectChoose == "ingreso") {
      this.ModuloServicio.onAgregarIngreso(this.conseptoInput, this.montoInput);
      this.ModuloServicio.ingresoTotalEmit.emit(this.montoInput);
    }
    this.conseptoInput = "";
    this.montoInput = 0;
  }
}

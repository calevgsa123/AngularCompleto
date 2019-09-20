import { Component, OnInit } from '@angular/core';
import { IngresoModel } from '../IngresoModel.model';
import { ModuloServicio } from '../ModuloServicio.service';

@Component({
  selector: 'app-ingresos',
  templateUrl: './ingresos.component.html',
  styleUrls: ['./ingresos.component.css']
})
export class IngresosComponent implements OnInit {
  //new IngresoModel("Quincena",8000),new IngresoModel("Rubik",2000)
  ingresos:IngresoModel[]=[];
  constructor(private ModuloServicio:ModuloServicio) { }

  ngOnInit() {
    this.ingresos= this.ModuloServicio.ingresos;
  }
  onEliminarIngreso(event){
    this.ModuloServicio.onEliminarIngreso(event.target.value);
    this.ModuloServicio.ingresoTotalEmit.emit();
  }
}

import { Component, OnInit } from '@angular/core';
import { EgresosModel } from '../EgresosModel.model';
import { ModuloServicio } from '../ModuloServicio.service';

@Component({
  selector: 'app-egresos',
  templateUrl: './egresos.component.html',
  styleUrls: ['./egresos.component.css']
})
export class EgresosComponent implements OnInit {
  egresos:EgresosModel[]=[];
  constructor(private ModuloServicio:ModuloServicio) {
    this.egresos = this.ModuloServicio.egresos;
   }

  ngOnInit() {
  }
  onEliminarEgreso(event){
    this.ModuloServicio.onEliminarEgreso(event.target.value);
    this.ModuloServicio.ingresoTotalEmit.emit();
  }
}

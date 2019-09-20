import { Component, OnInit } from '@angular/core';
import { ModuloServicio } from '../ModuloServicio.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  totalIngresos:number=0;
  totalEgresos:number=0;
  totalPresupuesto:number=0;
  constructor(private ModuloServicio:ModuloServicio) { 
    this.totalIngresos = this.ModuloServicio.ingresosTotal;
    this.totalEgresos = this.ModuloServicio.egresosTotal;
    this.totalPresupuesto = this.totalIngresos - this.totalEgresos;

    this.ModuloServicio.ingresoTotalEmit.subscribe((monto)=>{
      this.totalIngresos = this.ModuloServicio.ingresosTotal;
      this.totalEgresos = this.ModuloServicio.egresosTotal;
      this.totalPresupuesto = this.totalIngresos - this.totalEgresos;
    })
  }

  ngOnInit() {
   
  }

}

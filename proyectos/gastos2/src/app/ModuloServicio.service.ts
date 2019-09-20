import { IngresoModel } from './IngresoModel.model';
import { EventEmitter, Injectable } from '@angular/core';
import { EgresosModel } from './EgresosModel.model';

@Injectable()
export class ModuloServicio{
  ingresos:IngresoModel[]=[new IngresoModel("Quincena",8000),new IngresoModel("Rubik",2000)];
  egresos:EgresosModel[]=[new EgresosModel("Pasajes",300), new EgresosModel("Gasto",400)]; 
  ingresosTotal:number=10000;
  egresosTotal:number=700;
  ingresoTotalEmit = new EventEmitter<number>(); 
  onAgregarIngreso(consepto,monto){
      this.ingresosTotal += monto;
      this.ingresos.push(new IngresoModel(consepto,monto));
  }
  onAgregarEgreso(consepto,monto){
    this.egresosTotal +=monto;
    this.egresos.push(new EgresosModel(consepto,monto));
  }
  onEliminarIngreso(indice){
      let ingresoABorrar:number = this.ingresos[indice].monto;
      this.ingresosTotal -= ingresoABorrar;
      this.ingresos.splice(indice,1); 
  }
  onEliminarEgreso(indice){
    let egresoABorrar:number = this.egresos[indice].monto;
      this.egresosTotal -= egresoABorrar;
      this.egresos.splice(indice,1);  
  }
}
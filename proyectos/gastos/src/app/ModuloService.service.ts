import { ingresosModel } from './ingresos.model';
import { egresosModel } from './egresos.model';

export class ModuloService{
    ingresos:number=0;
    egresos:number=0;
    ingresosConseptos:ingresosModel[]=[new ingresosModel("Quincena",4200),new ingresosModel("Rubik",2000)];
    egresosConseptos:egresosModel[]=[new egresosModel("Comidas",300),new egresosModel("Pasajes",300)];
}
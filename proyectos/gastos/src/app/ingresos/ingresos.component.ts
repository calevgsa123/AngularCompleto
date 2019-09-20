import { Component, OnInit, Injectable } from '@angular/core';
import { ingresosModel } from '../ingresos.model';
import { ModuloService } from '../ModuloService.service';

@Component({
  selector: 'app-ingresos',
  templateUrl: './ingresos.component.html',
  styleUrls: ['./ingresos.component.css']
})
@Injectable()
export class IngresosComponent implements OnInit {
  ingresosV:ingresosModel[]=[];
  constructor(private ModuloService:ModuloService) { }

  ngOnInit() {
    this.ingresosV=this.ModuloService.ingresosConseptos;
  }

}

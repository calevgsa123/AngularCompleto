import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {
  @Output() sendResultado = new EventEmitter<number>();
  valorA:number;
  valorB:number;
  resultado:number;

  onSumar(){
    this.resultado = this.valorA + this.valorB;
    this.sendResultado.emit(this.resultado);
  }

  /*  */
  constructor() { }

  ngOnInit() {
  }

}

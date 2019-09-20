import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  title = 'Bienvenido a la calculadora';
  resultado:number;
  onCacharResultado(event: number){
    this.resultado = event;

  }
}

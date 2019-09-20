import {Component} from '@angular/core';

@Component({
    selector: 'app-personas',
    templateUrl: './personas.component.html'
})

export class PersonasComponent{
    agregarPersona=false;
    mensajeAgregarPersona="No se ha agregado ninguna persona";
    inputText:string="";
    inputAsociado="Hola mundo";
    disteClick=false;

    constructor(){
        setTimeout(()=>{
            this.agregarPersona=true;
        },2000);
    }
    
    onCrearPersona(){
        this.disteClick=true;
        this.mensajeAgregarPersona="Presona agregada";
    }
    onEscribirInput(event: Event){
        this.inputText=(<HTMLInputElement>event.target).value;
    }
}
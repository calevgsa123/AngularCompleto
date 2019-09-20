import { persona } from './persona.model';
import { Injectable, EventEmitter } from '@angular/core';
import { DataServices } from './data.service';

@Injectable()
export class PersonasService{
  personas:persona[] = [];
  personaIndice = new EventEmitter<number>();
  constructor (private DataServices: DataServices){}
  setPersonas(personas:persona[]){
    this.personas = personas;
  }
  obtenerPersonas(){
    return this.DataServices.cargarPersonas();
  }
  onPersonaAgregada(event:persona){
    this.personas.push(event);
    this.DataServices.guardarPersona(this.personas);
  }
  encontrarPersona(index:number){
    let persona:persona=this.personas[index];
    return persona;
  }
  onEditarPersona(index:number, persona:persona){
    this.personas[index].nombre = persona.nombre;
    this.personas[index].apellido = persona.apellido;
    this.DataServices.editarPersona(index,persona);
  }
  onBorrarPersona(index:number){
    this.personas.splice(index,1);    
    this.DataServices.eliminarPersona(index,this.personas);
    console.log("index: " + index);
    this.regenerarIndice();
  }
  regenerarIndice(){
    if(this.personas !=null){
      this.DataServices.guardarPersona(this.personas);
    }
  }
}
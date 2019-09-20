import { Component, OnInit, Input } from '@angular/core';
import { persona } from '../../persona.model';
import { PersonasService } from '../../PersonasService.service';

@Component({
  selector: 'app-persona',
  templateUrl: './persona.component.html',
  styleUrls: ['./persona.component.css']
})
export class PersonaComponent{
 
@Input()persona:persona;
@Input()index:number; 

constructor(private PersonasService:PersonasService){}

onSaberIndice(){
  this.PersonasService.personaIndice.emit(this.index);
}
}

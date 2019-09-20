import { Component, OnInit } from '@angular/core';
import { persona } from '../../persona.model';
import { PersonasService } from '../../PersonasService.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {
  nombrePersona:string;
  apellidoPersona:string;
  index:number;
  modoEdicion;

  constructor(private PersonasService:PersonasService,
    private router: Router,
    private route: ActivatedRoute) { 
    this.PersonasService.personaIndice.subscribe((indice:number) => alert("El indice es: " + indice));
  }

  ngOnInit() {
    this.index = this.route.snapshot.params['id'];
    this.modoEdicion = +this.route.snapshot.queryParams['modoEdicion'];
    if(this.modoEdicion !=null && this.modoEdicion ===1){
      let persona: persona = this.PersonasService.encontrarPersona(this.index);
      this.nombrePersona = persona.nombre;
      this.apellidoPersona = persona.apellido;
    }
  }
  onAgregarPersona(){
    if(this.modoEdicion !=null && this.modoEdicion ===1){
      this.PersonasService.onEditarPersona(this.index, new persona(this.nombrePersona, this.apellidoPersona));
    }else{
      this.PersonasService.onPersonaAgregada(new persona(this.nombrePersona, this.apellidoPersona));
    }
    this.router.navigate(['personas']);
  }

  onBorrarPersona(){
  if(this.modoEdicion !=null && this.modoEdicion ===1){
    this.PersonasService.onBorrarPersona(this.index);
  }
  this.router.navigate(['personas']);
  }
}

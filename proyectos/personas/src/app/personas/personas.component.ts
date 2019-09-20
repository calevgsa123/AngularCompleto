import { Component, OnInit } from '@angular/core';
import { persona } from '../persona.model';
import { PersonasService } from '../PersonasService.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-personas',
  templateUrl: './personas.component.html',
  styleUrls: ['./personas.component.css']
})
export class PersonasComponent implements OnInit {

  personas:persona[]=[];

  constructor(private PersonasService:PersonasService,
    private router:Router){}

  ngOnInit(): void {
    this.PersonasService.obtenerPersonas().subscribe(
      (personas:persona[])=>{
        this.personas = personas;
        this.PersonasService.setPersonas(personas);
      }
    )
  }

  onAgregar(){
    this.router.navigate(['personas/agregar']);
  }
}

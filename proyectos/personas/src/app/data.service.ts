import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { persona } from './persona.model';
import { LoginService } from './login/login.service';

@Injectable()
export class DataServices{
    constructor(private HttpCliente: HttpClient, private LoginService: LoginService){}

    cargarPersonas(){
        const token = this.LoginService.getIdToken();
        return this.HttpCliente.get('https://listado-personas-ad186.firebaseio.com/datos.json?auth=' + token);
    }
    guardarPersona(personas: persona[]){
        const token = this.LoginService.getIdToken();
        this.HttpCliente.put('https://listado-personas-ad186.firebaseio.com/datos.json?auth=' + token, personas)
        .subscribe(
            response => console.log("Persona agregada " + response),
            error => console.log("Error al guardar: " + error)
        );
    }
    editarPersona(index:number,persona: persona){
        const token = this.LoginService.getIdToken();
        let url: string = 'https://listado-personas-ad186.firebaseio.com/datos/' + index + '.json?auth=' + token;
        this.HttpCliente.put(url,persona)
        .subscribe(
            response => console.log("Se modifico persona: " + response),
            error => console.log("Error al modificar persona: " + error)
        );
    }
    eliminarPersona(index:number,personas:persona[]){
        const token = this.LoginService.getIdToken();
        let url: string = 'https://listado-personas-ad186.firebaseio.com/datos/' + index + '.json?auth=' + token;
        this.HttpCliente.delete(url)
        .subscribe(
            response => {console.log("Se elimino persona: " + response);
           this.guardarPersona(personas);
        },
            error => console.log("Error al eliminar persona: " + error)
        );
    }
}
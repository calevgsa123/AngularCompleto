import { CanActivate, Router } from '@angular/router';
import { ConfiguracionServicio } from '../servicios/configuracion.service';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Configuracion } from '../modelo/configuracion.model';
import { Injectable } from '@angular/core';

@Injectable()
export class ConfiguracionGuard implements CanActivate{

    constructor(private configuracionServicio:ConfiguracionServicio,
                private router: Router){}
    
    canActivate():Observable<boolean>{
        return this.configuracionServicio.getConfiguracion().pipe(
            map((configuracion:Configuracion)=>{
                if(configuracion.permitirRegistro){
                    return true;
                }else{
                    this.router.navigate(['/login']);
                    return false;
                }
            }
        ))
    }

}
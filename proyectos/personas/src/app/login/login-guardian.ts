import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { LoginService } from './login.service';
import { Injectable } from '@angular/core';

@Injectable()
export class LoginGuardian implements CanActivate{

    constructor(private LoginService: LoginService, private router: Router){}
    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot){
      if(this.LoginService.isAutenticado()){
          return true;
      }else{
          this.router.navigate(['login']);
          return false;
      }
    }
}
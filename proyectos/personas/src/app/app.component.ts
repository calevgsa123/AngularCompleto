import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';
import { LoginService } from './login/login.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  titulo = 'Lista de personas';
  constructor(private LoginService: LoginService){}
   ngOnInit():void{
   firebase.initializeApp({
    apiKey: "AIzaSyCtwcdpX1EBXJelkFXTXlcz05dZWxxgzSY",
    authDomain: "listado-personas-ad186.firebaseapp.com",
   })
 }
 isAutenticado(){
   return this.LoginService.isAutenticado();
 }
 salir(){
    this.LoginService.salir();
 }
}


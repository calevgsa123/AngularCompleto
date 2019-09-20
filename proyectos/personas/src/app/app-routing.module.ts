import { NgModule } from '@angular/core';
import { Routes, RouterModule} from '@angular/router';
import { FormularioComponent } from './personas/formulario/formulario.component';
import { PersonasComponent } from './personas/personas.component';
import { ErrorComponent } from './error/error.component';
import { LoginComponent } from './login/login.component';
import { LoginGuardian } from './login/login-guardian';

const routes: Routes = [
  { path: '', component: PersonasComponent, canActivate:[LoginGuardian] },
  { path: 'personas', component: PersonasComponent, canActivate:[LoginGuardian] ,children: [
    { path: 'agregar', component: FormularioComponent },
    { path: ':id', component: FormularioComponent },
  ]},
  { path: 'login', component: LoginComponent },
  { path: '**', component: ErrorComponent }
]

@NgModule({
  imports: [RouterModule.forRoot(
    routes
  )
  ]
})
export class AppRoutingModule { }

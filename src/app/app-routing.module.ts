import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './components/home/home.component';
import { SobrenosComponent } from './components/institucional/sobrenos/sobrenoscomponent';
//import { RegistreseComponent } from './components/institucional/registrese/registrese.component';
//import { LoginComponent } from './components/institucional/login/login.component';

const routes: Routes = [
  {path:'', component:HomeComponent},
  {path:'institucional', component:SobrenosComponent},
  //{path:'institucional/registrese', component:RegistreseComponent},
  //{path:'institucional/login', component:LoginComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

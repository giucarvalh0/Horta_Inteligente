import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {LoginComponent} from './login/login.component';
import {CadastroComponent} from './cadastro/cadastro.component';
import {DashboardClienteComponent} from './dashboard-cliente/dashboard-cliente.component';
import {DashboardCuidadorComponent} from './dashboard-cuidador/dashboard-cuidador.component';

const routes: Routes = [{
  path: "",
  component: LoginComponent
},
{
  path:"cadastro",
  component: CadastroComponent
},
{
  path:"dashboard",
  component: DashboardClienteComponent
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RegistroIntegranteComponent } from './registro-integrante/registro-integrante.component';


const routes: Routes = [
  { path: 'registro-integrante', component: RegistroIntegranteComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RegistroRoutingModule { }

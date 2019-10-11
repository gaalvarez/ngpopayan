import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EventosRealizadosComponent } from './eventos-realizados/eventos-realizados.component';
import { ProximosEventosComponent } from './proximos-eventos/proximos-eventos.component';


const routes: Routes = [
  {path: 'eventos-realizados', component: EventosRealizadosComponent},
  {path: 'proximos-eventos', component: ProximosEventosComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EventosRoutingModule { }

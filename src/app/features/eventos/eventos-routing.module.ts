import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EventosRealizadosComponent } from './eventos-realizados/eventos-realizados.component';
import { ProximosEventosComponent } from './proximos-eventos/proximos-eventos.component';
import { DetalleEventoComponent } from './detalle-evento/detalle-evento.component';


const routes: Routes = [
  {path: 'eventos-realizados', component: EventosRealizadosComponent},
  {path: 'eventos-realizados/:id', component: DetalleEventoComponent},
  {path: 'proximos-eventos', component: ProximosEventosComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EventosRoutingModule { }

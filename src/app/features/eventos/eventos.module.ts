import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EventosRoutingModule } from './eventos-routing.module';
import { EventosRealizadosComponent } from './eventos-realizados/eventos-realizados.component';
import { ProximosEventosComponent } from './proximos-eventos/proximos-eventos.component';


@NgModule({
  declarations: [EventosRealizadosComponent, ProximosEventosComponent],
  imports: [
    CommonModule,
    EventosRoutingModule
  ]
})
export class EventosModule { }

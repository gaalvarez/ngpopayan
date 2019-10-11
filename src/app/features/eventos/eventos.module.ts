import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EventosRoutingModule } from './eventos-routing.module';
import { EventosRealizadosComponent } from './eventos-realizados/eventos-realizados.component';
import { ProximosEventosComponent } from './proximos-eventos/proximos-eventos.component';
import { DetalleEventoComponent } from './detalle-evento/detalle-evento.component';
import { EventoService } from './evento.service';


@NgModule({
  declarations: [EventosRealizadosComponent, ProximosEventosComponent, DetalleEventoComponent],
  imports: [
    CommonModule,
    EventosRoutingModule
  ],
  providers: [EventoService]
})
export class EventosModule { }

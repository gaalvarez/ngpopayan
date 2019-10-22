import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EventosRoutingModule } from './eventos-routing.module';
import { EventosRealizadosComponent } from './eventos-realizados/eventos-realizados.component';
import { ProximosEventosComponent } from './proximos-eventos/proximos-eventos.component';
import { DetalleEventoComponent } from './detalle-evento/detalle-evento.component';
import { EventoService } from './evento.service';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatButtonModule } from '@angular/material/button';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [EventosRealizadosComponent, ProximosEventosComponent, DetalleEventoComponent],
  imports: [
    CommonModule,
    EventosRoutingModule,
    MatCardModule,
    MatIconModule,
    FlexLayoutModule,
    MatButtonModule,
    SharedModule
  ],
  providers: [EventoService]
})
export class EventosModule { }

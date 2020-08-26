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
import { MatFormFieldModule } from '@angular/material/form-field';
import { ReactiveFormsModule } from '@angular/forms';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatInputModule } from '@angular/material/input';

@NgModule({
  declarations: [EventosRealizadosComponent, ProximosEventosComponent, DetalleEventoComponent],
  imports: [
    CommonModule,
    EventosRoutingModule,
    ReactiveFormsModule,
    MatCardModule,
    MatIconModule,
    FlexLayoutModule,
    MatButtonModule,
    SharedModule,
    MatFormFieldModule,
    MatAutocompleteModule,
    MatInputModule,
  ],
  providers: [EventoService],
})
export class EventosModule {}

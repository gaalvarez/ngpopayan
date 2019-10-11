import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RegistroRoutingModule } from './registro-routing.module';
import { RegistroIntegranteComponent } from './registro-integrante/registro-integrante.component';


@NgModule({
  declarations: [RegistroIntegranteComponent],
  imports: [
    CommonModule,
    RegistroRoutingModule
  ]
})
export class RegistroModule { }

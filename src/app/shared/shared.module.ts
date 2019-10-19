import {MatSnackBarModule} from '@angular/material/snack-bar';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NotificacionComponent } from './notificacion/notificacion.component';
import { CarouselDirective } from './carousel/carousel.directive';
import { NumberOnlyDirective } from './number-only/number-only.directive';
import { FilterEventosPipe } from './filter-eventos/filter-eventos.pipe';



@NgModule({
  declarations: [NotificacionComponent, CarouselDirective, NumberOnlyDirective, FilterEventosPipe],
  entryComponents: [NotificacionComponent],
  imports: [
    CommonModule,
    MatSnackBarModule
  ],
  exports: [NotificacionComponent, CarouselDirective, NumberOnlyDirective, FilterEventosPipe]
})
export class SharedModule {

  static forRoot() {
    return {
      ngModule: SharedModule,
      providers: []
    };
  }

}

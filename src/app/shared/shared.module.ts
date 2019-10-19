import {MatSnackBarModule} from '@angular/material/snack-bar';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NotificacionComponent } from './notificacion/notificacion.component';
import { CarouselDirective } from './carousel/carousel.directive';
import { NumberOnlyDirective } from './number-only/number-only.directive';



@NgModule({
  declarations: [NotificacionComponent, CarouselDirective, NumberOnlyDirective],
  entryComponents: [NotificacionComponent],
  imports: [
    CommonModule,
    MatSnackBarModule
  ],
  exports: [NotificacionComponent, CarouselDirective, NumberOnlyDirective]
})
export class SharedModule {

  static forRoot() {
    return {
      ngModule: SharedModule,
      providers: []
    };
  }

}

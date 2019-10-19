import {MatSnackBarModule} from '@angular/material/snack-bar';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NotificacionComponent } from './notificacion/notificacion.component';
import { CarouselDirective } from './carousel/carousel.directive';



@NgModule({
  declarations: [NotificacionComponent, CarouselDirective],
  entryComponents: [NotificacionComponent],
  imports: [
    CommonModule,
    MatSnackBarModule
  ],
  exports: [NotificacionComponent, CarouselDirective]
})
export class SharedModule {

  static forRoot() {
    return {
      ngModule: SharedModule,
      providers: []
    };
  }

}

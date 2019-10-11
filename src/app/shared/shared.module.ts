import {MatSnackBarModule} from '@angular/material/snack-bar';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NotificacionComponent } from './notificacion/notificacion.component';



@NgModule({
  declarations: [NotificacionComponent],
  entryComponents: [NotificacionComponent],
  imports: [
    CommonModule,
    MatSnackBarModule
  ],
  exports: [NotificacionComponent]
})
export class SharedModule {

  static forRoot() {
    return {
      ngModule: SharedModule,
      providers: []
    };
  }

}

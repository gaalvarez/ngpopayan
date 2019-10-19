import { Component, OnInit, Input } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-notificacion',
  templateUrl: './notificacion.component.html',
  styleUrls: ['./notificacion.component.scss']
})
export class NotificacionComponent implements OnInit {

  @Input() configuracion: ConfigNotificacion = {
    duracion: 5000,
    mensaje: '',
    abrirAutomatico: true
  };

  constructor(private snack: MatSnackBar) { }

  ngOnInit() {
    if (this.configuracion.abrirAutomatico) {
      this.abrirNotificacion();
    }
  }

  abrirNotificacion() {
    this.snack.open(this.configuracion.mensaje, 'Cerrar', { duration: this.configuracion.duracion });
  }

  abrirNotificacionMsj(msj: string) {
    this.snack.open(msj, 'Cerrar', { duration: this.configuracion.duracion });
  }

}

export interface ConfigNotificacion {
  duracion?: number;
  mensaje: string;
  abrirAutomatico?: boolean;
}

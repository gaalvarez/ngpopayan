import { Component, OnInit, Input } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-notificacion',
  templateUrl: './notificacion.component.html',
  styleUrls: ['./notificacion.component.scss']
})
export class NotificacionComponent implements OnInit {

  @Input() duracion = 5000; // 5 seg por defecto
  @Input() mensaje = 'Notificacion Simple';
  @Input() abrirAutomatico: boolean = true;

  constructor(private snackBar: MatSnackBar) { }

  ngOnInit() {
    if (this.abrirAutomatico) {
      this.openSnackBar();
    }
  }

  openSnackBar() {
    this.snackBar.open(this.mensaje, 'Cerrar', { duration: this.duracion });
  }

}

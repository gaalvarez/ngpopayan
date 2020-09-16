import { Component, OnInit } from '@angular/core';
import { ConfigNotificacion } from './shared/notificacion/notificacion.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'ng-popayan';

  config: ConfigNotificacion = { mensaje: 'Prueba desde objeto', abrirAutomatico: true };

  ngOnInit(): void {}
}

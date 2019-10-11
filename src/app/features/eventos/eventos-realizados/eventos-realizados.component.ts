import { Component, OnInit } from '@angular/core';
import { EventoModel } from '../evento.service';
import { EventoService } from 'src/app/features/eventos/evento.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-eventos-realizados',
  templateUrl: './eventos-realizados.component.html',
  styleUrls: ['./eventos-realizados.component.scss']
})
export class EventosRealizadosComponent implements OnInit {

  eventos: EventoModel[] = [];

  constructor(private eventoService: EventoService, private router: Router) { }

  ngOnInit() {
    this.eventos = this.eventoService.getEventosRealizados();
  }

  verDetalles(id: number) {
    this.router.navigate(['eventos/eventos-realizados', id]);
  }

}

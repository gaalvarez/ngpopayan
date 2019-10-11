import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EventoModel } from '../evento.service';
import { EventoService } from 'src/app/features/eventos/evento.service';

@Component({
  selector: 'app-detalle-evento',
  templateUrl: './detalle-evento.component.html',
  styleUrls: ['./detalle-evento.component.scss']
})
export class DetalleEventoComponent implements OnInit {

  evento: EventoModel;

  constructor(private route: ActivatedRoute, private eventoService: EventoService) { }

  ngOnInit() {
    const id = Number(this.route.snapshot.params.id);
    this.evento = this.eventoService.getEventoRealizadoPorId(id);
  }

}

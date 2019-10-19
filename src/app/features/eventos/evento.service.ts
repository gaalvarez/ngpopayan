import { Injectable } from '@angular/core';

@Injectable()
export class EventoService {

  eventosRealizados: EventoModel[] = [
    {
      id: 1,
      titulo: 'Arquitectura',
      fecha: new Date('5/05/2019 15:00:00'),
      descripcion: 'Se revisarán los conceptos arquitecturales más importantes a la hora de diseñar una aplicación con Angular'
    },
    {
      id: 2,
      titulo: 'RxJs 1',
      fecha: new Date('5/06/2019 15:00:00'),
      descripcion: 'Introducción a la librería de programación reactiva RxJs'
    },
    {
      id: 3,
      titulo: 'Primeros pasos',
      fecha: new Date('5/08/2019 15:00:00'),
      descripcion: 'Sesión práctica donde se revisarán los conceptos de iniciar con angular'
    },
    {
      id: 4,
      titulo: 'Formularios con Angular',
      fecha: new Date('10/10/2019 15:00:00'),
      descripcion: 'Sesión donde se revisan las opciones de trabajar con formularios en las aplicaciones angular'
    },
    {
      id: 5,
      titulo: 'Flex Layout',
      fecha: new Date('12/10/2019 15:00:00'),
      descripcion: 'Aprender a definir la composición de layouts usando flex-layout de angular.'
    }
  ];

  constructor() { }

  getEventosRealizados(): EventoModel[] {
    return this.eventosRealizados;
  }

  getEventoRealizadoPorId(id: number): EventoModel {
    return this.eventosRealizados.find(evento => evento.id === id);
  }

}

export interface EventoModel {
  id: number;
  titulo: string;
  fecha: Date;
  descripcion: string;
  recursos?: {
    video?: string;
    presentacion?: string;
    codigo?: string;
  };
}

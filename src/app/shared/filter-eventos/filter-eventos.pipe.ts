import { Pipe, PipeTransform } from '@angular/core';
import { EventoModel } from 'src/app/features/eventos/evento.service';

@Pipe({
  name: 'filterEventos'
})
export class FilterEventosPipe implements PipeTransform {

  transform(value: EventoModel[], ...args: any[]): EventoModel[] {
    return value.filter(item => item.fecha.getTime() < new Date().getTime() );
  }

}

import { Injectable } from '@angular/core';
import { IntegranteModel } from './registro-integrante/integrante.model';
import { Observable } from 'rxjs';

@Injectable()
export class RegistroIntegranteService {

  integrantes: IntegranteModel[] = [];

  constructor() { }

  guardarIntegrante(integrante: IntegranteModel): Observable<boolean> {
    return new Observable(observer => {
      const index = this.integrantes.findIndex(item => item.correo === integrante.correo);
      if (index !== -1) {
        observer.error(false);
        observer.complete();
      } else {
        this.integrantes.push(integrante);
        observer.next(true);
        observer.complete();
      }
    });
  }

}

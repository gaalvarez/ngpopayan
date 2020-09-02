import { Injectable } from '@angular/core';
import { GrupoNodeModel, EstructuraIngresoModel } from './model';
import { of, Observable } from 'rxjs';

export const datos: EstructuraIngresoModel = {
  funcionesVOList: [
    {
      id: 1,
      codigo: 'CV-01',
      descripcion: 'Core 1',
      marcaTotal: false,
      activo: true,
      idFuncSubGrupoVO: 1,
      idFuncGrupoVO: null,
    },
    {
      id: 2,
      codigo: 'CV-02',
      descripcion: 'Core 2',
      marcaTotal: false,
      activo: true,
      idFuncSubGrupoVO: 2,
      idFuncGrupoVO: null,
    },
    {
      id: 3,
      codigo: 'CV-03',
      descripcion: 'Core 3',
      marcaTotal: false,
      activo: true,
      idFuncSubGrupoVO: 1,
      idFuncGrupoVO: 1,
    },
    {
      id: 4,
      codigo: 'CV-04',
      descripcion: 'Core 4',
      marcaTotal: false,
      activo: true,
      idFuncSubGrupoVO: 2,
      idFuncGrupoVO: 2,
    },
  ],
  funcSubGrupoVOList: [
    {
      id: 1,
      codigo: '1',
      descripcion: 'SubNivel 1',
      marcaTotal: false,
      activo: true,
      idFuncGrupoVO: 1,
    },
    {
      id: 2,
      codigo: '2',
      descripcion: 'SubNivel 2',
      marcaTotal: false,
      activo: true,
      idFuncGrupoVO: 2,
    },
  ],
  funcGrupoVOList: [
    {
      id: 1,
      codigo: '1',
      descripcion: 'Nivel 1',
      marcaTotal: false,
      activo: true,
    },
    {
      id: 2,
      codigo: '2',
      descripcion: 'Nivel 2',
      marcaTotal: false,
      activo: true,
    },
  ],
};

@Injectable({
  providedIn: 'root',
})
export class EstructuraService {
  constructor() {}

  crearEstructura(estructura) {
    const estructuraOrganizada: GrupoNodeModel[] = [];

    estructura.funcionesVOList.forEach((funcion) => {
      if (funcion.idFuncSubGrupoVO === null) {
        estructura.funcSubGrupoVOList.push({ ...funcion, sinSubGrupo: true });
      }
    });

    estructura.funcGrupoVOList.forEach((grupo) => {
      const subg = estructura.funcSubGrupoVOList.filter(
        (subgr) => subgr.idFuncGrupoVO === grupo.id,
      );
      const subgru: GrupoNodeModel[] = [];
      subg.forEach((subgrupo) => {
        const fun = estructura.funcionesVOList.filter(
          (funcio) => funcio.idFuncSubGrupoVO === subgrupo.id,
        );
        const funci: GrupoNodeModel[] = [];
        fun.forEach((funcion) => {
          funci.push({
            id: funcion.id,
            nombre: funcion.descripcion,
            checked: funcion.marcaTotal,
            permisos: [
              { id: 1, nombre: 'Consultar', checked: false },
              { id: 2, nombre: 'Editar', checked: false },
              { id: 3, nombre: 'Imprimir', checked: false },
              { id: 4, nombre: 'Firmar', checked: false },
            ],
          });
        });
        if (subgrupo.sinSubGrupo === true) {
          subgru.push({
            id: subgrupo.id,
            sinSubGrupo: true,
            nombre: subgrupo.descripcion,
            checked: subgrupo.marcaTotal,
            permisos: [
              { id: 1, nombre: 'Consultar', checked: false },
              { id: 2, nombre: 'Editar', checked: false },
              { id: 3, nombre: 'Imprimir', checked: false },
              { id: 4, nombre: 'Firmar', checked: false },
            ],
          });
        } else {
          subgru.push({
            id: subgrupo.id,
            nombre: subgrupo.descripcion,
            checked: subgrupo.marcaTotal,
            subGrupo: funci,
          });
        }
      });
      estructuraOrganizada.push({
        id: grupo.id,
        nombre: grupo.descripcion,
        checked: grupo.marcaTotal,
        subGrupo: subgru,
      });
    });
    return estructuraOrganizada;
  }

  obtenerEstructura(): Observable<EstructuraIngresoModel> {
    return of(datos);
  }
}

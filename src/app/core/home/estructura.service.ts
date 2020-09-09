import { Injectable } from '@angular/core';
import { GrupoNodeModel, EstructuraIngresoModel, FuncionIngresoModel } from './model';
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
  private permisosPorDefecto = [
    { id: 1, nombre: 'Consultar', checked: false },
    { id: 2, nombre: 'Editar', checked: false },
    { id: 3, nombre: 'Imprimir', checked: false },
    { id: 4, nombre: 'Firmar', checked: false },
  ];

  constructor() {}

  crearEstructura(estructura: EstructuraIngresoModel) {
    estructura.funcionesVOList.forEach((funcion) => {
      if (funcion.idFuncSubGrupoVO === null) {
        estructura.funcSubGrupoVOList.push({ ...funcion, sinSubGrupo: true });
      }
    });
    const estructuraOrganizada: GrupoNodeModel[] = estructura.funcGrupoVOList.map((grupo) =>
      this.mapearGrupo(estructura, grupo),
    );
    return estructuraOrganizada;
  }

  private mapearGrupo(estructura, grupo) {
    const subgruposOrganizados: GrupoNodeModel[] = estructura.funcSubGrupoVOList
      .filter((subgr) => subgr.idFuncGrupoVO === grupo.id)
      .map((subgrupo) => this.mapearSubgrupo(estructura, subgrupo));
    return this.crearGrupo(grupo, subgruposOrganizados);
  }

  private mapearSubgrupo(estructura, subgrupo) {
    const funcionesOrganizadas: GrupoNodeModel[] = estructura.funcionesVOList
      .filter((funcio) => funcio.idFuncSubGrupoVO === subgrupo.id)
      .map((funcion) => {
        return this.crearFuncionMapeada(funcion);
      });
    return this.crearSubGrupo(subgrupo, funcionesOrganizadas);
  }

  private crearFuncionMapeada(funcion: FuncionIngresoModel): GrupoNodeModel {
    return {
      id: funcion.id,
      nombre: funcion.descripcion,
      checked: funcion.marcaTotal,
      permisos: this.permisosPorDefecto,
    };
  }

  private crearSubGrupo(subgrupo, funcionesOrganizadas) {
    if (subgrupo.sinSubGrupo === true) {
      return {
        id: subgrupo.id,
        sinSubGrupo: true,
        nombre: subgrupo.descripcion,
        checked: subgrupo.marcaTotal,
        permisos: this.permisosPorDefecto,
      };
    } else {
      return {
        id: subgrupo.id,
        nombre: subgrupo.descripcion,
        checked: subgrupo.marcaTotal,
        subGrupo: funcionesOrganizadas,
      };
    }
  }

  private crearGrupo(grupo, subgruposOrganizados) {
    return {
      id: grupo.id,
      nombre: grupo.descripcion,
      checked: grupo.marcaTotal,
      subGrupo: subgruposOrganizados,
    };
  }

  obtenerEstructura(): Observable<EstructuraIngresoModel> {
    return of(datos);
  }
}

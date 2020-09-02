import { TestBed } from '@angular/core/testing';

import { EstructuraService } from './estructura.service';
import { EstructuraIngresoModel, GrupoNodeModel } from './model';

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
      descripcion: 'Core 5',
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

export const estructuraFinal: GrupoNodeModel[] = [
  {
    id: 1,
    nombre: 'Nivel 1',
    checked: false,
    subGrupo: [
      {
        id: 1,
        nombre: 'SubNivel 1',
        checked: false,
        subGrupo: [
          {
            id: 1,
            nombre: 'Core 1',
            checked: false,
            permisos: [
              {
                id: 1,
                nombre: 'Consultar',
                checked: false,
              },
              {
                id: 2,
                nombre: 'Editar',
                checked: false,
              },
              {
                id: 3,
                nombre: 'Imprimir',
                checked: false,
              },
              {
                id: 4,
                nombre: 'Firmar',
                checked: false,
              },
            ],
          },
          {
            id: 3,
            nombre: 'Core 3',
            checked: false,
            permisos: [
              {
                id: 1,
                nombre: 'Consultar',
                checked: false,
              },
              {
                id: 2,
                nombre: 'Editar',
                checked: false,
              },
              {
                id: 3,
                nombre: 'Imprimir',
                checked: false,
              },
              {
                id: 4,
                nombre: 'Firmar',
                checked: false,
              },
            ],
          },
        ],
      },
    ],
  },
  {
    id: 2,
    nombre: 'Nivel 2',
    checked: false,
    subGrupo: [
      {
        id: 2,
        nombre: 'SubNivel 2',
        checked: false,
        subGrupo: [
          {
            id: 2,
            nombre: 'Core 2',
            checked: false,
            permisos: [
              {
                id: 1,
                nombre: 'Consultar',
                checked: false,
              },
              {
                id: 2,
                nombre: 'Editar',
                checked: false,
              },
              {
                id: 3,
                nombre: 'Imprimir',
                checked: false,
              },
              {
                id: 4,
                nombre: 'Firmar',
                checked: false,
              },
            ],
          },
          {
            id: 4,
            nombre: 'Core 5',
            checked: false,
            permisos: [
              {
                id: 1,
                nombre: 'Consultar',
                checked: false,
              },
              {
                id: 2,
                nombre: 'Editar',
                checked: false,
              },
              {
                id: 3,
                nombre: 'Imprimir',
                checked: false,
              },
              {
                id: 4,
                nombre: 'Firmar',
                checked: false,
              },
            ],
          },
        ],
      },
    ],
  },
];

describe('EstructuraService', () => {
  let service: EstructuraService;
  beforeEach(() => {
    service = new EstructuraService();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('estructura mapeo', () => {
    const estructura = service.crearEstructura(datos);
    expect(estructura).toEqual(estructuraFinal);
  });
});

/* poner aquí todas las interfaces del módulo */
export interface UsuarioModel {
  idUsuario?: string;
  datosPersonales: DatosPersonalesModel;
  datosAcceso: DatosAccesoModel;
}
export interface DatosPersonalesModel {
  idTipoIdentificacion: number;
  identificacion: string;
  nombre1: string;
  nombre2: string;
  apellido1: string;
  apellido2: string;
  email: string;
  celular: number;
  idCargo: number;
  unidadesMedicas: number[];
  idGenero: number;
  idPersona?: number;
  puedeFirmar?: boolean;
}

export interface DatosAccesoModel {
  nombreUsuario: string;
  idRol: number;
  usuarioActivo: boolean;
  solicitarSegundoFactor: boolean;
  usuarioBloqueado: boolean;
  solicitarFirma: boolean;
  idUsuario?: number;
}

export interface RolesModel {
  datosAcceso: DatosAccesoRolModel;
  datosRol: GrupoNodeModel[];
}

export interface DatosAccesoRolModel {
  idRol?: number;
  rolActivo: boolean;
  codigo: string;
  descripcion: string;
  tipoProfecional: TipoProfecionalModel;
}

export interface GrupoNodeModel {
  id: number;
  nombre: string;
  idFunc?: number;
  sinSubGrupo?: boolean;
  checked?: boolean;
  idGrupo?: number;
  subGrupo?: GrupoNodeModel[];
  permisos?: PermisoFuncionModel[];
}

export interface PermisoFuncionModel {
  id: number;
  nombre: string;
  checked: boolean;
}

export interface UnidadSaludModel {
  id: number;
  nombre: string;
}
export interface TipoProfecionalModel {
  id: number;
  codigo: number;
  descripcion: string;
  auxiliar?: string;
}
export interface EstructuraIngresoModel {
  funcGrupoVOList: FuncionIngresoModel[];
  funcSubGrupoVOList: FuncionIngresoModel[];
  funcionesVOList: FuncionIngresoModel[];
}
export interface FuncionIngresoModel {
  sinSubGrupo?: boolean;
  activo: boolean;
  codigo: string;
  descripcion: string;
  id: number;
  marcaTotal: boolean;
  idFuncGrupoVO?: number;
  idFuncSubGrupoVO?: number;
}
export interface FuncionEnvioModel {
  id?: number;
  idCabRoles: number;
  consultar: boolean;
  editar: boolean;
  imprimir: boolean;
  firmar: boolean;
  idFunciones: number;
}
export interface ResDatosAccesoModel {
  activoDatosGenerales: boolean;
  codigoDatosGenerales: string;
  descripcionDatosGenerales: string;
  idDatosGenerales: number;
  idTiposProfesional: number;
}

export interface ResRolesBuscadorModel {
  idDatosGenerales: number;
  idTiposProfesional: number;
  codigoDatosGenerales: string;
  descripcionDatosGenerales: string;
  activoDatosGenerales: boolean;
}

export interface ResRolSeleccionModel {
  id: number;
  consultar: boolean;
  editar: boolean;
  imprimir: boolean;
  firmar: boolean;
  idFunciones: number;
  idCabRoles: number;
  funcionesVO: {
    id: number;
    codigo: string;
    descripcion: string;
    marcaTotal: boolean;
    activo: boolean;
    idFuncGrupoVO: number;
    idFuncSubGrupoVO: number;
    url: string;
  };
}
export interface RolEdicionModel {
  cabecera: any;
  funciones?: FuncionEnvioModel[];
  funcionesEliminadas?: number[];
}

export interface CargosModel {
  id: number;
  codigo: string;
  descripcion: string;
}
export interface UnidadesDeSaludModel {
  idLstIps: number;
  codIdentificacion: string;
  idTipoUnidad: number;
  nombreInstitucion: string;
  idTipoIdentificacion: number;
  identificacion: string;
  idDatoDomicilio: number;
  fechaCreacionRegistro: string;
}

export interface CatalogosCrearUsuarioModel {
  id: number;
  codigo: string;
  descripcion: string;
  auxiliar: string;
}
export interface ResValidacionCorreoModel {
  idPersona: number;
  correo: string;
  nombreUsuario: string;
}

export interface ResValidacionNombreUsuarioModel {
  idPersona: number;
  correo: string;
  nombreUsuario: string;
}
export interface ResRestablecerContrasenaFirmar {
  registrosEliminados: number;
}

export interface CredencialFirmaModel {
  credencial: string;
  idUsuario: string;
}

export const datos = {
  funcionesVOList: [
    {
      id: 1,
      codigo: 'CV-01',
      descripcion: 'Funcion 1',
      marcaTotal: false,
      activo: true,
      idFuncSubGrupoVO: 1,
      url: 'url',
      idFuncGrupoVO: null,
    },
    {
      id: 2,
      codigo: 'CV-02',
      descripcion: 'Funcion 2',
      marcaTotal: false,
      activo: true,
      idFuncSubGrupoVO: 2,
      url: 'url',
      idFuncGrupoVO: null,
    },
    {
      id: 3,
      codigo: 'CV-03',
      descripcion: 'Funcion 3',
      marcaTotal: false,
      activo: true,
      idFuncSubGrupoVO: 1,
      url: 'auth/crear-rol',
      idFuncGrupoVO: 1,
    },
    {
      id: 4,
      codigo: 'CV-04',
      descripcion: 'Funcion 4',
      marcaTotal: false,
      activo: true,
      idFuncSubGrupoVO: 2,
      url: 'url',
      idFuncGrupoVO: 2,
    },
  ],
  funcSubGrupoVOList: [
    {
      id: 1,
      codigo: '1',
      descripcion: 'Sub 1',
      marcaTotal: false,
      activo: true,
      idFuncGrupoVO: 1,
    },
    {
      id: 2,
      codigo: '2',
      descripcion: 'Sub 2',
      marcaTotal: false,
      activo: true,
      idFuncGrupoVO: 2,
    },
  ],
  funcGrupoVOList: [
    {
      id: 1,
      codigo: '1',
      descripcion: 'Grupo 1',
      marcaTotal: false,
      activo: true,
    },
    {
      id: 2,
      codigo: '2',
      descripcion: 'Grupo 2',
      marcaTotal: false,
      activo: true,
    },
  ],
};

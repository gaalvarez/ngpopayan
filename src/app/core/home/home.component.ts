import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MenuService, MenuItem } from 'src/app/core/layout/menu.service';
import { EstructuraIngresoModel, GrupoNodeModel } from './model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  opciones: MenuItem[] = [];

  constructor(private router: Router, private ms: MenuService) {}

  ngOnInit() {
    this.opciones = this.ms.getItemsMenu().filter((item) => item.descripcion);
  }

  navegar(ruta: string) {
    this.router.navigate([ruta]);
  }

  organizarEstructura(estructura: EstructuraIngresoModel) {
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
}

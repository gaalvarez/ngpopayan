import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MenuService {

  itemsMenu: MenuItem[] = [
    {
      titulo: 'Inicio', ruta: '/home'
    },
    {
      icono: 'group_work',
      titulo: 'Unirse',
      ruta: '/registro/registro-integrante',
      descripcion: 'Registrate como integrante de la comunidad NgPopayán.'
    },
    {
      icono: 'history',
      titulo: 'Eventos realizados',
      ruta: '/eventos/eventos-realizados',
      descripcion: 'Revisa todos los recursos disponibles de cada encuentro.'
    },
    {
      icono: 'calendar_today',
      titulo: 'Próximos eventos',
      ruta: '/eventos/proximos-eventos',
      descripcion: 'Revisa los eventos que están por realizarse e inscribite para partircipar.'
    }
  ];

  constructor() { }

  getItemsMenu(): MenuItem[] {
    return this.itemsMenu;
  }
}

export interface MenuItem {
  icono?: string;
  titulo: string;
  descripcion?: string;
  ruta?: string;
}

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
      icono: 'group_work', titulo: 'Unirse', ruta: '/registro/registro-integrante'
    },
    {
      icono: 'history', titulo: 'Eventos realizados', ruta: '/eventos/eventos-realizados'
    },
    {
      icono: 'calendar_today', titulo: 'Próximos eventos', ruta: '/eventos/proximos-eventos'
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
  ruta?: string;
}

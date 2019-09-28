import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MenuService {

  itemsMenu: MenuItem[] = [
    {
      icono: 'group_work', titulo: 'Unirse', ruta: '/'
    },
    {
      icono: 'history', titulo: 'Eventos realizados', ruta: '/'
    },
    {
      icono: 'calendar_today', titulo: 'Próximos eventos', ruta: '/'
    }
  ];

  constructor() { }

  getItemsMenu(): MenuItem[] {
    return this.itemsMenu;
  }
}

export interface MenuItem {
  icono: string;
  titulo: string;
  ruta?: string;
}

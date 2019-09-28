import { Component, OnInit } from '@angular/core';
import { MenuService } from '../menu.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  titulo = '@ngPopayan';

  eventos = [
    { titulo: 'Arquitectura', fecha: new Date('5/05/2019 15:00:00') },
    { titulo: 'RxJs 1', fecha: new Date('5/06/2019 15:00:00') },
    { titulo: 'RxJs 2', fecha: new Date('5/07/2019 15:00:00') },
    { titulo: 'Primeros pasos', fecha: new Date('5/08/2019 15:00:00') },
    { titulo: 'Formularios con Angular', fecha: new Date('10/10/2019 15:00:00') }
  ];

  menuItems = [];

  constructor(public menuService: MenuService) {
    this.menuItems = this.menuService.getItemsMenu();
  }

  ngOnInit() {
  }

  esFechaPasada(fecha: Date): boolean {
    const actual = new Date();
    return actual.getTime() > fecha.getTime();
  }

  onClickVer(evento) {
    window.alert(evento.titulo);
  }

  cambiarVisibilidad() {
    window.alert('Click botón en toolbar');
  }
}

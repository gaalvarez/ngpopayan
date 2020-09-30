import { map } from 'rxjs/internal/operators';
import { Breakpoints, BreakpointObserver } from '@angular/cdk/layout';
import { Component, OnInit } from '@angular/core';
import { MenuService, MenuItem } from '../menu.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {
  titulo = 'NgPopayan Live 30 sep';
  isHandset$: Observable<boolean> = this.breakpointObserver
    .observe(Breakpoints.Handset)
    .pipe(map((result) => result.matches));

  eventos = [
    { titulo: 'Arquitectura', fecha: new Date('5/05/2019 15:00:00') },
    { titulo: 'RxJs 1', fecha: new Date('5/06/2019 15:00:00') },
    { titulo: 'Primeros pasos', fecha: new Date('5/08/2019 15:00:00') },
    { titulo: 'Formularios con Angular', fecha: new Date('10/10/2019 15:00:00') },
  ];

  menuItems: MenuItem[] = [];
  isOpenSidenav = true;

  constructor(public menuService: MenuService, private breakpointObserver: BreakpointObserver) {
    this.menuItems = this.menuService.getItemsMenu();
  }

  ngOnInit() {
    this.isHandset$.subscribe((result) => {
      this.isOpenSidenav = !result;
    });
  }

  esFechaPasada(fecha: Date): boolean {
    const actual = new Date();
    return actual.getTime() > fecha.getTime();
  }

  onClickVer(evento) {
    window.alert(evento.titulo);
  }

  cambiarVisibilidad() {
    this.isOpenSidenav = !this.isOpenSidenav;
  }
}

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MenuService, MenuItem } from 'src/app/core/layout/menu.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  opciones: MenuItem[] = [];

  constructor(private router: Router, private ms: MenuService) { }

  ngOnInit() {
    this.opciones = this.ms.getItemsMenu().filter(item => item.descripcion);
  }

  navegar(ruta: string) {
    this.router.navigate([ruta]);
  }
}

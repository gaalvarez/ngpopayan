import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MenuService, MenuItem } from 'src/app/core/layout/menu.service';
import { EstructuraService } from './estructura.service';
import { take } from 'rxjs/internal/operators';
import { GrupoNodeModel } from './model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  opciones: MenuItem[] = [];
  datos: GrupoNodeModel[] = [];

  constructor(
    private router: Router,
    private ms: MenuService,
    private estructuraService: EstructuraService,
  ) {}

  ngOnInit() {
    this.opciones = this.ms.getItemsMenu().filter((item) => item.descripcion);
    this.estructuraService
      .obtenerEstructura()
      .pipe(take(1))
      .subscribe((datos) => (this.datos = this.estructuraService.crearEstructura(datos)));
  }

  navegar(ruta: string) {
    this.router.navigate([ruta]);
  }
}

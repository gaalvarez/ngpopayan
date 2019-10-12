import { Component, OnInit } from '@angular/core';
import { IntegranteModel } from './integrante.model';

@Component({
  selector: 'app-registro-integrante',
  templateUrl: './registro-integrante.component.html',
  styleUrls: ['./registro-integrante.component.scss']
})
export class RegistroIntegranteComponent implements OnInit {

  integrante: IntegranteModel = {
    nombres: '',
    apellidos: '',
    correo: '',
    numeroCelular: '',
    empresaInstitucion: '',
    genero: '',
  };

  constructor() { }

  ngOnInit() {
  }

}

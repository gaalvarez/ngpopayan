import { Component, OnInit, ViewChildren, ViewChild } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { IntegranteModel } from './integrante.model';
import { RegistroIntegranteService } from '../registro-integrante.service';
import { ConfigNotificacion, NotificacionComponent } from 'src/app/shared/notificacion/notificacion.component';

@Component({
  selector: 'app-registro-integrante',
  templateUrl: './registro-integrante.component.html',
  styleUrls: ['./registro-integrante.component.scss']
})
export class RegistroIntegranteComponent implements OnInit {

  @ViewChild('noti', { static: false }) noti: NotificacionComponent;

  registroForm: FormGroup = this.fb.group({
    nombres: ['', Validators.required],
    apellidos: ['', Validators.required],
    correo: ['', [Validators.required, Validators.email]],
    celular: [''],
    empresa: [''],
    genero: ['']
  });

  configuracion: ConfigNotificacion = {
    duracion: 5000,
    mensaje: '',
    abrirAutomatico: false
  };

  constructor(private fb: FormBuilder, private sri: RegistroIntegranteService) { }

  ngOnInit() {

  }

  registrarIntegrante() {
    const integrante = this.registroForm.value as IntegranteModel;
    this.sri.guardarIntegrante(integrante).subscribe(result => {
      if (result) {
        this.noti.abrirNotificacionMsj('Usuario creado exitosamente');

        this.registroForm.reset();
      }
    });


  }

}

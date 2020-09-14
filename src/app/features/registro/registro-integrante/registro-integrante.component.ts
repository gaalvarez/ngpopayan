import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormGroupDirective } from '@angular/forms';
import { IntegranteModel } from './integrante.model';
import { RegistroIntegranteService } from '../registro-integrante.service';
import {
  ConfigNotificacion,
  NotificacionComponent,
} from 'src/app/shared/notificacion/notificacion.component';
import { validadorNumerico } from '../../../core/common.validators';
import { delay, tap } from 'rxjs/internal/operators';

@Component({
  selector: 'app-registro-integrante',
  templateUrl: './registro-integrante.component.html',
  styleUrls: ['./registro-integrante.component.scss'],
})
export class RegistroIntegranteComponent implements OnInit {
  @ViewChild('noti', { static: false }) noti: NotificacionComponent;

  @ViewChild(FormGroupDirective, { static: true }) formGroupDirective: FormGroupDirective;

  enProceso = false;

  registroForm: FormGroup = this.fb.group({
    nombres: ['', Validators.required],
    apellidos: ['', Validators.required],
    correo: ['', [Validators.required, Validators.email]],
    celular: ['', [validadorNumerico]],
    empresa: [''],
    genero: [''],
  });

  mensajesDeValidacion = {
    email: [
      { type: 'required', message: 'El campo correo es requerido' },
      { type: 'email', message: 'Ingrese un formato correcto de correo' },
    ],
  };

  configuracion: ConfigNotificacion = {
    duracion: 5000,
    mensaje: '',
    abrirAutomatico: false,
  };

  constructor(private fb: FormBuilder, private sri: RegistroIntegranteService) {}

  ngOnInit() {}

  registrarIntegrante() {
    const integrante = this.registroForm.value as IntegranteModel;
    this.enProceso = true;
    this.sri
      .guardarIntegrante(integrante)
      .pipe(
        delay(3000),
        tap(() => (this.enProceso = false)),
      )
      .subscribe(
        (result) => {
          if (result) {
            this.noti.abrirNotificacionMsj('Usuario creado exitosamente');
            this.formGroupDirective.resetForm();
          }
        },
        (error) => {
          this.noti.abrirNotificacionMsj('Error creado usuario');
        },
      );
  }
}

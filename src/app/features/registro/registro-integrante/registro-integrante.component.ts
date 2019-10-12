import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-registro-integrante',
  templateUrl: './registro-integrante.component.html',
  styleUrls: ['./registro-integrante.component.scss']
})
export class RegistroIntegranteComponent implements OnInit {

  registroForm = this.fb.group({
    nombres: ['', Validators.required],
    apellidos: ['', Validators.required],
    correo: ['', [Validators.required, Validators.email]],
    celular: ['', Validators.minLength(10)],
    genero: ['']
  });

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
  }

}

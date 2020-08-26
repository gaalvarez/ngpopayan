import { Component, OnInit } from '@angular/core';
import { EventoModel } from '../evento.service';
import { EventoService } from 'src/app/features/eventos/evento.service';
import { Router } from '@angular/router';
import { FormBuilder } from '@angular/forms';
import { BehaviorSubject, Observable } from 'rxjs';
import { MoviesService } from './movies.service';
import { debounceTime } from 'rxjs/internal/operators';

@Component({
  selector: 'app-eventos-realizados',
  templateUrl: './eventos-realizados.component.html',
  styleUrls: ['./eventos-realizados.component.scss'],
})
export class EventosRealizadosComponent implements OnInit {
  eventos: EventoModel[] = [];
  busquedaForm = this.fb.group({
    cadenaBusqueda: '',
  });
  movies$: Observable<{ Title: string; imdbID: string }[]>;

  constructor(
    private eventoService: EventoService,
    private router: Router,
    private fb: FormBuilder,
    private moviesService: MoviesService,
  ) {}

  ngOnInit() {
    this.eventos = this.eventoService.getEventosRealizados();
    this.busquedaForm.controls.cadenaBusqueda.valueChanges
      .pipe(debounceTime(1000))
      .subscribe((value) => (this.movies$ = this.moviesService.getMovies(value)));
  }

  verDetalles(id: number) {
    this.router.navigate(['eventos/eventos-realizados', id]);
  }
}

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/internal/operators';

@Injectable({
  providedIn: 'root',
})
export class MoviesService {
  constructor(private http: HttpClient) {}

  getMovies(busqueda: string): Observable<{ Title: string; imdbID: string }[]> {
    return this.http
      .get<any>(`http://www.omdbapi.com/?apikey=5cc974a1&s=${busqueda}`)
      .pipe(map((data) => data.Search as { Title: string; imdbID: string }[]));
  }
}

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { BookSearch } from './book-search.model';

@Injectable({
  providedIn: 'root',
})
export class BookSearchService {
  urlBooksGoogle =
    'https://www.googleapis.com/books/v1/volumes?key=AIzaSyAsyOw1-4s_m2zhV1c8qsIHhxamn1hokNU&q=';

  constructor(private http: HttpClient) {}

  buscarLibros(busqueda: string): Observable<BookSearch> {
    return this.http.get<BookSearch>(`${this.urlBooksGoogle}${busqueda}`);
  }
}

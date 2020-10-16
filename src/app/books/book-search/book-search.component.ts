import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Observable } from 'rxjs';
import {
  debounceTime,
  map,
  partition,
  reduce,
  switchMap,
  tap,
  toArray,
} from 'rxjs/internal/operators';
import { BookItem, BookSearch, BookView } from './book-search.model';
import { BookSearchService } from './book-search.service';

@Component({
  selector: 'app-book-search',
  templateUrl: './book-search.component.html',
  styleUrls: ['./book-search.component.scss'],
})
export class BookSearchComponent implements OnInit {
  books$: Observable<BookView[]>;
  totalAutores$: Observable<number>;
  formSearch = this.fb.group({
    search: [''],
  });

  constructor(private bookSearchService: BookSearchService, private fb: FormBuilder) {}

  ngOnInit() {
    this.books$ = this.formSearch.controls.search.valueChanges.pipe(
      debounceTime(500),
      switchMap((texto) =>
        this.bookSearchService.buscarLibros(texto).pipe(
          switchMap((datos) => datos.items),
          map((item) => this.buildBookView(item)),
          toArray(),
        ),
      ),
    );
    this.books$.subscribe((datos) => this.contarAutores());
  }

  private contarAutores() {
    this.totalAutores$ = this.books$.pipe(
      switchMap((datos) => datos),
      reduce((acumulador: number, book: BookView) => {
        acumulador = acumulador + book.authors.length;
        return acumulador;
      }, 0),
      tap((dato) => console.log(dato)),
    );
  }

  buildBookView(bookitem: BookItem): BookView {
    return {
      id: bookitem.id,
      title: bookitem.volumeInfo.title,
      subtitle: bookitem.volumeInfo.subtitle,
      authors: bookitem.volumeInfo.authors,
      description: bookitem.volumeInfo.description,
      pageCount: bookitem.volumeInfo.pageCount,
      urlImagen: bookitem.volumeInfo.imageLinks.thumbnail,
    };
  }
}

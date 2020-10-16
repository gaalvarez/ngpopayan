import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { map, switchMap, toArray } from 'rxjs/internal/operators';
import { BookItem, BookSearch, BookView } from './book-search.model';
import { BookSearchService } from './book-search.service';

@Component({
  selector: 'app-book-search',
  templateUrl: './book-search.component.html',
  styleUrls: ['./book-search.component.scss'],
})
export class BookSearchComponent implements OnInit {
  books$: Observable<BookView[]>;

  constructor(private bookSearchService: BookSearchService) {}

  ngOnInit() {
    this.books$ = this.bookSearchService.buscarLibros('rxjs').pipe(
      switchMap((datos) => datos.items),
      map((item) => this.buildBookView(item)),
      toArray(),
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

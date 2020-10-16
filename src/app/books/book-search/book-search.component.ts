import { Component, OnInit } from '@angular/core';
import { BookSearch, BookView } from './book-search.model';
import { BookSearchService } from './book-search.service';

@Component({
  selector: 'app-book-search',
  templateUrl: './book-search.component.html',
  styleUrls: ['./book-search.component.scss'],
})
export class BookSearchComponent implements OnInit {
  books: BookView[] = [];

  constructor(private bookSearchService: BookSearchService) {}

  ngOnInit() {}
}

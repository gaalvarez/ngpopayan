import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BooksRoutingModule } from './books-routing.module';
import { BookSearchComponent } from './book-search/book-search.component';
import { MatCardModule, MatIconModule } from '@angular/material';

@NgModule({
  declarations: [BookSearchComponent],
  imports: [CommonModule, BooksRoutingModule, MatCardModule, MatIconModule],
})
export class BooksModule {}

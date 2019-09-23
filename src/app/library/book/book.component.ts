import { Component, Input, OnInit, Output } from '@angular/core';

import { UsersService } from 'src/app/shared/services/users.service';

import { Book } from '../../shared/models/book.model';
import { Library } from '../../shared/models/library.model';

import { BooksComponent } from '../books/books.component';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css'],
  providers: [BooksComponent]
})
export class BookComponent implements OnInit {
  constructor(
    private userService: UsersService,
    private booksComponent: BooksComponent
  ) { }
  @Input()
  book: Book;
  @Input()
  isAuthentication: boolean;
  @Input()
  oldLibrary: Library;
  books = [];
  bookArray = [];
  user = JSON.parse(window.localStorage.getItem('user'));

  ngOnInit(): void {
  }

  addToLibrary(book: Book) {
    const newLibrary: Library = {
      id: this.user.id,
      books: [{ book }]
    };
    if (this.oldLibrary) {
      if (this.oldLibrary.books.length > 9) {
      } else {
        const books = [...this.oldLibrary.books];
        if (books.length === 0) {
          this.addBook(book);
        } else {
          for (const oldBook of books) {
            const oldBookId = oldBook.book.id;
            if (oldBookId === book.id) {
              this.bookArray.push(oldBook);
            }
          }
          if (this.bookArray.length === 0) {
            this.addBook(book);
          }
        }
      }
    } else {
      this.userService.createNewLibrary(newLibrary).subscribe((response: Library) => {
        this.oldLibrary = response;
        return this.oldLibrary;
      });
    }
  }

  addBook(book: Book) {
    this.oldLibrary.books.push({ book });
    this.oldLibrary.books.splice(9);
    this.userService.updateBookList(this.oldLibrary, this.user.id).subscribe((response: Library) => {
      this.oldLibrary = undefined;
      this.oldLibrary = response;
      return this.oldLibrary;
    });
  }
}

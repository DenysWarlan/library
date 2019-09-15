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
export class BookComponent  implements OnInit {
  constructor(
    private userService: UsersService
  ) { }
  @Input()
  book: Book;
  @Input()
  isAuthentication: boolean;
  oldLibrary: Library | undefined;
  books: Book[];
  bookArray = [];
  user = JSON.parse(window.localStorage.getItem('user'));
  ngOnInit(): void {
    if (this.isAuthentication) {
      this.getLibrary();
    }
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
      return this.userService.createNewLibrary(newLibrary).subscribe((data) => data);
    }
  }

  addBook(book: Book) {
    this.oldLibrary.books.push({ book });
    this.oldLibrary.books.splice(9);
    return this.userService.updateBookList(this.oldLibrary, this.user.id).subscribe((data) => data);
  }

  getLibrary() {
    this.userService.getLibrary(this.user.id).subscribe((response: Library) => {
      this.oldLibrary = response;
      return this.oldLibrary ;
    });
  }
}

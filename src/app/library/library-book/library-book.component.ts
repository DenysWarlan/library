import { Component, OnInit, Input } from '@angular/core';

import { UsersService } from 'src/app/shared/services/users.service';

import { Book } from '../../shared/models/book.model';
import { Library } from '../../shared/models/library.model';
import { Message } from '../../shared/models/message.model';

import { BooksComponent } from '../books/books.component';
import { UserLibraryComponent } from './../../user/user-library/user-library.component';

@Component({
  selector: 'app-library-book',
  templateUrl: './library-book.component.html',
  styleUrls: ['./library-book.component.less'],
  providers: [BooksComponent]
})
export class LibraryBookComponent implements OnInit {
  @Input()
  book: Book;
  oldLibrary: Library | undefined;
  user = JSON.parse(window.localStorage.getItem('user'));
  constructor(
    private userService: UsersService,
    private booksComponent: BooksComponent,
    private userLibraryComponent: UserLibraryComponent
  ) { }

  ngOnInit() {
    this.checkUserLibrary();
  }

  removeToLibrary(book: Book) {
    const oldUserLibrary = this.oldLibrary;
    const books = oldUserLibrary.books;
    const bookId = book.id;
    for (const haveBook of books) {
      const index: number = books.indexOf(haveBook);
      if (bookId === haveBook.book.id) {
        books.splice(index, 1);
      }
    }
    return this.userService.updateBookList(this.oldLibrary, this.user.id)
      .subscribe(() => {
        this.userLibraryComponent.books = [];
        const items = this.oldLibrary.books;
        for (const item of items) {
          this.userLibraryComponent.books.push(item.book);
        }
        return this.userLibraryComponent.books;
      });
  }

  checkUserLibrary() {
    this.userService.getLibrary(this.user.id).subscribe((response: Library) => {
      this.oldLibrary = undefined;
      this.oldLibrary = response;
      return this.oldLibrary;
    });
  }
}

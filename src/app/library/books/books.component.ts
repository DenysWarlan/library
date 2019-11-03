import { Component, OnInit, Input } from '@angular/core';
import { BooksService } from '../../shared/services/books.service';
import { Book } from '../../shared/models/book.model';

import { UsersService } from 'src/app/shared/services/users.service';

import { Library } from '../../shared/models/library.model';
import { Message } from '../../shared/models/message.model';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})

export class BooksComponent implements OnInit {
  @Input()
  isAuthentication: boolean;
  @Input()
  book: Book;
  constructor(
  private booksService: BooksService,
  private userService: UsersService) { }
  componentData = null;
  books = new Set();
  oldLibrary;
  bookArray = [];
  isShowAlert = false;
  isList = false;
  message: Message;
  user = JSON.parse(window.localStorage.getItem('user'));
  slideConfig = {
    'slidesToShow': 3,
    'slidesToScroll': 1,
    'responsive': [
      {
        'breakpoint': 1024,
        'settings': {
          'slidesToShow': 2
        }
      },
      {
        'breakpoint': 767,
        'settings': {
          'slidesToShow': 1
        }
      }
    ]
  };

  ngOnInit() {
    this.getLibrary();
  }

  updateBookList(query: string) {
    this.showBooks(query);
  }

  showBooks(query) {
    this.books.clear();
    this.booksService.getBooks(query)
      .subscribe((response) => {
        const items = response['items'];
        for (const item of items) {
          const book: Book = {
            id: '',
            title: '',
            description: '',
            images: '',
            link: '',
            authors: [],
            categories: [],
            publishedDate: ''
          };
          book.id = item.id;
          book.title = item.volumeInfo.title;
          book.authors = item.volumeInfo.authors;
          book.images = item.volumeInfo.imageLinks.smallThumbnail;
          book.description = item.volumeInfo.description;
          book.categories = item.volumeInfo.categories;
          book.publishedDate = item.volumeInfo.publishedDate;
          book.link = item.accessInfo.webReaderLink;
          this.books.add(book);
        }
        return this.books;
      });
  }

  getLibrary() {
    if (this.isAuthentication) {
      this.userService.getLibrary(this.user.id).subscribe((response: Library) => {
        this.oldLibrary = undefined;
        this.oldLibrary = response;
        return response;
      });
    }
  }

  showMessage(message: Message) {
    this.message = message;
    this.isShowAlert = true;
    window.setTimeout(() => {
      this.message.text = '';
      this.isShowAlert = false;
    }, 5000);
  }

  changeToList() {
    this.isList = true;
  }

  changeToGallery() {
    this.isList = false;
  }

}

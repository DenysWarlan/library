import { Component, OnInit, Input } from '@angular/core';
import { BooksService } from '../../shared/services/books.service';
import { Book } from '../../shared/models/book.model';

import { UsersService } from 'src/app/shared/services/users.service';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})

export class BooksComponent implements OnInit {
  @Input()
  isAuthentication: boolean;
  constructor(
    private booksService: BooksService) { }
  componentData = null;
  books = new Set();
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
}

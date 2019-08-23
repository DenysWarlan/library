import { Component, Renderer2} from '@angular/core';
import { BooksService } from './books.service';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css'],
  providers: [BooksService]
})

export class BooksComponent {
  books = [];
  constructor(private booksService: BooksService, private render: Renderer2) {}

  updateBookList(query: string) {
    this.showBooks(query);
  }

  showBooks(query) {
    return this.booksService.getBooks(query)
      .subscribe((response) => {
        const items = response['items'];
        for (const item of items) {
          const book = {
            title: '',
            imageLinks: '',
            description: ''
          };
          book.title = item.volumeInfo.title;
          if (item.volumeInfo.imageLinks) {
            book.imageLinks = item.volumeInfo.imageLinks.smallThumbnail;
          }
          if (item.volumeInfo.description) {
            book.description = item.volumeInfo.description;
            if (book.description.length > 300) {
              book.description.trim().slice(0, book.description.length - 1) + '...';
            }
          }
          if (book !== undefined) {
            this.books.push(book);
          }
        }
        console.log(this.books[0].imageLinks);
        return this.books;
      });
  }
}

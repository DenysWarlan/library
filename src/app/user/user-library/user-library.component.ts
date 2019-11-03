import { Component, OnInit } from '@angular/core';

import { UsersService } from '../../shared/services/users.service';

import { User } from '../../shared/models/user.model';
import { Book } from '../../shared/models/book.model';
@Component({
  selector: 'app-user-library',
  templateUrl: './user-library.component.html',
  styleUrls: ['./user-library.component.less']
})
export class UserLibraryComponent implements OnInit {
  books: Book[];
  config: any;
  constructor(private userService: UsersService) { }
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

  getLibrary() {
    this.books = [];
    const user: User = JSON.parse(window.localStorage.getItem('user'));
    this.userService.getLibrary(user.id).subscribe((response) => {
      const items = response['books'];
      for (const item of items) {
        this.books.push(item.book);
      }
      console.log(this.books);
      this.config = {
        itemsPerPage: 9,
        currentPage: 1,
        totalItems: this.books.length
      };
      console.log(this.config);
      return this.books;
    });
  }

  pageChanged(event) {
    this.config.currentPage = event;
  }
}

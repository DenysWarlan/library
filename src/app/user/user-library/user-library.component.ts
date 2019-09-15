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
      return this.books;
    });
  }
}

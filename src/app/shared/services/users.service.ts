import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs';

import { User } from '../models/user.model';
import { Library } from '../models/library.model';




@Injectable()

export class UsersService {
  userHaveLibrary: any;
  constructor(private http: HttpClient) { }

  registerUser(data: object) {
    return this.http.post('http://localhost:3000/users', data);
  }

  getUserByEmail(email: string): Observable<User> {
    return this.http.get<User>(`http://localhost:3000/users?email=${email}`)
      .map((user: any) => user[0] ? user[0] : undefined);
  }

  getLibrary(id: number): Observable<Library> {
    return this.http.get<Library>(`http://localhost:3000/library/?id=${id}`)
      .map((library: Library) => library[0] ? library[0] : undefined);
  }

  updateBookList(oldLibrary: Library, id) {
    return this.http.put(`http://localhost:3000/library/${id}`, oldLibrary);
  }

  createNewLibrary(newLibrary: Library) {
    return this.http.post('http://localhost:3000/library', newLibrary);
  }
}

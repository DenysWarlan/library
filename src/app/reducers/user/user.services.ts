import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { normalize } from 'normalizr';
import { EntityTypes } from '../entity/entity.types';
import { Entities } from '../entity/entity.schemas';
import { LoginParams } from '../o-auth/model/login-params';
import { User } from './model/user';

@Injectable({
  providedIn: 'root',
})
export class UserServices {
  constructor(private http: HttpClient) {}

  getStudent(payload: User) {
    return this.http
      .get<User[]>(`http://localhost:3000/users?email=${payload.email}`)
      .pipe(map((res) => res[0]));
  }

  registerUser(data: User) {
    return this.http.post('http://localhost:3000/users', data);
  }
}

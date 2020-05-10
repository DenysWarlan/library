import { of } from 'rxjs';
import { Login } from './model/login';
import { map } from 'rxjs/operators';
import { User } from '../user/model/user';
import { HttpClient } from '@angular/common/http';
import { Role } from './model/role';
import { Injectable } from '@angular/core';
@Injectable({
  providedIn: 'root',
})
export class AuthServices {
  constructor(private http: HttpClient) {}

  private isLogin = of({
    userId: 0,
    isAutheticated: false,
  });

  login(payload: User) {
    this.isLogin = of({
      userId: payload.id,
      isAutheticated: true,
    });
    return this.isLogin.pipe(map((res: Login) => res));
  }

  logout(payload: User) {
    this.isLogin = of({
      userId: payload.id,
      isAutheticated: false,
    });
    return this.isLogin.pipe(map((res: Login) => res));
  }

  getRole() {
    return this.http.get<Role[]>(`http://localhost:3000/profile`);
  }
}

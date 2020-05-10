import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { select, Store } from '@ngrx/store';
import { AppState } from '../../reducers';
import { LoginAction } from '../../reducers/o-auth/action/login.action';
import { GetUserAction } from '../../reducers/user/action/user.action';
import { Observable } from 'rxjs';
import { User } from '../../reducers/user/model/user';
import { filter, first, withLatestFrom } from 'rxjs/operators';
import {
  getUserSelect,
  getUserSuccess,
} from '../../reducers/user/selector/get-user-select.selector';
import { isAuth } from '../../reducers/o-auth/selector/login.selector';
import { RoleAction } from '../../reducers/o-auth/action/role.action';
import { Role } from '../../reducers/o-auth/enum/role';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  charsCount = 5;
  form: FormGroup;
  user$: Observable<User>;
  userSuccess$: Observable<boolean>;
  isLogin$: Observable<boolean>;
  error: boolean;
  errorMessage: string;
  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private store: Store<AppState>
  ) {}
  ngOnInit() {
    this.user$ = this.store.pipe(select(getUserSelect));
    this.userSuccess$ = this.store.pipe(select(getUserSuccess));
    this.isLogin$ = this.store.pipe(select(isAuth));
    this.isLogin$
      .pipe(
        withLatestFrom(this.user$),
        filter(([islogin, user]) => !!islogin && !!user && !!user.id),
        first()
      )
      .subscribe(([islogin, user]) => {
        if (user.profileId === Role.user) {
          this.router.navigate([`/user/${user.id}`], {
            relativeTo: this.route,
          });
        } else {
          this.router.navigate([`/admin/${user.id}`], {
            relativeTo: this.route,
          });
        }
      });
    this.form = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [
        Validators.required,
        Validators.minLength(this.charsCount),
      ]),
    });
  }

  loginUser() {
    const emailUser = this.form.get('email').value;
    const pass = this.form.get('password').value + '';
    const params: User = this.form.value;
    this.store.dispatch(new GetUserAction(params));

    this.userSuccess$
      .pipe(
        withLatestFrom(this.user$),
        filter(([succ, user]) => succ),
        first()
      )
      .subscribe(([succ, user]) => {
        if (
          user &&
          user.email &&
          user.password &&
          user.password === pass &&
          user.email === emailUser
        ) {
          this.error = false;
          this.store.dispatch(new LoginAction(user));
          // this.store.dispatch(new RoleAction());
        } else {
          this.error = true;
          this.errorMessage = 'E-mail or password error';
        }
      });
  }
}

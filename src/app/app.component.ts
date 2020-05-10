import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { select, Store } from '@ngrx/store';
import {
  isAuth,
  logoutSuccess,
} from './reducers/o-auth/selector/login.selector';
import { AppState } from './reducers';
import { filter, first } from 'rxjs/operators';
import { User } from './reducers/user/model/user';
import {
  LoActionClear,
  LogoutAction,
} from './reducers/o-auth/action/login.action';
import { GetUserActionClear } from './reducers/user/action/user.action';
import * as _ from 'lodash';
import { ActivatedRoute, Router } from '@angular/router';
import { getUserSelect } from './reducers/user/selector/get-user-select.selector';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'library';
  isAuth$: Observable<boolean>;
  user$: Observable<User>;
  logoutSuccess$: Observable<boolean>;
  constructor(
    private store: Store<AppState>,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.isAuth$ = this.store.pipe(select(isAuth));
    this.user$ = this.store.pipe(select(getUserSelect));
    this.logoutSuccess$ = this.store.pipe(select(logoutSuccess));
  }
}

import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { AppState } from '../reducers';
import { select, Store } from '@ngrx/store';
import {
  isAuth,
  logoutSuccess,
} from '../reducers/o-auth/selector/login.selector';
import {
  LoActionClear,
  LogoutAction,
} from '../reducers/o-auth/action/login.action';
import { getUserSelect } from '../reducers/user/selector/get-user-select.selector';
import { User } from '../reducers/user/model/user';
import { filter, first } from 'rxjs/operators';
import * as _ from 'lodash';
import { ActivatedRoute, Router } from '@angular/router';
import { GetUserActionClear } from '../reducers/user/action/user.action';
import { Role } from '../reducers/o-auth/enum/role';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss'],
})
export class NavigationComponent implements OnInit {
  isAuth$: Observable<boolean>;
  logoutSuccess$: Observable<boolean>;
  user$: Observable<User>;
  role = Role;
  constructor(
    private store: Store<AppState>,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.isAuth$ = this.store.pipe(select(isAuth));
    this.user$ = this.store.pipe(select(getUserSelect));
    this.logoutSuccess$ = this.store.pipe(select(logoutSuccess));
  }

  logOut() {
    this.user$
      .pipe(
        filter((user: User) => !!user && !!_.get(user, ['id'])),
        first()
      )
      .subscribe((user: User) => {
        this.store.dispatch(new LogoutAction(user));
        this.store.dispatch(new GetUserActionClear(user));
      });

    this.logoutSuccess$
      .pipe(
        filter((succ) => succ),
        first()
      )
      .subscribe(() => {
        this.store.dispatch(new LoActionClear());
        this.router.navigate(['/oauth/start-page'], {
          relativeTo: this.route,
        });
      });
  }
}

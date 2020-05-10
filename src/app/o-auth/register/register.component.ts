import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { User } from '../../reducers/user/model/user';
import {
  GetUserAction,
  GetUserActionClear,
} from '../../reducers/user/action/user.action';
import { select, Store } from '@ngrx/store';
import { AppState } from '../../reducers';
import { ActivatedRoute, Router } from '@angular/router';
import {
  getUserSelect,
  getUserSuccess,
  hasUser,
} from '../../reducers/user/selector/get-user-select.selector';
import { Observable } from 'rxjs';
import { filter, first, withLatestFrom } from 'rxjs/operators';
import {
  RegisterUserAction,
  RegisterUserActionClear,
} from '../../reducers/user/action/register.action';
import { registerSuccess } from '../../reducers/user/selector/register.selectors';
import { log } from 'util';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit {
  form: FormGroup;
  charsCount = 5;
  user$: Observable<User>;
  userSuccess$: Observable<boolean>;
  registerSuccess$: Observable<boolean>;
  hasUser$: Observable<boolean>;
  error: boolean;
  errorMessage: string;
  constructor(
    private store: Store<AppState>,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.user$ = this.store.pipe(select(getUserSelect));
    this.userSuccess$ = this.store.pipe(select(getUserSuccess));
    this.registerSuccess$ = this.store.pipe(select(registerSuccess));
    this.hasUser$ = this.store.pipe(select(hasUser));
    this.form = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [
        Validators.required,
        Validators.minLength(this.charsCount),
      ]),
      username: new FormControl('', [Validators.required]),
      surname: new FormControl('', [Validators.required]),
    });
  }

  submitForm() {
    const params: User = this.form.value;
    this.store.dispatch(new GetUserAction(params));
    this.userSuccess$
      .pipe(
        withLatestFrom(this.hasUser$, this.user$),
        filter(([succ, has, user]) => succ),
        first()
      )
      .subscribe(([succ, has, user]) => {
        if (has && user && user.email === this.form.value.email) {
          (this.error = true), (this.errorMessage = 'Email use');
        } else {
          this.store.dispatch(new RegisterUserAction(params));
          this.store.dispatch(new GetUserActionClear(params));
        }
      });
    this.registerSuccess$
      .pipe(
        filter((succ) => succ),
        first()
      )
      .subscribe(() => {
        this.router.navigate([`/oauth/thanks/${this.form.value.email}`], {
          relativeTo: this.route,
        });
      });
  }

  login() {
    this.router.navigate(['/oauth/login'], {
      relativeTo: this.route,
    });
  }
}

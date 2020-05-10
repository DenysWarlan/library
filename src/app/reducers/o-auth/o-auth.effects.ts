import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Injectable } from '@angular/core';
import { catchError, map, switchMap } from 'rxjs/operators';
import { of } from 'rxjs';
import * as login from './action/login.action';
import * as role from './action/role.action';
import {
  AuthActions,
  LoginActionFailure,
  LoginActionSuccess,
} from './action/login.action';
import { AuthServices } from './o-auth.services';
import { RoleAction, RoleActions } from './action/role.action';

@Injectable()
export class OAuthEffects {
  login$ = createEffect(() =>
    this.actions$.pipe(
      ofType(login.AuthActionTypes.Login),
      map((action: AuthActions) => action.payload),
      switchMap((payload) =>
        this.service.login(payload).pipe(
          map((res) => {
            return new LoginActionSuccess(res);
          }),
          catchError((error) => of(new LoginActionFailure(error)))
        )
      )
    )
  );

  logout$ = createEffect(() =>
    this.actions$.pipe(
      ofType(login.AuthActionTypes.Logout),
      map((action: AuthActions) => action.payload),
      switchMap((payload) =>
        this.service.logout(payload).pipe(
          map((res) => {
            return new login.LogoutActionSuccess(res);
          }),
          catchError((error) => of(new login.LogoutActionFailure(error)))
        )
      )
    )
  );

  role$ = createEffect(() =>
    this.actions$.pipe(
      ofType(role.RoleActionTypes.get),
      map((action: RoleActions) => action.payload),
      switchMap((payload) =>
        this.service.getRole().pipe(
          map((res) => {
            return new role.RoleActionSuccess(res);
          }),
          catchError((error) => of(new role.RoleActionFailure(error)))
        )
      )
    )
  );

  constructor(private actions$: Actions, private service: AuthServices) {}
}

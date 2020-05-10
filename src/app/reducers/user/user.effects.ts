import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Injectable } from '@angular/core';
import { catchError, map, switchMap } from 'rxjs/operators';
import { of } from 'rxjs';
import * as getUser from './action/user.action';
import * as registerUser from './action/register.action';
import { UserServices } from './user.services';
import { LoginParams } from '../o-auth/model/login-params';
import { User } from './model/user';
import { HttpErrorResponse } from '@angular/common/http';

@Injectable()
export class UserEffects {
  getStudent$ = createEffect(() =>
    this.actions$.pipe(
      ofType(getUser.getUserActionTypes.request),
      map((action: getUser.GetUserAction) => action.payload),
      switchMap((payload: User) =>
        this.service.getStudent(payload).pipe(
          map((res) => {
            return new getUser.GetUserActionSuccess(res);
          }),
          catchError((error: HttpErrorResponse) =>
            of(new getUser.GetUserActionError(error))
          )
        )
      )
    )
  );
  registerStudent$ = createEffect(() =>
    this.actions$.pipe(
      ofType(registerUser.registerUserActionTypes.request),
      map((action: registerUser.RegisterAction) => action.payload),
      switchMap((payload: User) =>
        this.service.registerUser(payload).pipe(
          map((res) => {
            return new registerUser.RegisterUserActionSuccess(res);
          }),
          catchError((error: HttpErrorResponse) =>
            of(new registerUser.RegisterUserActionError(error))
          )
        )
      )
    )
  );

  constructor(private actions$: Actions, private service: UserServices) {}
}

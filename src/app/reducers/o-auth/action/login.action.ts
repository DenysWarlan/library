import { Action } from '@ngrx/store';
import { Login } from '../model/login';
import { User } from '../../user/model/user';
import { HttpErrorResponse } from '@angular/common/http';

export enum AuthActionTypes {
  Login = '[Login] Login',
  LoginSuccess = '[Auth] Login Success',
  LoginFailure = '[Auth] Login Failure',
  LogClear = '[Auth] Log Clear',
  Logout = '[Auth] Logout',
  LogoutSuccess = '[Auth] Logout Success',
  LogoutFailure = '[Auth] Logout Failure',
}

export class LoginAction implements Action {
  readonly type = AuthActionTypes.Login;
  constructor(public payload: User) {}
}

export class LoginActionSuccess implements Action {
  readonly type = AuthActionTypes.LoginSuccess;
  constructor(public payload: Login) {}
}

export class LoginActionFailure implements Action {
  readonly type = AuthActionTypes.LoginFailure;

  constructor(public payload: HttpErrorResponse) {}
}

export class LogoutAction implements Action {
  readonly type = AuthActionTypes.Logout;
  constructor(public payload: User) {}
}
export class LogoutActionSuccess implements Action {
  readonly type = AuthActionTypes.LogoutSuccess;
  constructor(public payload: Login) {}
}

export class LogoutActionFailure implements Action {
  readonly type = AuthActionTypes.LogoutFailure;

  constructor(public payload: HttpErrorResponse) {}
}

export class LoActionClear implements Action {
  readonly type = AuthActionTypes.LogClear;

  constructor(public payload?: User) {}
}

export type AuthActions =
  | LoginAction
  | LoginActionSuccess
  | LoginActionFailure
  | LogoutAction
  | LogoutActionSuccess
  | LogoutActionFailure;

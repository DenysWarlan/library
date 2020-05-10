import { User } from '../model/user';
import { Action } from '@ngrx/store';

export const registerUserActionTypes = {
  request: '[user] register user',
  requestSuccess: '[user] register user success',
  requestError: '[user] register user error',
  requestClear: '[user] register user clear',
};

export class RegisterUserAction implements Action {
  readonly type = registerUserActionTypes.request;
  constructor(public payload: User) {}
}
export class RegisterUserActionSuccess implements Action {
  readonly type = registerUserActionTypes.requestSuccess;
  constructor(public payload: User) {}
}
export class RegisterUserActionError implements Action {
  readonly type = registerUserActionTypes.requestError;

  constructor(public payload: User) {}
}
export class RegisterUserActionClear implements Action {
  readonly type = registerUserActionTypes.requestClear;
  constructor(public payload: User) {}
}
export type RegisterAction =
  | RegisterUserAction
  | RegisterUserActionSuccess
  | RegisterUserActionError
  | RegisterUserActionClear;

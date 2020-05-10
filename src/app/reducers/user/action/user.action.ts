import { User } from '../model/user';
import { HttpErrorResponse } from '@angular/common/http';
import { Action } from '@ngrx/store';

export const getUserActionTypes = {
  request: '[user] get user',
  requestSuccess: '[user] get user success',
  requestError: '[user] get user error',
  requestClear: '[user] get user clear',
};

export class GetUserAction implements Action {
  readonly type = getUserActionTypes.request;
  constructor(public payload: User) {}
}
export class GetUserActionSuccess implements Action {
  readonly type = getUserActionTypes.requestSuccess;
  constructor(public payload: User) {}
}
export class GetUserActionError implements Action {
  readonly type = getUserActionTypes.requestError;

  constructor(public payload: HttpErrorResponse) {}
}
export class GetUserActionClear implements Action {
  readonly type = getUserActionTypes.requestClear;
  constructor(public payload: User) {}
}
export type GetAction =
  | GetUserAction
  | GetUserActionSuccess
  | GetUserActionError
  | GetUserActionClear;

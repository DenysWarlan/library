import { Action } from '@ngrx/store';
import { Login } from '../model/login';
import { User } from '../../user/model/user';
import { HttpErrorResponse } from '@angular/common/http';
import { Role } from '../model/role';

export enum RoleActionTypes {
  get = '[Login] Get role',
  getSuccess = '[Login] Get role Success',
  getFail = '[Login] Get role Failure',
}

export class RoleAction implements Action {
  readonly type = RoleActionTypes.get;
  constructor(public payload?: Role) {}
}

export class RoleActionSuccess implements Action {
  readonly type = RoleActionTypes.getSuccess;
  constructor(public payload: Role[]) {}
}

export class RoleActionFailure implements Action {
  readonly type = RoleActionTypes.getFail;

  constructor(public payload: HttpErrorResponse) {}
}

export type RoleActions = RoleAction | RoleActionSuccess | RoleActionFailure;

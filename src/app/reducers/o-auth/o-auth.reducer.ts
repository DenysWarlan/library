import { Login } from './model/login';
import { Action } from '@ngrx/store';
import { AuthActions, AuthActionTypes } from './action/login.action';
import { map } from 'rxjs/operators';
import * as resAction from '../../shared/models/response-action.model';
import { Role } from './model/role';
import { RoleAction, RoleActions, RoleActionTypes } from './action/role.action';

export interface OAuthState {
  login: Login;
  role: Role;
}

const initialState: OAuthState = {
  login: {},
  role: {},
};

const loading = resAction.ResponseLoadingModel;
const success = resAction.ResponseSuccessModel;
const error = resAction.ResponseErrorModel;
export const oAuthReducer = (state: OAuthState = initialState, actions) => {
  switch (actions.type) {
    case AuthActionTypes.Login:
      return {
        ...state,
        login: {
          ...loading,
          ...initialState,
        },
      };
    case AuthActionTypes.LoginSuccess:
      return {
        ...state,
        login: {
          ...actions.payload,
          ...success,
        },
      } as OAuthState;
    case AuthActionTypes.LoginFailure:
      return {
        ...state,
        login: {
          ...error,
          error: actions.payload,
        },
      };
    case AuthActionTypes.Logout:
      return {
        ...state,
        login: {
          ...loading,
          ...initialState,
        },
      };
    case AuthActionTypes.LogoutSuccess:
      return {
        ...state,
        login: {
          ...actions.payload,
          ...success,
        },
      } as OAuthState;
    case AuthActionTypes.LogoutFailure:
      return {
        ...state,
        login: {
          ...error,
          error: actions.payload,
        },
      };
    case AuthActionTypes.LogClear:
      return initialState;
    case RoleActionTypes.get:
      return {
        ...state,
        role: {
          ...loading,
        },
      };
    case RoleActionTypes.getSuccess:
      return {
        ...state,
        role: {
          ...actions.payload,
          ...success,
        },
      };
    case RoleActionTypes.getFail:
      return {
        ...state,
        role: {
          ...error,
          error: actions.payload,
        },
      };
    default:
      return state;
  }
};
export const getLogin = (state: OAuthState) => state && state.login;

import { createSelector } from '@ngrx/store';
import { getOAuthState } from '../../index';
import * as fromReducer from '../o-auth.reducer';
import { Login } from '../model/login';
import { createStateSuccesselector } from '../../../shared/operation/operation';

export const isLogin = createSelector(getOAuthState, fromReducer.getLogin);

export const isAuth = createSelector(
  isLogin,
  (log: Login) => (log && log.isAutheticated) || false
);

export const logoutSuccess = createStateSuccesselector(isLogin);

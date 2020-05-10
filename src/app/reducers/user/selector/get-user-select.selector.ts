import { createSelector } from '@ngrx/store';
import * as fromReducer from '../user.reducer';
import { getOAuthState, getUserState } from '../../index';
import { createStateSuccesselector } from '../../../shared/operation/operation';

export const getUserSelect = createSelector(getUserState, fromReducer.getUser);

export const getUserSuccess = createStateSuccesselector(getUserSelect);

export const hasUser = createSelector(
  getUserSelect,
  (state) => !!(state && state.id) || false
);

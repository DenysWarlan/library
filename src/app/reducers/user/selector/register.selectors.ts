import { createSelector } from '@ngrx/store';
import * as fromReducer from '../user.reducer';
import { getUserState } from '../../index';
import { createStateSuccesselector } from '../../../shared/operation/operation';

export const getRegisterState = createSelector(
  getUserState,
  fromReducer.getRegister
);

export const registerSuccess = createStateSuccesselector(getRegisterState);

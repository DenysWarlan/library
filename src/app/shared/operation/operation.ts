import { AppState } from '../../reducers';
import { createSelector } from '@ngrx/store';

export const createStateLoadingSelector = (
  getState: (state: AppState) => any
) => {
  return createSelector(getState, (state) => (state && state.loading) || false);
};
export const createStateSuccesselector = (
  getState: (state: AppState) => any
) => {
  return createSelector(getState, (state) => (state && state.success) || false);
};
export const createStateErrorSelector = (
  getState: (state: AppState) => any
) => {
  return createSelector(getState, (state) => (state && state.error) || false);
};

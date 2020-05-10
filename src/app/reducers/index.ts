import { Action, ActionReducerMap } from '@ngrx/store';
import { oAuthReducer, OAuthState } from './o-auth/o-auth.reducer';
import { InjectionToken } from '@angular/core';
import { UserReducer, UserState } from './user/user.reducer';

export interface AppState {
  oAuth: OAuthState;
  user: UserState;
}

export const reducers: ActionReducerMap<AppState> = {
  oAuth: oAuthReducer,
  user: UserReducer,
};
export function getReducer(): ActionReducerMap<AppState, Action> {
  return reducers;
}
export const getOAuthState = (state: AppState) => state.oAuth;
export const getUserState = (state: AppState) => state.user;

export const reducerT = new InjectionToken<ActionReducerMap<AppState>>(
  'Reduers'
);
export const reducerP = [{ provide: reducerT, useFactory: getReducer }];

import { User } from './model/user';
import { getUserActionTypes } from './action/user.action';
import { registerUserActionTypes } from './action/register.action';
import { ResponseModel } from '../../shared/models/response.model';
import * as resAction from '../../shared/models/response-action.model';

export interface UserState {
  user: User;
  registerUser: User;
}

const initialState: UserState = {
  user: {},
  registerUser: {},
};
const loading = resAction.ResponseLoadingModel;
const success = resAction.ResponseSuccessModel;
const error = resAction.ResponseErrorModel;
export const UserReducer = (state: UserState = initialState, actions) => {
  switch (actions.type) {
    case registerUserActionTypes.request:
      return {
        ...state,
        registerUser: {
          ...loading,
        },
      };
    case registerUserActionTypes.requestSuccess:
      return {
        ...state,
        registerUser: {
          ...actions.payload,
          ...success,
        },
      };
    case registerUserActionTypes.requestClear:
      return initialState;
    case registerUserActionTypes.requestError:
      return {
        ...state,
        registerUser: {
          ...error,
          error: actions.payload,
        },
      } as UserState;
    case getUserActionTypes.request:
      return {
        ...state,
        user: {
          ...loading,
        },
      };
    case getUserActionTypes.requestClear:
      return initialState;
    case getUserActionTypes.requestError:
      return {
        ...state,
        user: {
          ...error,
          error: actions.payload,
        },
      } as UserState;
    case getUserActionTypes.requestSuccess:
      return {
        ...state,
        user: {
          ...actions.payload,
          ...success,
        },
      };
    default:
      return state;
  }
};
export const getUser = (state: UserState) => state && state.user;
export const getRegister = (state: UserState) => state && state.registerUser;

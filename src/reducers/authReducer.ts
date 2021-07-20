import {LOGOUT, SIGN_IN, UPDATE_PROFILE} from '@reducers/types/index';
import {authState} from '@states/authState';

export type AuthAction = typeof LOGOUT | typeof SIGN_IN | typeof UPDATE_PROFILE;
export type AuthState = typeof authState;

type Action = {
  type: AuthAction;
  payload?: any;
};

export type AuthDispatch = (action: Action) => void;

const authReducer = (state: AuthState, action: Action) => {
  switch (action?.type) {
    case SIGN_IN:
      return action.payload;
    case UPDATE_PROFILE:
      return {
        ...state,
        user: action.payload,
      };
    case LOGOUT:
      return authState;
    default:
      return state;
  }
};

export default authReducer;

import { authTypes, type AuthState, type AuthAction } from '../types/types';

const initialState: AuthState = {
  logged: false,
};

export interface AuthReducerProps {
  state: AuthState;
  action: AuthAction;
}

export const authReducer = (
  state: AuthState = initialState,
  action: AuthAction
) => {
  switch (action.type) {
    case authTypes.login:
      return { ...state, logged: true, user: action.payload };

    case authTypes.logout:
      return { logged: false };

    default:
      return state;
  }
};

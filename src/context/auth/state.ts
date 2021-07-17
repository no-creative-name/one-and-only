import { AuthActions, AUTH_ACTION } from './actions';

export interface AuthState {
  isAuthenticated: boolean;
  savedEmail?: string;
}

export interface AuthenticatedAuthState {
  isAuthenticated: true;
  savedEmail: string;
}

export const initialAuthState: AuthState = {
  isAuthenticated: false,
};

export const authReducer = (state: AuthState, action: AuthActions): AuthState => {
  switch (action.type) {
    case AUTH_ACTION.LOGOUT:
      return { ...initialAuthState, savedEmail: state.savedEmail };
    case AUTH_ACTION.LOGIN_SUCCESS:
      return {
        isAuthenticated: true,
        savedEmail: action.email,
      };
    default:
      return state;
  }
};

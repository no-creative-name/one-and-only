export enum AUTH_ACTION {
  LOGOUT = 'logout',
  LOGIN_SUCCESS = 'loginSuccess',
}

export type Logout = {
  type: AUTH_ACTION.LOGOUT;
};

export type LoginSuccess = {
  type: AUTH_ACTION.LOGIN_SUCCESS;
  email: string;
};

export type AuthActions =
  | Logout
  | LoginSuccess;

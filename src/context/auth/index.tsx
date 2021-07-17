import React, {
  createContext, useContext, useMemo, useReducer,
} from 'react';
import merge from 'lodash/merge';
import { AuthActions } from './actions';
import { authReducer, AuthState, initialAuthState } from './state';

interface Context {
  state: AuthState;
  dispatch: (value: AuthActions) => void;
}

export const AuthStateContext = createContext<Context>({ state: initialAuthState } as Context);

export const useAuthState = () => useContext<Context>(AuthStateContext);

export const AuthStateProvider: React.FC<{ initialState: AuthState }> = ({
  children,
  initialState: previousState,
}) => {
  const persistedState = {};

  const initialValue: AuthState = merge(previousState, persistedState);

  const [state, dispatch] = useReducer(
    authReducer,
    initialValue,
  );

  const value = useMemo(() => ({ state, dispatch } as Context), [state]);

  return <AuthStateContext.Provider value={value}>{children}</AuthStateContext.Provider>;
};

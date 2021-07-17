import { Auth } from 'aws-amplify';
import { useAuthState } from '../context/auth';
import { AUTH_ACTION } from '../context/auth/actions';

export const useLogin = () => {
  const { dispatch } = useAuthState();

  return async (email: string, password: string) => {
    await Auth.signIn(email, password);
    dispatch({
      type: AUTH_ACTION.LOGIN_SUCCESS,
      email,
    });
  };
};

export default useLogin;

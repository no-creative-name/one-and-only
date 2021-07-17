import { Auth } from 'aws-amplify';
import { useAuthState } from '../context/auth';
import { AUTH_ACTION } from '../context/auth/actions';

export const useLogout = () => {
  const { dispatch } = useAuthState();

  return async () => {
    await Auth.signOut();
    dispatch({
      type: AUTH_ACTION.LOGOUT,
    });
  };
};

export default useLogout;

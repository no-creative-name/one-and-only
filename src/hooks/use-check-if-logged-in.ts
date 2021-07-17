import { Auth } from 'aws-amplify';
import { useEffect } from 'react';
import { useAuthState } from '../context/auth';
import { AUTH_ACTION } from '../context/auth/actions';

export const useCheckIfLoggedIn = () => {
  const { dispatch } = useAuthState();
  useEffect(() => {
    Auth.currentAuthenticatedUser().then((user) => {
      dispatch({
        type: AUTH_ACTION.LOGIN_SUCCESS,
        email: user.email,
      });
    }).catch(() => {

    });
  }, []);
};

export default useCheckIfLoggedIn;

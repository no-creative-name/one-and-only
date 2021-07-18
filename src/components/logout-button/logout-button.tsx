import { Button } from '@material-ui/core';
import { useHistory } from 'react-router-dom';
import { Routes } from '../../constants';
import { useLogout } from '../../hooks';

export const LogoutButton = () => {
  const logout = useLogout();
  const history = useHistory();

  const logoutAndRedirect = async () => {
    logout().then(() => {
      history.push(Routes.Welcome);
    });
  };
  return (
    <Button
      variant="contained"
      color="secondary"
      onClick={logoutAndRedirect}
    >
      Logout
    </Button>
  );
};

export default LogoutButton;

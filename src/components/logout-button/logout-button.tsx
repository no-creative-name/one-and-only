import { Button } from '@material-ui/core';
import { useLogout } from '../../hooks';

export const LogoutButton = () => {
  const logout = useLogout();
  return <Button onClick={logout}>Logout</Button>;
};

export default LogoutButton;

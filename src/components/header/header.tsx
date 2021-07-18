import styled from '@emotion/styled';
import { Button } from '@material-ui/core';
import { useHistory } from 'react-router-dom';
import { Routes } from '../../constants';
import { useAuthState } from '../../context/auth';
import { LogoutButton } from '../logout-button/logout-button';

const HeaderContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  background-color: grey;
  display: flex;
  justify-content: center;
  height: 70px;
`;

export const Header = () => {
  const { state } = useAuthState();
  const history = useHistory();

  return (
    <HeaderContainer>
      {state.isAuthenticated ? <LogoutButton /> : null}
      {state.isAuthenticated ? (
        <Button
          onClick={() => history.push(Routes.Profile)}
        >
          Profile
        </Button>
      ) : null}
    </HeaderContainer>
  );
};

export default Header;

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
  background-color: var(--cl-primary);
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 10px;
`;

const Logo = styled.span`
  color: var(--cl-white);
  font-size: 50px;
  cursor: pointer;
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
`;

export const Header = () => {
  const { state } = useAuthState();
  const history = useHistory();

  return (
    <HeaderContainer>
      <Logo onClick={() => {
        history.push(Routes.Welcome);
      }}
      >
        O&O

      </Logo>
      <ButtonContainer>
        {state.isAuthenticated ? <LogoutButton /> : null}
        {state.isAuthenticated ? (
          <Button
            variant="contained"
            color="secondary"
            onClick={() => history.push(Routes.Profile)}
          >
            Profile
          </Button>
        ) : null}
      </ButtonContainer>
    </HeaderContainer>
  );
};

export default Header;

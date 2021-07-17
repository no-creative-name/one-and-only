import styled from '@emotion/styled';
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

  return (
    <HeaderContainer>
      {state.isAuthenticated ? <LogoutButton /> : null}
    </HeaderContainer>
  );
};

export default Header;

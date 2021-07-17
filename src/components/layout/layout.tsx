import styled from '@emotion/styled';
import { Grid } from '@material-ui/core';
import React from 'react';
import { Header } from '../header/header';

const AppContainer = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Layout: React.FC = ({
  children,
}) => (
  <AppContainer>
    <Header />
    <Grid container justifyContent="center">{children}</Grid>
  </AppContainer>
);

export default Layout;

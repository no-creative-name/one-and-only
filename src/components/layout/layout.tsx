import { Grid } from '@material-ui/core';
import React from 'react';

export const Layout: React.FC = ({
  children,
}) => <Grid container justifyContent="center">{children}</Grid>;

export default Layout;

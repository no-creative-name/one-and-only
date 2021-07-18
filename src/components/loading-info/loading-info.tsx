import { Grid, Box, CircularProgress } from '@material-ui/core';
import React from 'react';

export const LoadingInfo: React.FC<{
  isLoading?: boolean;
}> = ({
  isLoading,
  children,
}) => (
  <>
    {isLoading ? (
      <Grid xs={9} md={6}>
        <Box
          display="flex"
          justifyContent="center"
          alignItems="center"
        >
          <CircularProgress />

        </Box>
      </Grid>
    ) : children}
  </>
);

export default LoadingInfo;

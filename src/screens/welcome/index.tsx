import { Button, Grid, Typography } from '@material-ui/core';
import { useHistory } from 'react-router-dom';
import { Routes } from '../../constants';

export const WelcomeScreen = () => {
  const history = useHistory();

  return (
    <Grid
      item
      xs={6}
    >
      <Typography variant="h1">One and only</Typography>
      <Button onClick={() => {
        history.push(Routes.Registration);
      }}
      >
        Register
      </Button>
      <Button onClick={() => {
        history.push(Routes.Login);
      }}
      >
        Login
      </Button>
    </Grid>
  );
};

export default WelcomeScreen;

import { Button, Grid, Typography } from '@material-ui/core';
import { useHistory } from 'react-router-dom';
import { Layout } from '../../components';
import { Routes } from '../../constants';

export const WelcomeScreen = () => {
  const history = useHistory();

  return (
    <Layout>
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
      </Grid>
    </Layout>
  );
};

export default WelcomeScreen;

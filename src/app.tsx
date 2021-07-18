import { Switch, Route, BrowserRouter } from 'react-router-dom';
import { createTheme, ThemeProvider } from '@material-ui/core';
import { Routes } from './constants';
import { RegistrationScreen } from './screens/registration';
import { WelcomeScreen } from './screens/welcome';
import { AccountConfirmationScreen } from './screens/account-confirmation';
import { LoginScreen } from './screens/login';
import { Layout } from './components';
import { useCheckIfLoggedIn } from './hooks';
import { ProfileScreen } from './screens/profile';

const theme = createTheme({
  palette: {
    text: {
      primary: '#242424',
    },
    primary: {
      main: '#8447FF',
    },
    secondary: {
      main: '#8CFFDA',
    },
  },
  overrides: {
    MuiButton: {
      containedPrimary: {
        color: '#ffffff',
      },
      containedSecondary: {
        backgroundColor: '#ffffff',
        '&:hover': {
          backgroundColor: '#8CFFDA',
        },
      },
    },
  },
});

export const App = () => {
  useCheckIfLoggedIn();

  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter basename={process.env.PUBLIC_URL}>
        <Switch>
          <Layout>
            <Route
              path={Routes.Registration}
              component={RegistrationScreen}
            />
            <Route
              path={Routes.AccountConfirmation}
              component={AccountConfirmationScreen}
            />
            <Route
              path={Routes.Login}
              component={LoginScreen}
            />
            <Route
              path={Routes.Profile}
              component={ProfileScreen}
            />
            <Route
              exact
              path={Routes.Welcome}
              component={WelcomeScreen}
            />
          </Layout>
        </Switch>
      </BrowserRouter>
    </ThemeProvider>
  );
};

export default App;

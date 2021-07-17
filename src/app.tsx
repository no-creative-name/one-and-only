import Amplify from 'aws-amplify';
import { useEffect } from 'react';
import { Switch, Route, BrowserRouter } from 'react-router-dom';
import { Routes } from './constants';
import { RegistrationScreen } from './screens/registration';
import { WelcomeScreen } from './screens/welcome';
import awsConfig from './aws-exports';
import { AccountConfirmationScreen } from './screens/account-confirmation';
import { LoginScreen } from './screens/login';
import { Layout } from './components';
import { useCheckIfLoggedIn } from './hooks';

export const App = () => {
  useCheckIfLoggedIn();
  useEffect(() => {
    Amplify.configure(awsConfig);
  }, []);

  return (
    <Layout>
      <BrowserRouter basename={process.env.PUBLIC_URL}>
        <Switch>
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
            path={Routes.Welcome}
            component={WelcomeScreen}
          />
        </Switch>
      </BrowserRouter>
    </Layout>
  );
};

export default App;

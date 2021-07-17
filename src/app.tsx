import styled from '@emotion/styled';
import Amplify from 'aws-amplify';
import { useEffect } from 'react';
import { Switch, Route, BrowserRouter } from 'react-router-dom';
import { Routes } from './constants';
import { RegistrationScreen } from './screens/registration';
import { WelcomeScreen } from './screens/welcome';
import awsConfig from './aws-exports';
import { AccountConfirmationScreen } from './screens/account-confirmation';

const AppContainer = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const App = () => {
  useEffect(() => {
    Amplify.configure(awsConfig);
  }, []);

  return (
    <AppContainer>
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
            path={Routes.Welcome}
            component={WelcomeScreen}
          />
        </Switch>
      </BrowserRouter>
    </AppContainer>
  );
};

export default App;

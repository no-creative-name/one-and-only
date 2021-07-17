import styled from '@emotion/styled';
import { Switch, Route, BrowserRouter } from 'react-router-dom';

const AppContainer = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const App = () => (
  <BrowserRouter basename={process.env.PUBLIC_URL}>
    <Switch>
      <Route
        path="/"
        component={() => (
          <AppContainer>
            <h1>One and only</h1>
          </AppContainer>
        )}
      />
    </Switch>
  </BrowserRouter>
);

export default App;

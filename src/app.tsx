import styled from '@emotion/styled';

const AppContainer = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const App = () => (
  <AppContainer>
    <h1>One and only</h1>
  </AppContainer>
);

export default App;

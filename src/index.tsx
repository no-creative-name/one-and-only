import React from 'react';
import ReactDOM from 'react-dom';
import { App } from './app';
import { AuthStateProvider } from './context/auth';
import { initialAuthState } from './context/auth/state';
import './reset.css';

ReactDOM.render(
  <React.StrictMode>
    <AuthStateProvider initialState={initialAuthState}>
      <App />
    </AuthStateProvider>
  </React.StrictMode>,
  document.getElementById('root'),
);

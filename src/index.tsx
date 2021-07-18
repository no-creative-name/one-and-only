import Amplify from 'aws-amplify';
import React from 'react';
import ReactDOM from 'react-dom';
import { App } from './app';
import { AuthStateProvider } from './context/auth';
import { initialAuthState } from './context/auth/state';
import './reset.css';
import './variables.css';
import './base.css';
import awsConfig from './aws-exports';

Amplify.configure(awsConfig);

ReactDOM.render(
  <React.StrictMode>
    <AuthStateProvider initialState={initialAuthState}>
      <App />
    </AuthStateProvider>
  </React.StrictMode>,
  document.getElementById('root'),
);

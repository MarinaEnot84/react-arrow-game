import React, {FC} from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import AppTs from './AppTs';
import { AuthProvider } from './AuthContext';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <AuthProvider>
    <App />
    <AppTs />
    </AuthProvider>
  </React.StrictMode>
);



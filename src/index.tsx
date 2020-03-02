import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { AppProvider } from './context/provider';

const Render = () => (
  <AppProvider>
    <App />
  </AppProvider>
);
ReactDOM.render(<Render />, document.getElementById('root'));

import React from 'react';
import { createRoot } from 'react-dom/client'; // Use react-dom/client
import { Provider } from 'react-redux';
import store from './store';
import App from './App';

const root = document.getElementById('root');
const rootRoot = createRoot(root);

rootRoot.render(
  <Provider store={store}>
    <App />
  </Provider>
);

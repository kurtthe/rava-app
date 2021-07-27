import React from 'react';
import ReactDOM from 'react-dom';

import { Provider } from 'react-redux';

import App from '@routes/App';
import store from '@core/module/store/index';

import '@assets/styles/index.scss';

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('app')
);

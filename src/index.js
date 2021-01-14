import React from 'react';
import ReactDOM from 'react-dom';
import Router from './Router';
import Store from './store/Store';

import './styles/index.css';

ReactDOM.render(
  <React.StrictMode>
    <Store>
      <Router />
    </Store>
  </React.StrictMode>,
  document.getElementById('root')
);

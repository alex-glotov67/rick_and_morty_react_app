import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter as Router } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.scss';
import { App } from './App';
import { ContextProvider } from './Context';

ReactDOM.render(
  <Router>
    <ContextProvider>
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </ContextProvider>
  </Router>,
  document.getElementById('root'),
);

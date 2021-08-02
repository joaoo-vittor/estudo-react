import React from 'react';
import ReactDOM from 'react-dom';
import './styles/global_style.css';

import { Home } from './templates/Home';
import { CounterContextProvider } from './context/CounterContext';

ReactDOM.render(
  <React.StrictMode>
    <CounterContextProvider>
      <Home />
    </CounterContextProvider>
  </React.StrictMode>,
  document.getElementById('root'),
);

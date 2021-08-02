import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './index.css';
import { App } from './templates/App';
import { Abc } from './templates/ABC';
import { Menu } from './components/Menu';
import { Page404 } from './components/Page404';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Menu />
      <Switch>
        <Route path="/abc/:slug?/:id?" component={Abc} />
        <Route path="/" exact component={App} />
        <Route path="*" component={Page404} />
      </Switch>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root'),
);

import React from 'react';
import {
  Switch,
  Route,
  Redirect,
} from 'react-router';
import { BrowserRouter } from 'react-router-dom';

import Creator from 'page/creator';
import GuestPage from 'page/guest';
import ErrorPage from 'page/errorPage/ErrorPage.view';
import Login from 'page/login';

const App = () => (
  <BrowserRouter basename="/randomizator">
    <Switch>
      <Route exact path="/" component={ Login } />
      <Route exact path="/not_found" component={ ErrorPage } />
      <Route exact path="/:creator_id" component={ Creator } />
      <Route exact path="/:creator_id/:list_id" component={ GuestPage } />
      <Redirect from="/*" to="/" />
    </Switch>
  </BrowserRouter>
);

export default App;

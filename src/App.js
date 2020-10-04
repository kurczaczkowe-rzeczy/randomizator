import React from 'react';
import {
  Switch, Route, Redirect,
} from 'react-router';
import { BrowserRouter } from 'react-router-dom';
import Creator from 'page/Creator';
import GuestPage from 'page/guest';
import Form from 'page/Form';
import NotFound from 'page/NotFound';

const App = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/creator/:creator_id" component={ Creator } />
      <Route exact path="/creator/:creator_id/:list_id" component={ GuestPage } />
      <Route exact path="/creator/:creator_id/:list_id/edit" component={ Form } />
      <Route exact path="/not_found" component={ NotFound } />
      <Redirect from="/*" to="/not_found" />
    </Switch>
  </BrowserRouter>
);

export default App;

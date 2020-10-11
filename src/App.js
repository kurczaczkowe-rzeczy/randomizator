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
import Footer from 'components/footer/Footer.view';

const App = () => (
  <>
    <BrowserRouter>
      <Switch>
        <Route exact path="/randomizator/" component={ Login } />
        <Route exact path="/randomizator/not_found" component={ ErrorPage } />
        <Route exact path="/randomizator/:creator_id" component={ Creator } />
        <Route exact path="/randomizator/:creator_id/:list_id" component={ GuestPage } />
        <Redirect from="/*" to="/randomizator" />
      </Switch>
    </BrowserRouter>
    <Footer />
  </>
);

export default App;

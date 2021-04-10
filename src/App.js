import { useEffect, useRef } from 'react';
import {
  Switch,
  Route,
  Redirect,
} from 'react-router';
import { useDispatch, useSelector } from 'react-redux';

import { showLoader, hideLoader } from 'store/actions/globalActions';
import { APP_NAME } from 'constans';

import LoadingScreen from 'components/loadingScreen';
import Creator from 'page/creator';
import GuestPage from 'page/guest';
import ErrorPage from 'page/errorPage/ErrorPage.view';
import Login from 'page/login';

const authenticatedRoutes = <Route exact path={ `${ APP_NAME }/` } component={ Creator } />;

const unauthenticatedRoutes = <Route exact path={ `${ APP_NAME }/` } component={ Login } />;

const App = () => {
  const dispatch = useDispatch();
  const auth = useSelector(( state ) => state?.firebase.auth );
  const isLoading = useSelector(( state ) => state?.global.isLoading );
  const bodyRef = useRef( document.body );

  useEffect(() => {
    if ( !auth.isLoaded ) {
      dispatch( showLoader( 'APP' ));
    } else {
      dispatch( hideLoader( 'APP' ));
    }
  }, [ auth.isLoaded, dispatch ]);

  useEffect(() => {
    if ( isLoading ) {
      bodyRef.current.style = 'overflow: hidden';
    } else {
      bodyRef.current.removeAttribute( 'style' );
    }
  }, [ isLoading ]);

  return (
    <>
      { isLoading && <LoadingScreen /> }
      <Switch>
        <Route exact path={ `${ APP_NAME }/not_found` } component={ ErrorPage } />
        <Route exact path={ `${ APP_NAME }/:creatorId/:formId` } component={ GuestPage } />
        { ( auth.uid !== undefined ) ? authenticatedRoutes : unauthenticatedRoutes }
        <Redirect from="/*" to={ `${ APP_NAME }/not_found` } />
      </Switch>
    </>
  );
};

export default App;

import {
  useEffect,
  useState,
} from 'react';
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
  const isLogin = useSelector(( state ) => state?.auth.isLogin );
  const [ isAuthenticated, setAuthenticated ] = useState( false );

  useEffect(() => {
    if ( auth.uid !== undefined ) {
      setAuthenticated( true );
    } else {
      setAuthenticated( false );
    }
  }, [ auth.uid, isLogin ]);

  useEffect(() => {
    if ( !auth.isLoaded ) {
      dispatch( showLoader());
    } else {
      dispatch( hideLoader());
    }
  }, [
    auth.isLoaded,
    hideLoader,
    showLoader,
  ]);

  return isLoading
    ? ( <LoadingScreen /> )
    : (
      <Switch>
        <Route exact path={ `${ APP_NAME }/not_found` } component={ ErrorPage } />
        <Route exact path={ `${ APP_NAME }/:creatorId/:formId` } component={ GuestPage } />
        { ( isAuthenticated && isLogin ) ? authenticatedRoutes : unauthenticatedRoutes }
        <Redirect from="/*" to={ `${ APP_NAME }/not_found` } />
      </Switch>
    );
};

export default App;

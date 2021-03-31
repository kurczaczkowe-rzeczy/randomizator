import {
  useEffect,
  useState,
} from 'react';
import {
  Switch,
  Route,
  Redirect,
} from 'react-router';
import { connect, useSelector } from 'react-redux';
import PropTypes from 'prop-types';

import { showLoader, hideLoader } from 'store/actions/globalActions';
import { APP_NAME } from 'constans';

import LoadingScreen from 'components/loadingScreen';
import Creator from 'page/creator';
import GuestPage from 'page/guest';
import ErrorPage from 'page/errorPage/ErrorPage.view';
import Login from 'page/login';

const authenticatedRoutes = <Route exact path={ `${ APP_NAME }/` } component={ Creator } />;

const unauthenticatedRoutes = <Route exact path={ `${ APP_NAME }/` } component={ Login } />;

const App = ({
  auth,
  hideLoader,
  isLoading,
  showLoader,
}) => {
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
      showLoader();
    } else {
      hideLoader();
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

App.propTypes = {
  auth: PropTypes.shape({
    isLoaded: PropTypes.bool,
    uid: PropTypes.string,
  }),
  hideLoader: PropTypes.func,
  isLoading: PropTypes.bool,
  showLoader: PropTypes.func,
};

App.defaultProps = {
  auth: {
    uid: '',
    isLoaded: false,
  },
  hideLoader: () => {
  },
  isLoading: false,
  showLoader: () => {
  },
};

const mapStateToProps = ( state ) => ({
  auth: state.firebase.auth,
  isLoading: state.global.isLoading,
});

const mapDispatchToProps = ( dispatch ) => ({
  hideLoader: () => dispatch( hideLoader()),
  showLoader: () => dispatch( showLoader()),
});

export default connect( mapStateToProps, mapDispatchToProps )( App );

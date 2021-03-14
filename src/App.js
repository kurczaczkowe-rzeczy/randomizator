import {
  useEffect,
  useState,
  useMemo,
} from 'react';
import {
  Switch,
  Route,
  Redirect,
  useHistory,
} from 'react-router';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import _endsWith from 'lodash/endsWith';

import { showLoader, hideLoader } from 'store/actions/globalActions';

import LoadingScreen from 'components/loadingScreen';
import Creator from 'page/creator';
import GuestPage from 'page/guest';
import ErrorPage from 'page/errorPage/ErrorPage.view';

import Login from 'page/login';

const APP_NAME = 'randomizator';

const authenticatedRoutes = <Route exact path={ `/${ APP_NAME }/:creator_id` } component={ Creator } />;

const unauthenticatedRoutes = <Route exact path={ `/${ APP_NAME }/` } component={ Login } />;

const App = ({
  auth,
  hideLoader,
  isLoading,
  showLoader,
}) => {
  const history = useHistory();
  const endWithSlash = useMemo(() => _endsWith( history?.location?.pathname, '/' ), [ history ]);
  const [ isAuthenticated, setAuthenticated ] = useState( false );

  useEffect(() => {
    if ( auth.uid !== undefined ) {
      setAuthenticated( true );

      const prefix = endWithSlash ? '' : `${ APP_NAME }/`;

      history.push( prefix + auth.uid );
    } else {
      setAuthenticated( false );
    }
  }, [
    endWithSlash,
    history,
    auth.uid,
  ]);

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
        <Route exact path={ `/${ APP_NAME }/not_found` } component={ ErrorPage } />
        { isAuthenticated ? authenticatedRoutes : unauthenticatedRoutes }
        <Route exact path={ `/${ APP_NAME }/:creator_id/:list_id` } component={ GuestPage } />
        <Redirect from="/*" to={ `/${ APP_NAME }` } />
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

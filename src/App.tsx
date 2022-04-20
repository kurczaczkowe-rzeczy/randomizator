import {
  useEffect,
  useMemo,
  useRef,
} from 'react';
import {
  Switch,
  Route,
  Redirect,
} from 'react-router';
import { useDispatch, useSelector } from 'react-redux';
import { isLoaded, isEmpty } from 'react-redux-firebase';
import _isNil from 'lodash/isNil';
import _map from 'lodash/map';

import useLocalStorage from 'hooks/useLocalStorage';
import useLocaleString from 'hooks/useLocaleString';
import {
  showLoader,
  showModal,
} from 'store/actions/globalActions';
import { getCurrentUserRole } from 'store/actions/userActions';
import { RootState } from 'store/reducers/rootReducer';
import {
  ROUTES,
  IS_DEVELOPMENT_MODE,
  SHOW_DEV_MODAL_KEY,
  PAGES,
} from 'constans';

import DrawerMenu from 'components/DrawerMenu';
import LoadingScreen from 'components/loadingScreen';
import ProdReleaseModal from 'components/ProdReleaseModal';
import ProtectedRoute from 'components/ProtectedRoute';
import ErrorPage from 'page/errorPage';
import GuestPage from 'page/Guest';
import Login from 'page/Login';

import {
  authenticatedRoutesCollection,
  getMenuItems,
  getMenuItemsForCurrentUser,
} from 'App.utils';

const unauthenticatedRoutes = <Route exact path={ ROUTES.home } component={ Login } />;

const App = (): JSX.Element => {
  const getString = useLocaleString();
  const dispatch = useDispatch();
  const auth = useSelector(( state: RootState ) => state.firebase.auth );
  const isLoading = useSelector(( state: RootState ) => state.global.isLoading );
  const currentUserRole = useSelector(( state: RootState ) => state.usr.currentUserRole );
  const [ showDevModal, setShowDevModal ] = useLocalStorage( SHOW_DEV_MODAL_KEY );
  const bodyRef = useRef( document.body );

  const menuItems = getMenuItemsForCurrentUser( getMenuItems( getString ), currentUserRole );
  const authenticatedRoutes = useMemo(() => _map( authenticatedRoutesCollection, ( props ) => (
    <ProtectedRoute currentUserRole={ currentUserRole } { ...props } />
  )), [ currentUserRole ]);

  useEffect(() => {
    if ( _isNil( showDevModal )) {
      setShowDevModal( true );
    }
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  useEffect(() => {
    if ( !isLoading && IS_DEVELOPMENT_MODE && showDevModal ) {
      dispatch( showModal());
    }
  }, [
    isLoading,
    dispatch,
    showDevModal,
  ]);

  useEffect(() => {
    if ( !isLoaded( auth )) {
      dispatch( showLoader( PAGES.HOME ));
    } else {
      dispatch( getCurrentUserRole());
    }
  }, [ auth, dispatch ]);

  useEffect(() => {
    if ( isLoading ) {
      bodyRef.current.style.overflow = 'hidden';
    } else {
      bodyRef.current.removeAttribute( 'style' );
    }
  }, [ isLoading ]);

  const isAuthenticated = isLoaded( auth ) && !isEmpty( auth );

  return isEmpty( currentUserRole )
    ? <LoadingScreen />
    : (
      <>
        <Switch>
          <Route
            exact
            key="error"
            path={ ROUTES.error }
            component={ ErrorPage }
          />
          <Route
            exact
            key="guest"
            path={ ROUTES.guest }
            component={ GuestPage }
          />
          {/* eslint-disable-next-line react/jsx-no-useless-fragment */}
          <>{ isAuthenticated ? authenticatedRoutes : unauthenticatedRoutes }</>
          <Redirect from="/*" to={ ROUTES.notFound } />
        </Switch>
        { isAuthenticated && <DrawerMenu items={ menuItems } /> }
        <ProdReleaseModal />
      </>
    );
};

export default App;

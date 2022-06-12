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
import { useDispatch } from 'react-redux';
import { isLoaded, isEmpty } from 'react-redux-firebase';
import _isNil from 'lodash/isNil';
import _map from 'lodash/map';

import useAnswerBatch from 'hooks/useAnswerBatch';
import useTypedSelector from 'hooks/useTypedSelector';
import useLocalStorage from 'hooks/useLocalStorage';
import useLocaleString from 'hooks/useLocaleString';
import {
  hideLoader,
  showLoader,
  showModal,
} from 'store/actions/globalActions';
import { getCurrentUserRole } from 'store/actions/userActions';
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
  const auth = useTypedSelector(({ firebase: { auth }}) => auth );
  const forms = useTypedSelector(({ firestore: { ordered: { forms }}}) => forms );
  const isLoading = useTypedSelector(({ global: { isLoading }}) => isLoading );
  const currentUserRole = useTypedSelector(({ usr: { currentUserRole }}) => currentUserRole );
  const [ showDevModal, setShowDevModal ] = useLocalStorage( SHOW_DEV_MODAL_KEY );
  const bodyRef = useRef( document.body );
  const hasCalledRestructuring = useRef( false );

  const { updateFirestoreDataStructure } = useAnswerBatch( auth.uid, '' );

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

  useEffect(() => {
    const shouldRunEffect = isAuthenticated && forms && !hasCalledRestructuring.current;

    console.log( `Should structure update be run? %c${ !!shouldRunEffect }`,
      `color: ${ shouldRunEffect ? 'green' : 'red' }` );
    ( async () => {
      if ( shouldRunEffect ) {
        dispatch( showLoader( PAGES.CREATOR ));

        updateFirestoreDataStructure(
          forms,
          () => { dispatch( hideLoader( PAGES.CREATOR )); },
          () => { dispatch( hideLoader( PAGES.CREATOR )); },
        );
        hasCalledRestructuring.current = true;
      }
    })();
  }, [
    dispatch,
    forms,
    isAuthenticated,
    updateFirestoreDataStructure,
  ]);

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
          { isAuthenticated ? authenticatedRoutes : unauthenticatedRoutes }
          <Redirect from="/*" to={ ROUTES.notFound } />
        </Switch>
        { isAuthenticated && <DrawerMenu items={ menuItems } /> }
        <ProdReleaseModal />
      </>
    );
};

export default App;

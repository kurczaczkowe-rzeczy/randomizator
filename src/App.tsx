import {
  useEffect,
  useMemo,
  useRef,
} from 'react';
import {
  Switch,
  Route,
  Redirect,
  useLocation,
  useHistory,
  useRouteMatch,
} from 'react-router';
import { useDispatch } from 'react-redux';
import { isLoaded, isEmpty } from 'react-redux-firebase';
import _isNil from 'lodash/isNil';
import _map from 'lodash/map';
import _filter from 'lodash/filter';
import _isEmpty from 'lodash/isEmpty';

import { handleAskForPageOrigin } from 'utils/backToOrigin';
import useAnswerBatch from 'hooks/useAnswerBatch';
import useBroadcastChannel from 'hooks/useBroadcastChannel';
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
import { getPageFromPathname } from 'utils/getPageFromPathname';

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

  const { length } = useHistory();
  const { pathname } = useLocation();
  const match = useRouteMatch( ROUTES.guest );
  const { sendData } = useBroadcastChannel({
    onMessage: ({ data }) => {
      handleAskForPageOrigin(
        data,
        length,
        match,
        sendData,
        pathname,
      );
    },
    runsOnce: false,
  });

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
      dispatch( showLoader( getPageFromPathname( pathname )));
    }
  }, [ auth, dispatch, pathname ]);

  useEffect(() => {
    if ( isLoading ) {
      bodyRef.current.style.overflow = 'hidden';
    } else {
      bodyRef.current.removeAttribute( 'style' );
    }
  }, [ isLoading ]);

  const isAuthenticated = isLoaded( auth ) && !isEmpty( auth );

  useEffect(() => {
    if ( hasCalledRestructuring.current ) {
      return;
    }

    const oldStructuredForms = _filter( forms, ({ counter }) => typeof counter !== 'number' );
    const shouldRunEffect = isAuthenticated && !_isEmpty( oldStructuredForms ) && !hasCalledRestructuring.current;
    const hideLoaderAction = (): void => { dispatch( hideLoader( PAGES.CREATOR )); };

    console.log( `Should structure update be run? %c${ !!shouldRunEffect }`,
      `color: ${ shouldRunEffect ? 'green' : 'red' }` );
    if ( _isEmpty( oldStructuredForms ) && forms ) {
      hideLoaderAction();
      console.info( '%cNothing to do. Every forms are now in right structure.', 'color: #4199f7;' );
      hasCalledRestructuring.current = true;

      return;
    }

    ( async () => {
      if ( shouldRunEffect ) {
        dispatch( showLoader( PAGES.CREATOR ));

        updateFirestoreDataStructure( oldStructuredForms, hideLoaderAction, hideLoaderAction );
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
          { isAuthenticated ? authenticatedRoutes : unauthenticatedRoutes }
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
          <Redirect from="/*" to={ ROUTES.notFound } />
        </Switch>
        { isAuthenticated && <DrawerMenu items={ menuItems } /> }
        <ProdReleaseModal />
      </>
    );
};

export default App;

import { useEffect, useRef } from 'react';
import {
  Switch,
  Route,
  Redirect,
} from 'react-router';
import { useDispatch, useSelector } from 'react-redux';
import _isNil from 'lodash/isNil';

import useLocalStorage from 'hooks/useLocalStorage';
import useLocaleString from 'hooks/useLocaleString';
import {
  showLoader,
  hideLoader,
  showModal,
} from 'store/actions/globalActions';
import { RootState } from 'store/reducers/rootReducer';
import {
  ROUTES,
  IS_DEVELOPMENT_MODE,
  SHOW_DEV_MODAL_KEY,
} from 'constans';

import DrawerMenu from 'components/DrawerMenu';
import LoadingScreen from 'components/loadingScreen';
import ProdReleaseModal from 'components/ProdReleaseModal';
import Creator from 'page/creator';
import ErrorPage from 'page/errorPage';
import GuestPage from 'page/guest';
import Login from 'page/login';

import { getMenuItems } from 'App.utils';

const authenticatedRoutes = <Route exact path={ ROUTES.home } component={ Creator } />;
const unauthenticatedRoutes = <Route exact path={ ROUTES.home } component={ Login } />;

const App = (): JSX.Element => {
  const getString = useLocaleString();
  const dispatch = useDispatch();
  const auth = useSelector(( state: RootState ) => state.firebase.auth );
  const isLoading = useSelector(( state: RootState ) => state.global.isLoading );
  const [ showDevModal, setShowDevModal ] = useLocalStorage( SHOW_DEV_MODAL_KEY );
  const bodyRef = useRef( document.body );

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
    if ( !auth.isLoaded ) {
      dispatch( showLoader( 'APP' ));
    } else {
      dispatch( hideLoader( 'APP' ));
    }
  }, [ auth.isLoaded, dispatch ]);

  useEffect(() => {
    if ( isLoading ) {
      bodyRef.current.style.overflow = 'hidden';
    } else {
      bodyRef.current.removeAttribute( 'style' );
    }
  }, [ isLoading ]);

  const menuItems = getMenuItems( getString );

  return (
    <>
      { isLoading && <LoadingScreen /> }
      <Switch>
        <Route exact path={ ROUTES.error } component={ ErrorPage } />
        <Route exact path={ ROUTES.guest } component={ GuestPage } />
        { ( auth.uid !== undefined ) ? authenticatedRoutes : unauthenticatedRoutes }
        <Redirect from="/*" to={ ROUTES.notFound } />
      </Switch>
      { ( auth.uid !== undefined ) && <DrawerMenu items={ menuItems } /> }
      <ProdReleaseModal />
    </>
  );
};

export default App;

import { useEffect, useRef } from 'react';
import {
  Switch,
  Route,
  Redirect,
} from 'react-router';
import { useDispatch, useSelector } from 'react-redux';
import _isNil from 'lodash/isNil';

import Typography from '@material-ui/core/Typography';

import useLocalStorage from 'hooks/useLocalStorage';
import useLocaleString from 'hooks/useLocaleString';
import {
  showLoader,
  hideLoader,
  showModal,
} from 'store/actions/globalActions';
import {
  ROUTES,
  IS_DEVELOPMENT_MODE,
  SHOW_DEV_MODAL_KEY,
} from 'constans';

import Modal from 'components/modal';
import LoadingScreen from 'components/loadingScreen';
import Link from 'components/Link';
import Creator from 'page/creator';
import GuestPage from 'page/guest';
import ErrorPage from 'page/errorPage';
import Login from 'page/login';

import useStyles from './App.styles';

const authenticatedRoutes = <Route exact path={ ROUTES.home } component={ Creator } />;
const unauthenticatedRoutes = <Route exact path={ ROUTES.home } component={ Login } />;

const App = () => {
  const getString = useLocaleString();
  const styles = useStyles();
  const dispatch = useDispatch();
  const auth = useSelector(( state ) => state?.firebase.auth );
  const isLoading = useSelector(( state ) => state?.global.isLoading );
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
      bodyRef.current.style = 'overflow: hidden';
    } else {
      bodyRef.current.removeAttribute( 'style' );
    }
  }, [ isLoading ]);

  const body = (
    <div>
      <Typography classes={{ root: styles.modalParagraph }}>
        { getString( 'modalChangeUrlFirst' ) }
      </Typography>
      <Typography classes={{ root: styles.modalParagraph }}>
        { `${ getString( 'modalChangeUrlSecond' ) } ` }
        <Link href="https://randomizator.web.app" label="randomizator.web.app" />
        {getString( 'modalChangeUrlThird' )}
      </Typography>
      <Typography classes={{ root: styles.modalParagraph }}>
        {getString( 'modalChangeUrlFourth' )}
      </Typography>
    </div>
  );

  return (
    <>
      { isLoading && <LoadingScreen /> }
      <Switch>
        <Route exact path={ ROUTES.error } component={ ErrorPage } />
        <Route exact path={ ROUTES.guest } component={ GuestPage } />
        { ( auth.uid !== undefined ) ? authenticatedRoutes : unauthenticatedRoutes }
        <Redirect from="/*" to={ ROUTES.notFound } />
      </Switch>
      <Modal body={ body } title={ getString( 'modalChangeUrlTitle' ) } classes={{ title: styles.modalTitle }} />
    </>
  );
};

export default App;

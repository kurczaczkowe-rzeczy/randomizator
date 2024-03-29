import { StrictMode } from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension/developmentOnly';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import { createFirestoreInstance, getFirestore } from 'redux-firestore';
import { ReactReduxFirebaseProvider, getFirebase } from 'react-redux-firebase';
import { BrowserRouter } from 'react-router-dom';

import CssBaseline from '@material-ui/core/CssBaseline';
import ThemeProvider from '@material-ui/styles/ThemeProvider';
import StylesProvider from '@material-ui/styles/StylesProvider';

import { firebase } from 'config/firebaseConfig';
import { blockNavigationCb } from 'store/actions/globalActions';
import rootReducer from 'store/reducers/rootReducer';
import { createGenerateClassName } from 'utils/createGenerateClassName';
import { theme } from 'theme';

import Footer from 'components/footer';

import App from 'App';
import * as serviceWorker from './serviceWorker';

const store = createStore( rootReducer,
  composeWithDevTools( applyMiddleware( thunk.withExtraArgument({
    getFirebase,
    getFirestore,
  }))));

const reactReduxFirebaseProps = {
  firebase,
  config: {
    useFirestoreForProfile: true,
    userProfile: 'users',
    attachAuthIsReady: true,
  },
  dispatch: store.dispatch,
  createFirestoreInstance,
};

const generateClassName = createGenerateClassName();

const render = (
  <StrictMode>
    <Provider store={ store }>
      <ReactReduxFirebaseProvider { ...reactReduxFirebaseProps }>
        <StylesProvider generateClassName={ generateClassName }>
          <ThemeProvider theme={ theme }>
            <CssBaseline />
            <BrowserRouter getUserConfirmation={ ( message, callback ) => {
              // ToDo: Create custom dialog with confirmation
              const confirm = window.confirm( message );

              if ( confirm ) {
                // ToDo: Here is probably problem with no recognize ThunkAction as valid dispatch action
                // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                // @ts-ignore
                store.dispatch( blockNavigationCb());
              }

              callback( confirm );
            } }
            >
              <App />
            </BrowserRouter>
            <Footer />
          </ThemeProvider>
        </StylesProvider>
      </ReactReduxFirebaseProvider>
    </Provider>
  </StrictMode>
);

ReactDOM.render( render, document.getElementById( 'root' ));

/* If you want your app to work offline and load faster, you can change
   unregister() to register() below. Note this comes with some pitfalls.
   Learn more about service workers: https://bit.ly/CRA-PWA */
serviceWorker.unregister();

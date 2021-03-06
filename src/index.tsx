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

import { firebase } from 'config/firebaseConfig';
import rootReducer from 'store/reducers/rootReducer';
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

const render = (
  <StrictMode>
    <Provider store={ store }>
      <ReactReduxFirebaseProvider { ...reactReduxFirebaseProps }>
        <ThemeProvider theme={ theme }>
          <CssBaseline />
          <BrowserRouter>
            <App />
          </BrowserRouter>
          <Footer />
        </ThemeProvider>
      </ReactReduxFirebaseProvider>
    </Provider>
  </StrictMode>
);

ReactDOM.render( render, document.getElementById( 'root' ));

/* If you want your app to work offline and load faster, you can change
   unregister() to register() below. Note this comes with some pitfalls.
   Learn more about service workers: https://bit.ly/CRA-PWA */
serviceWorker.unregister();
